/**
 * Title: attribute.model.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 09, July 2023
 */

const express = require("express");

const upload = require("../middlewares/upload.middleware");
const {
  uploadIcon,
  addNewAttribute,
  updateAttribute,
  deleteIcon,
  getAttributeOrAttributes,
  deleteAttribute,
} = require("../controllers/attribute.controller");

const router = express.Router();

router
  .route("/icon")
  .post(upload.single("icon"), uploadIcon)
  .delete(deleteIcon);

router
  .route("/")
  .post(addNewAttribute)
  .patch(updateAttribute)
  .get(getAttributeOrAttributes)
  .delete(deleteAttribute);

module.exports = router;
