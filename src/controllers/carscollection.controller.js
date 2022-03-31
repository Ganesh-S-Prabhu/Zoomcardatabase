// Posting the details of car

const express=require("express");
const router = express.Router();

let carschema=require("../models/carscollection.model");


router.post("", async(req,res) =>{

    try{

        const cars = await carschema.create(req.body)
        return res.status(201).send(cars)
    }
    catch(err){
        return res.status(401).send({message : err.message})
    }
});


router.get("/:city", async(req,res) =>{
    try{

        const cars = await carschema.find({city:req.params.city}).lean().exec();
        return res.status(200).send(cars)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
})


module.exports=router;