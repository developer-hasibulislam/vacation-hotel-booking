/**
 * Title: [image].js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 05, July 2023
 */

import fs from "fs";
import path from "path";
import errorHandler from "../../../../middleware/error.middleware";

export default async function handler(req, res) {
  const { method, query } = req;

  const { path: filePath } = query;
  const absolutePath = path.join(process.cwd(), "public/uploads", filePath);
  console.log(absolutePath);

  switch (method) {
    case "DELETE":
      try {
        fs.unlink(absolutePath, (err) => {
          if (err) {
            // errorHandler(err, req, res);
            res.status(400).json({
              acknowledgement: true,
              message: "Internal Error",
            });
          } else {
            res.status(200).json({
              acknowledgement: true,
              message: "Image deleted successfully",
            });
          }
        });
      } catch (error) {
        errorHandler(error, req, res);
      }
      break;
    default:
      res.setHeader("Allow", ["DELETE", "PATCH"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
