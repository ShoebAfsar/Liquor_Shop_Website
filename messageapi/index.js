import express, { response } from "express";
import mongoose from "mongoose";
import { ERROR_MESSAGE, INSERT_SUCCESS, DELETE_SUCCESS } from "./constants.js";
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';
import { Message } from "./messagemodel.js";


const app = express();
app.use(cors());
app.use(express.json());

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/shopdb');
        console.log("Database Connection Created");
    } catch (error) {
        console.log(error);
    }
}

app.post("/message", async (request, response) => {
    try {
        console.log(response.data);
        const reqData = request.body;
        const existingMessage = await Message.findOne({ email: reqData.email });
        
        if (existingMessage) {
            // If the message exists, send an error response
            response.status(StatusCodes.BAD_REQUEST).send({ message: "Message Already Sent." });
        } 
        else {
            const message = new Message(reqData);
            await message.save();
            response.status(StatusCodes.CREATED).send({ message: INSERT_SUCCESS });
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});


app.get("/message/details",async(request,response)=>{
    try {
        const data = await Message.find();
        response.send({message:data});
    } catch (error) {
        response.status(500).send({message:ERROR_MESSAGE});
    }
});


app.delete("/message/:email",async(request,response)=>{
    try {
        await Message.deleteOne({email:request.params.email});
        response.send({message:DELETE_SUCCESS});
    } catch (error) {
        response.status(500).send({message:ERROR_MESSAGE});
    }
});




app.listen(5700, () => {
    console.log("server has started on 5700");
    connectDb();
});

