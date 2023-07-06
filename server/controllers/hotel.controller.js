/**
 * Title: hotel.controller.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

const {
  uploadImages,
  addNewHotel,
  getAllHotels,
  getSingleHotel,
  updateHotel,
  deleteHotel,
  deleteMultipleHotels,
} = require("../services/hotel.service");

exports.uploadImages = async (req, res, next) => {
  try {
    await uploadImages(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};

exports.addNewHotel = async (req, res, next) => {
  try {
    await addNewHotel(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};

exports.getAllHotels = async (req, res, next) => {
  try {
    await getAllHotels(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};

exports.getSingleHotel = async (req, res, next) => {
  try {
    await getSingleHotel(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};

exports.updateHotel = async (req, res, next) => {
  try {
    await updateHotel(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};

exports.deleteMultipleHotels = async (req, res, next) => {
  try {
    await deleteMultipleHotels(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};

exports.deleteHotel = async (req, res, next) => {
  try {
    await deleteHotel(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};
