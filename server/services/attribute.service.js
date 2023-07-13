/**
 * Title: attribute.service.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 09, July 2023
 */

const fs = require("fs");
const Attribute = require("../models/attribute.model");

exports.uploadIcon = async (req, res) => {
  const file = `${req.protocol}://${req.get("host")}/${req.file.filename}`;

  return res.status(200).json({
    acknowledgement: true,
    message: "Images uploaded successfully",
    file,
  });
};

exports.deleteIcon = async ({ query }, res) => {
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

exports.addNewAttribute = async ({ body }, res) => {
  await Attribute.create(body);

  return res.status(200).json({
    acknowledgement: true,
    message: "Attribute added successfully",
  });
};

exports.updateAttribute = async ({ query, body }, res) => {
  await Attribute.findOneAndUpdate({ title: query.title }, body, { new: true });

  return res.status(200).json({
    acknowledgement: true,
    message: "Attribute updated successfully",
  });
};

exports.getAttributeOrAttributes = async (req, res) => {
  if (req.query.id) {
    // get single attribute
    const attribute = await Attribute.findById(req.query.id);

    return res.status(200).json({
      acknowledgement: true,
      message: "Attribute fetched successfully",
      attribute,
    });

    // get attributes by page
  } else if (req.query.page) {
    const page = parseInt(req.query.page);
    const limit = 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const attributes = await Attribute.find()
      .sort({ updatedAt: -1 })
      .skip(startIndex)
      .limit(limit);

    const total = await Attribute.countDocuments();

    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit,
      };
    } else if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit,
      };
    }

    return res.status(200).json({
      acknowledgement: true,
      message: "Attributes fetched successfully",
      total,
      attributes,
      pagination,
    });
    // get all attributes
  } else {
    const attributes = await Attribute.find();

    return res.status(200).json({
      acknowledgement: true,
      message: "Attributes fetched successfully",
      attributes,
    });
  }
};

exports.deleteAttribute = async ({ query }, res) => {
  await Attribute.findOneAndUpdate(
    { _id: query.id },
    { $pull: { items: { item: query.item } } },
    { new: true }
  );

  return res.status(200).json({
    acknowledgement: true,
    message: "Attribute deleted successfully",
  });
};
