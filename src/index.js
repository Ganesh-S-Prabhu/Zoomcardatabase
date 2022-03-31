const express = require("express");

 const userController = require("./controllers/user.controller");
 const bookingcontroller =require("./controllers/booking.controller")
 const carscontroller=require("./controllers/carscollection.controller")

const app = express();

app.use(express.json());

  app.use("/cars", carscontroller);
  app.use("/bookings", bookingcontroller);

module.exports = app;
