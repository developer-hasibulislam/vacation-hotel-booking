/**
 * Title: [id].js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

import {
  deleteHotel,
  getSingleHotel,
  updateHotel,
} from "../../../../controllers/hotel.controller";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      await getSingleHotel(req, res);
      break;
    case "PATCH":
      await updateHotel(req, res);
      break;
    case "DELETE":
      await deleteHotel(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PATCH", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
