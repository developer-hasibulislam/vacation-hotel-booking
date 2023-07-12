/**
 * Title: app.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 05, July 2023
 */

/* external imports */
const express = require("express");
const cors = require("cors");
require("dotenv").config();

/* internal import */
const error = require("./middlewares/error.middleware");

/* router level imports */
const userRouter = require("./routes/user.route");
const hotelRouter = require("./routes/hotel.route");
const attributeRouter = require("./routes/attribute.route");

/* application level connection */
const app = express();

// Increase the payload limit to 10mb
app.use(express.raw({ limit: "10mb" }));

app.use(express.static("uploads"));

/* cors policy connections */
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

/* router level connections */
app.use("/api/user", userRouter);
app.use("/api/vendor", hotelRouter);
app.use("/api/attribute", attributeRouter);

/* global error handler */
app.use(error);

/* connection establishment */
app.get("/", (req, res, next) => {
  try {
    res.status(200).json({
      acknowledgement: true,
      message: "Welcome to the server.",
    });
  } catch (err) {
    next(err);
  } finally {
    console.log(
      `${req.method}: ${req.protocol}://${req.get("host")}${req.originalUrl}`
    );
  }
});

/* export application */
module.exports = app;
