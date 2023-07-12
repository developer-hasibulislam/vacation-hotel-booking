/**
 * Title: user.model.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 12, July 2023
 */

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    // user name
    username: {
      type: String,
      unique: true,
    },

    // full name
    name: {
      firstName: String,
      lastName: String,
    },

    // email
    email: {
      type: String,
      unique: true,
    },

    // password
    password: String,

    // date of birth
    dateOfBirth: Date,

    // phone number
    phoneNumber: {
      type: String,
      unique: true,
      sparse: true,
    },

    // about self
    bio: String,

    // avatar
    avatar: String,

    // address
    address: {
      addressLine1: {
        type: String,
        default: "N/A",
      },
      addressLine2: {
        type: String,
        default: "N/A",
      },
      city: {
        type: String,
        default: "N/A",
      },
      state: {
        type: String,
        default: "N/A",
      },
      country: {
        type: String,
        default: "N/A",
      },
      zipCode: {
        type: Number,
        default: 0,
      },
    },

    // role
    role: {
      type: String,
      enum: ["vendor", "admin", "user"],
      default: "user",
    },

    // status
    status: {
      type: String,
      enum: ["active", "inactive", "pause"],
      default: "active",
    },

    // vendor hotels
    hotels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
      },
    ],
  },
  { timestamps: true }
);

// Before saving the user, hash the password
userSchema.pre("save", async function (next) {
  const user = this;

  // Only hash the password if it has been modified or is new
  if (!user.isModified("password")) {
    return next();
  }

  try {
    // Generate a salt to hash the password
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the generated salt
    const hashedPassword = await bcrypt.hash(user.password, salt);
    // Set the hashed password
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
