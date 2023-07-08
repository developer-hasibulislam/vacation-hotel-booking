/**
 * Title: hotel.service.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

const fs = require("fs");
const Hotel = require("../models/vendor/hotel.model");

exports.uploadImages = async (req, res) => {
  const files = {};

  for (const field in req.files) {
    files[field] = req.files[field].map(
      (file) => `${req.protocol}://${req.get("host")}/${file.filename}`
    );
  }

  return res.status(200).json({
    acknowledgement: true,
    message: "Images uploaded successfully",
    files,
  });
};

exports.deleteImage = async function ({ query }, res) {
  fs.unlink(`./uploads/${query.filename}`, (err) => {
    if (err) {
      return res.status(400).json({
        acknowledgement: true,
        message: "Internal Error",
      });
    } else {
      return res.status(200).json({
        acknowledgement: true,
        message: "Image deleted successfully",
      });
    }
  });
};

exports.addNewHotel = async ({ body }, res) => {
  await Hotel.create(body);

  return res.status(200).json({
    acknowledgement: true,
    message: "Hotel added successfully",
  });
};

exports.getHotelOrHotels = async (req, res) => {
  if (req.query.id) {
    // get single hotel
    const hotel = await Hotel.findById(req.query.id);

    return res.status(200).json({
      acknowledgement: true,
      message: "Hotel fetched successfully",
      hotel,
    });
  } else if (req.query.page) {
    // get hotels by page
    const page = parseInt(req.query.page);
    const limit = 10; // default limit = 10

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const hotels = await Hotel.find()
      .sort({ updatedAt: -1 })
      .skip(startIndex)
      .limit(limit);
    const total = await Hotel.countDocuments();

    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      pagination.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    res.send({
      acknowledgement: true,
      message: "Hotels fetched successfully",
      hotels,
      pagination,
    });
  } else {
    // get all hotels
    const hotels = await Hotel.find();
    const total = await Hotel.countDocuments();

    return res.status(200).json({
      acknowledgement: true,
      message: "Hotels fetched successfully",
      total,
      hotels,
    });
  }
};

exports.updateHotel = async ({ query, body }, res) => {
  await Hotel.findByIdAndUpdate(query.id, body);

  return res.status(200).json({
    acknowledgement: true,
    message: "Hotel updated successfully",
  });
};

exports.deleteHotelOrHotels = async (req, res) => {
  if (req.query.id) {
    await Hotel.findByIdAndDelete(req.query.id);

    return res.status(200).json({
      acknowledgement: true,
      message: "Hotel deleted successfully",
    });
  } else {
    await Hotel.deleteMany({ _id: { $in: req.body } });

    return res.status(200).json({
      acknowledgement: true,
      message: "Hotels deleted successfully",
    });
  }
};
