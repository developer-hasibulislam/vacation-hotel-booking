/**
 * Title: error.middleware.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

const errorHandler = async (err, _, res, __) => {
  res.status(500).json({
    acknowledgement: false,
    message: err.name,
  });
};

export default errorHandler;
