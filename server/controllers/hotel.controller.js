/**
 * Title: hotel.controller.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

const {
  uploadImages,
  deleteImage,
  addNewHotel,
  getHotelOrHotels,
  updateHotel,
  deleteHotelOrHotels,
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

exports.deleteImage = async (req, res, next) => {
  try {
    await deleteImage(req, res);
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

exports.getHotelOrHotels = async (req, res, next) => {
  try {
    await getHotelOrHotels(req, res);
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

exports.deleteHotelOrHotels = async (req, res, next) => {
  try {
    await deleteHotelOrHotels(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};
