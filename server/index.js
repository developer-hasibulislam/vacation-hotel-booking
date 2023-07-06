/**
 * Title: index.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 05, July 2023
 */

/* external import */
const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

/* database connection */
mongoose
  .set("strictQuery", false)
  .connect(process.env.ATLAS_URI, {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connection established."))
  .catch((error) => console.log(error.message));

/* establish server port */
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
