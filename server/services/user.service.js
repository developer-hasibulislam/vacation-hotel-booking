/**
 * Title: user.service.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 12, July 2023
 */

const fs = require("fs");
const User = require("../models/user.model");

exports.uploadAvatar = async (req, res) => {
  const file = `${req.protocol}://${req.get("host")}/${req.file.filename}`;

  return res.status(200).json({
    acknowledgement: true,
    message: "Avatar uploaded successfully",
    file,
  });
};

exports.deleteAvatar = async ({ query }, res) => {
  fs.unlink(`./uploads/${query.filename}`, (err) => {
    if (err) {
      return res.status(400).json({
        acknowledgement: true,
        message: "Internal Error",
      });
    } else {
      return res.status(200).json({
        acknowledgement: true,
        message: "Avatar deleted successfully",
      });
    }
  });
};

exports.addNewUser = async (req, res) => {
  await User.create(req.body);

  return res.status(200).json({
    acknowledgement: true,
    message: "User added successfully",
  });
};

exports.getUserOrUsers = async (req, res) => {
  if (req.query.id) {
    // get single user
    const user = await User.findById(req.query.id);

    return res.status(200).json({
      acknowledgement: true,
      message: "User fetched successfully",
      user,
    });
  } else if (req.query.page) {
    // get users by page
    const page = parseInt(req.query.page);
    const limit = 10; // default limit = 10

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const users = await User.find()
      .sort({ updatedAt: -1 })
      .skip(startIndex)
      .limit(limit);
    const total = await User.countDocuments();

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
      message: "Users fetched successfully",
      total,
      users,
      pagination,
    });
  } else {
    // get all users
    const users = await User.find();
    const total = await User.countDocuments();

    return res.status(200).json({
      acknowledgement: true,
      message: "Users fetched successfully",
      total,
      users,
    });
  }
};

exports.updateUser = async (req, res) => {
  if (req.body.password) {
    const user = await User.findById(req.query.id);
    const hashedPassword = await user.encryptPassword(req.body.password);
    user.password = hashedPassword;
    await user.save({ validateBeforeSave: false });

    return res.status(200).json({
      acknowledgement: true,
      message: "User updated successfully",
    });
  } else {
    await User.findByIdAndUpdate(req.query.id, req.body, {
      runValidators: true,
    });

    return res.status(200).json({
      acknowledgement: true,
      message: "User updated successfully",
    });
  }
};
