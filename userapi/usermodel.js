import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    name:String,
    phone:String,
    email:String,
    password:String
});

export const User = mongoose.model('user',userSchema);