/**
 * Title: hotel.service.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

const { default: Hotel } = require("../model/hotel.model");

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

exports.getSingleHotel = async ({ query }, res) => {
  const hotel = await Hotel.findById(query.id);

  return res.status(200).json({
    acknowledgement: true,
    message: "Hotel fetched successfully",
    hotel,
  });
};

exports.updateHotel = async ({ query, body }, res) => {
  await Hotel.findByIdAndUpdate(query.id, body);

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

exports.deleteHotel = async ({ query }, res) => {
  await Hotel.findByIdAndDelete(query.id);

  return res.status(200).json({
    acknowledgement: true,
    message: "Hotel deleted successfully",
  });
};
