// Rapid API
const unirest = require("unirest");
const keys = require("../keys/keys");

const ipLocationApiRequest = ipAddress => {
  return new Promise((resolve, reject) => {
    return unirest
      .post(keys.apiURL)
      .header(keys.apiHeader, keys.apiKey)
      .header("Content-Type", "application/x-www-form-urlencoded")
      .send("reverse-lookup=false")
      .send(`ip=${ipAddress}`)
      .end(function(result) {
        // If there is no IP address, return reject
        if (!result.body.valid) {
          return reject();
        }
        // Set the data to a string and pass to resolve
        let resultIp = result.body.ip;
        let resultLocation = result.body.city;
        let resultCountry = result.body.country;
        let resultCoor = [result.body.latitude, result.body.longitude];
        // If successful return resolve result.body
        return resolve({
          ip: resultIp,
          location: resultLocation,
          country: resultCountry,
          coor: resultCoor
        });
      });
  }).catch(() => {
    // Return nothing if there is an error found
    // The function " setCookie"in server.js will catch the error
    return;
  });
};

module.exports = ipLocationApiRequest;
