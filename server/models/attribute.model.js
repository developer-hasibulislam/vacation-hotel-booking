/**
 * Title: attribute.model.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 09, July 2023
 */

const mongoose = require("mongoose");

const attributeSchema = new mongoose.Schema(
  {
    title: String,
    items: [
      {
        item: String,
        icon: String,
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Attribute =
  mongoose.models.Attribute || mongoose.model("Attribute", attributeSchema);

module.exports = Attribute;
