const express = require("express");
// Import keys for API
const keys = require("./keys/keys");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const Cryptr = require("cryptr");
// Rapid API
const unirest = require("unirest");
// Limiter Functions
const getApiLimiter = require("./Limiter/getApiLimiter");
// Api Request Functions
const ipLocationApiRequest = require("./ApiRequests/ipLocationApiRequest");

const app = express();
app.use(cookieParser());
// Express rate-limit
// Use only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
app.enable("trust proxy");
app.use(express.static(path.join(__dirname, "../client/build")));

// Get request for API
app.get("/ip", getApiLimiter, (req, res) => {
  // ================== WARNING==================
  // THIS IS AN EXAMPLE PROJECT
  // DO NOT USE THIS METHOD OF ENCRYPTION IN REAL A PRODUCTION APPLICATION
  // DO NOT USE THIS METHOD FOR STORING PASSWORDS
  // THESE METHODS WERE USED TO SHOWCASE WHAT I HAVE LEARNED
  // FOR REAL WORLD APPLICATIONS USE ONE WAY HASHING SUCH AS "BCRYPT"
  // USE THIS ENCRYPTION METHOD AT YOUR OWN RISK

  // NOTES
  // In order for the cookie to appear, you must send it.
  // EX: res.cookie("name", "express").send("cookie set");
  // EX: res.clearCookie("name").send("Deleted");

  // Run the limiter on this API request
  // Assign Cryptr to cryptr
  // Use a strong random word for encryption and create a cryptr
  const cryptr = new Cryptr(keys.cryptrKey);
  // Place the appropriate keys for the get function
  // Set the user's cookie to a const
  let userCookieIp = req.cookies["privacy_site_limiter_1"];
  // With cookies, check if the user has recently used our site
  if (userCookieIp) {
    // Decrypt the cookie data
    let decryptedString = cryptr.decrypt(userCookieIp);
    // Parse the JSON data from the decrypt function
    let newDecryptionString = JSON.parse(decryptedString);
    // Send the json parsed data to the client
    return res.send(newDecryptionString);
  }

  const ipHeader = () => {
    let ipAddress;
    // Amazon EC2 / Heroku workaround to get real client IP
    let forwardedIpsStr = req.header("x-forwarded-for");
    if (forwardedIpsStr) {
      // 'x-forwarded-for' header may return multiple IP addresses in
      // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
      // the first one
      let forwardedIps = forwardedIpsStr.split(",");
      ipAddress = forwardedIps[0];
    }
    if (!ipAddress) {
      // Ensure getting client IP address still works in
      // development environment
      ipAddress = req.connection.remoteAddress;
    }
    return ipAddress;
  };

  // Set the user's cookie if none found
  const setCookie = data => {
    return new Promise((resolve, reject) => {
      if (!data) {
        return reject();
      }
      // Create a string encrypting the user's IP Address
      // Send this data object to the user
      let dataObject = {
        ip: data.ip,
        location: data.location,
        country: data.country,
        coor: data.coor
      };

      // Set this for the encryption
      // Make sure the stringify the object for storage
      // We do this because there is no universally agreed-upon specification for param strings,
      let encryptedString = cryptr.encrypt(JSON.stringify(dataObject));
      // Set the encrypted cookie
      res
        .cookie("privacy_site_limiter_1", encryptedString, {
          // Max age is calcuated in milliseconds
          maxAge: 60000
        })
        .send(dataObject);
      // Return resolve to complete the promise
      return resolve();
    }).catch(() => {
      // Send an error if failed to get the IP Address
      return res.status(400).send("Error");
    });
  };

  // Use async await and promise to fetch API
  const getUserIp = async () => {
    // Get the Ip address via header
    let userIp = await ipHeader();
    // Set the API request to userIP
    let userLocation = await ipLocationApiRequest(userIp);
    // Pass the API data into the setCookie function
    await setCookie(userLocation);
  };

  // Call function to start API Request
  getUserIp();
});

// Moved the app get client to the bottom of the express app
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client", "build/index.html"));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
