/**
 * Title: user.route.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 12, July 2023
 */

const express = require("express");
const upload = require("../middlewares/upload.middleware");
const {
  uploadAvatar,
  deleteAvatar,
  addNewUser,
  getUserOrUsers,
  updateUser,
} = require("../controllers/user.controller");

const router = express.Router();

router
  .route("/avatar")
  .post(upload.single("avatar"), uploadAvatar)
  .delete(deleteAvatar);

router.route("/").post(addNewUser).get(getUserOrUsers).patch(updateUser);

module.exports = router;
