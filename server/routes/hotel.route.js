/**
 * Title: hotel.route.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 06, July 2023
 */

const express = require("express");
const upload = require("../middlewares/upload.middleware");
const {
  uploadImages,
  deleteImage,
  addNewHotel,
  getHotelOrHotels,
  updateHotel,
  deleteHotelOrHotels,
} = require("../controllers/hotel.controller");

const router = express.Router();

router
  .route("/hotel/images")
  .post(
    upload.fields([
      { name: "bannerImages" },
      { name: "galleryImages" },
      { name: "featuredImages" },
    ]),
    uploadImages
  )
  .delete(deleteImage);

router
  .route("/hotel")
  .post(addNewHotel)
  .get(getHotelOrHotels)
  .patch(updateHotel)
  .delete(deleteHotelOrHotels);

module.exports = router;
