const express = require("express");

 const {register,login} = require("./controllers/user.controller");
 const bookingcontroller =require("./controllers/booking.controller")
 const carscontroller=require("./controllers/carscollection.controller")
 const user=require("./controllers/userdetails.controller")

const app = express();

app.use(express.json());

app.use("/users",user);

  app.use("/cars", carscontroller);
  app.use("/bookings", bookingcontroller);

  app.post("/register", register);

app.post("/login", login);

module.exports = app;
