/**
 * Title: error.middleware.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 05, July 2023
 */

function error(err, _, res, _) {
  res.status(err.status || 500).json({
    acknowledgement: false,
    message: err.message || "Internal Server Error",
  });
}

module.exports = error;