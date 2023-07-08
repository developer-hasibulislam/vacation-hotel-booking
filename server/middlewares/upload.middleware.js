/**
 * Title: imagesUpload.middleware.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 06, July 2023
 */

const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (_, file, cb) => {
    cb(
      null,
      Date.now() + "_" + file.originalname.replace(/[\ \-]/g, "_").toLowerCase()
    );
  },
});

const fileFilter = (_, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/svg+xml"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
