const rateLimit = require("express-rate-limit");

const getApiLimiter = rateLimit({
  // The first number in windows indicates minutes
  windowMs: 2 * 60 * 1000, // 2 minute window
  max: 10, // start blocking after 10 repeated requests
  message: "Too many requests at this moment, please try again later"
});

module.exports = getApiLimiter;
