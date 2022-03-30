const mongoose = require("mongoose");


const carschema=new mongoose.Schema({
    carname:{type:String, required:true},
    carimage:{type:String, required:true},
    transmission:{type:String, required:true},
    fuel:{type:String, required:true},
    seates:{type:Number, required:true},
    reating:{type:Number, required:true},
    types:{type:String, required:true},
    driven:{type:Number, required:true},
    price:{type:Number, required:true},
},
{
    versionKey:false,
    timestamps:true,
});

const cars=mongoose.model("carscollection",carschema);
module.exports=cars;