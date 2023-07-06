/**
 * Title: hotel.model.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

import { Schema, model, models } from "mongoose";
import connectDB from "../database/connect";

connectDB();

const hotelSchema = new Schema(
  {
    // 1. Content Part • required
    name: String,
    content: String,
    youTubeVideoURL: String,
    bannerImages: [String],
    galleryImages: [String],
    featuredImages: [String],
    status: {
      type: String,
      enum: ["pending", "confirmed", "rejected"],
      default: "pending",
    },

    // 2. Location Part
    location: String, // required
    mapLatitude: {
      type: String,
      default: "N/A",
    },
    mapLongitude: {
      type: String,
      default: "N/A",
    },
    surroundings: [
      {
        surroundingTitle: String,
        surroundingDescription: [
          {
            surroundingName: {
              type: String,
              default: "N/A",
            },
            surroundingContent: {
              type: String,
              default: "N/A",
            },
            surroundingDistance: {
              type: String,
              default: "N/A",
            },
            surroundingCountry: {
              type: String,
              default: "N/A",
            },
          },
        ],
      },
    ],

    // 3. Price Part
    price: {
      regularPrice: Number, // required
      extraPrice: {
        type: Number,
        default: 0,
      },
      serviceFee: {
        type: Number,
        default: 0,
      },
    },
    checkInTime: String, // required
    checkOutTime: String, // required
    minimumAdvanceReservation: Number, // required
    minimumDaysStay: Number, // required

    // 4. Attributes Part
    attributes: {
      facilities: [
        // required
        {
          facilityName: String,
          facilityLists: [String],
        },
      ],
      facts: [
        {
          factName: String,
          faceContent: [
            {
              factContentName: String, // required
              factContentValue: {
                type: String,
                default: "N/A",
              },
            },
          ],
        },
      ],
    },
  },
  { timestamps: true }
);

const Hotel = models.Hotel || model("Hotel", hotelSchema);

export default Hotel;
