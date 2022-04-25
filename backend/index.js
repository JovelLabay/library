const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");

// ROUTES
const authRoutes = require("./src/routes/authRoutes");

// ENV
require("dotenv").config();

// MIDDLEWARE
const app = express();
app.use(bodyParse.json());
app.use(
  cors({
    origin: "http//localhost:3000",
  })
);

// DATABASE CONNECTION AND PORT LISTENING
const port = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_STRING_CONNECTION)
  .then((res) => {
    app.listen(port, () => {
      console.log(res, { message: `The server is running on port ${port}` });
    });
  })
  .catch((e) => {
    console.log(e, { message: `The database server is down on ${port}` });
  });

// ROUTER
app.use(authRoutes);
