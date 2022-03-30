const express = require("express");

 const userController = require("./controllers/user.controller");
 const bookingcontroller =require("./controllers/booking.controller")
 const carscollectioncontroller=require("./controllers/carscollection.controller")

const app = express();

app.use(express.json());

//  app.use("/users", userController);

module.exports = app;
