/**
 * Title: index.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

import {
  addNewHotel,
  getAllHotels,
  deleteMultipleHotels,
} from "../../../../controllers/hotel.controller";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      await getAllHotels(req, res);
      break;
    case "POST":
      await addNewHotel(req, res);
      break;
    case "DELETE":
      await deleteMultipleHotels(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
