const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");
const os = require("os");

// ROUTES
const authRoutes = require("./src/routes/authRoutes");
const inventoryRoutes = require("./src/routes/inventoryRoutes");
const getInventoryRoutes = require("./src/routes/getInventoryRoutes");

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
      console.log(res, {
        runningServer: `The server is running on port ${port}`,
        computerMemory: os.freemem(),
        computerArch: os.arch(),
        computer: os.release(),
      });
    });
  })
  .catch((e) => {
    console.log(e, { runningServer: `The database server is down on ${port}` });
  });

// ROUTER
app.use(authRoutes, inventoryRoutes, getInventoryRoutes);
