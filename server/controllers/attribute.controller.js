/**
 * Title: attribute.controller.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 09, July 2023
 */

const {
  uploadIcon,
  addNewAttribute,
  updateAttribute,
  deleteIcon,
  getAttributeOrAttributes,
} = require("../services/attribute.service");

exports.uploadIcon = async (req, res, next) => {
  try {
    await uploadIcon(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};

exports.deleteIcon = async (req, res, next) => {
  try {
    await deleteIcon(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};

exports.addNewAttribute = async (req, res, next) => {
  try {
    await addNewAttribute(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};

exports.updateAttribute = async (req, res, next) => {
  try {
    await updateAttribute(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};

exports.getAttributeOrAttributes = async (req, res, next) => {
  try {
    await getAttributeOrAttributes(req, res);
  } catch (error) {
    next(error);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.path}`
    );
  }
};
