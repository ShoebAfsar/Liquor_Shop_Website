import mongoose, {Schema} from "mongoose";

const messageSchema = new Schema({
    name:String,
    email:String,
    shippinginformation:String,
    orderdetails:String
});

export const Message = mongoose.model('message',messageSchema);