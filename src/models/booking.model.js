const mongoose = require("mongoose");


const bookingschema=new mongoose.Schema({
    address:{type:String, required:true},
    startdate:{type:Date, required:true},
    enddate:{type:Date, required:true},
    price:{type:Number,required:true},
    carid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"carscollection",
        required:true,
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },


},
{
    versionKey:false,
    timestamps:true,
});

const bookings=mongoose.model("booking",bookingschema);
module.exports=bookings;