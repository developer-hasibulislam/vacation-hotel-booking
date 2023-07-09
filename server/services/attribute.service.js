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

exports.updateAttribute = async ({ body }, res) => {
  await Attribute.findByIdAndUpdate(body._id, body, { new: true });

  return res.status(200).json({
    acknowledgement: true,
    message: "Attribute updated successfully",
  });
};

exports.getAttributes = async (req, res) => {
  const attributes = await Attribute.find();

  return res.status(200).json({
    acknowledgement: true,
    message: "Attributes fetched successfully",
    attributes,
  });
};
