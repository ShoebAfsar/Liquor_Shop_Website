import mongoose, {  Schema } from "mongoose";

const addtocart=new Schema({
    user:String,
    phone:Number,
    address:String,
    id_no:Number,
    price:Number,
});

export const Shop=mongoose.model("shop",addtocart);//it will generate collection