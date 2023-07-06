/**
 * Title: hotel.controller.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

const { default: errorHandler } = require("../middleware/error.middleware");
const {
  addNewHotel,
  getAllHotels,
  getSingleHotel,
  updateHotel,
  deleteHotel,
  deleteMultipleHotels,
} = require("../services/hotel.service");

exports.addNewHotel = async (req, res) => {
  try {
    await addNewHotel(req, res);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

exports.getAllHotels = async (req, res) => {
  try {
    await getAllHotels(req, res);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

exports.getSingleHotel = async (req, res) => {
  try {
    await getSingleHotel(req, res);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

exports.updateHotel = async (req, res) => {
  try {
    await updateHotel(req, res);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

exports.deleteMultipleHotels = async (req, res) => {
  try {
    await deleteMultipleHotels(req, res);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    await deleteHotel(req, res);
  } catch (error) {
    errorHandler(error, req, res);
  }
};
