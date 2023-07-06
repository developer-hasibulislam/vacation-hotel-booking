/**
 * Title: hotel.service.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

const Hotel = require("../models/vendor/hotel.model");

exports.uploadImages = async (req, res) => {
  const files = {};

  for (const field in req.files) {
    files[field] = req.files[field].map((file) => file.filename);
  }

  return res.status(200).json({
    acknowledgement: true,
    message: "Images uploaded successfully",
    files,
  });
};

exports.addNewHotel = async ({ body }, res) => {
  await Hotel.create(body);

  return res.status(200).json({
    acknowledgement: true,
    message: "Hotel added successfully",
  });
};

exports.getAllHotels = async (_, res) => {
  const hotels = await Hotel.find().select("_id");
  const total = await Hotel.countDocuments();

  return res.status(200).json({
    acknowledgement: true,
    message: "Hotels fetched successfully",
    total,
    hotels,
  });
};

exports.getSingleHotel = async ({ params }, res) => {
  const hotel = await Hotel.findById(params.id);

  return res.status(200).json({
    acknowledgement: true,
    message: "Hotel fetched successfully",
    hotel,
  });
};

exports.updateHotel = async ({ params, body }, res) => {
  await Hotel.findByIdAndUpdate(params.id, body);

  return res.status(200).json({
    acknowledgement: true,
    message: "Hotel updated successfully",
  });
};

exports.deleteMultipleHotels = async ({ body }, res) => {
  await Hotel.deleteMany({ _id: { $in: body } });

  return res.status(200).json({
    acknowledgement: true,
    message: "Hotels deleted successfully",
  });
};

exports.deleteHotel = async ({ params }, res) => {
  await Hotel.findByIdAndDelete(params.id);

  return res.status(200).json({
    acknowledgement: true,
    message: "Hotel deleted successfully",
  });
};
