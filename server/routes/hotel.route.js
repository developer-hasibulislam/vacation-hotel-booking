/**
 * Title: hotel.route.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 06, July 2023
 */

const express = require("express");
const upload = require("../middlewares/upload.middleware");
const { uploadImages } = require("../controllers/hotel.controller");

const router = express.Router();

router
  .route("/images")
  .post(
    upload.fields([
      { name: "bannerImages" },
      { name: "galleryImages" },
      { name: "featuredImages" },
    ]),
    uploadImages
  );

module.exports = router;
