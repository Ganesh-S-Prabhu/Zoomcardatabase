// Post for booking
// Get for booking

const express=require("express");
const authenticate=require("../middleware/authenticate")
const router = express.Router();

let bookingschema=require("../models/booking.model");

router.post("",authenticate, async(req,res) =>{
    try{
        req.body.user_id = req.userID;

        const booking = await bookingschema.create(req.body)
        return res.status(201).send(booking)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
});



router.get("",authenticate, async(req,res) =>{
    try{

        const bookings = await bookingschema.find({userid:req.userID}).populate("carid").lean().exec();
        return res.status(201).send(bookings)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
})

router.get("/:id", async(req,res) =>{
    try{
        const bookings= await bookingschema.findById(req.params.id).populate("carid").lean().exec();
        return res.status(201).send(bookings)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
})


router.patch("/:id", async(req,res) =>{
    try{
        const bookings= await bookingschema.findByIdAndUpdateq(req.params.id,req.body,{new:true}).populate("carid").lean().exec();
        return res.status(201).send(bookings)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
})

module.exports=router;