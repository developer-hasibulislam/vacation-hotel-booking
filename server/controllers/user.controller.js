/**
 * Title: user.controller.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 12, July 2023
 */

const {
  uploadAvatar,
  deleteAvatar,
  addNewUser,
  getUserOrUsers,
} = require("../services/user.service");

exports.uploadAvatar = async (req, res, next) => {
  try {
    await uploadAvatar(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
  }
};

exports.deleteAvatar = async (req, res, next) => {
  try {
    await deleteAvatar(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
  }
};

exports.addNewUser = async (req, res, next) => {
  try {
    await addNewUser(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
  }
};

exports.getUserOrUsers = async (req, res, next) => {
  try {
    await getUserOrUsers(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
  }
};
