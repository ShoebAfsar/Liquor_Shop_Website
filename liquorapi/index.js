import express, { response } from "express";
import mongoose from "mongoose";
import { ERROR_MESSAGE, INSERT_SUCCESS, NOT_FOUND, UPDATE_SUCCESS, DELETE_SUCCESS } from "./constants.js";
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';
import { Admin } from "./Adminmodel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


function verifyToken(request, response, next) {
    const header = request.get('Authorization');
    if (header) {
        const token = header.split(" ")[1];
        jwt.verify(token, "secret1234", (error, decoded) => {
            if (error) {
                response.status(StatusCodes.UNAUTHORIZED).send({ message: "Invalid token" });
            } else {
                next();
            }
        });
    } else {
        response.status(StatusCodes.UNAUTHORIZED).send({ message: "please login First" });
    }

}

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

app.post("/admin/signup", async (request, response) => {
    try {
        const reqData = request.body;
        const existingUser = await Admin.findOne({ email: reqData.email });
        const existingPhoneUser = await Admin.findOne({ phone: reqData.phone });

        if (existingUser) {
            // If the email exists, send an error response
            response.status(StatusCodes.BAD_REQUEST).send({ message: "User with this email already exists." });
        } else if (existingPhoneUser) {
            // If the phone number exists, send an error response
            response.status(StatusCodes.BAD_REQUEST).send({ message: "User with this phone number already exists." });
        } else {
            reqData['password'] = bcrypt.hashSync(reqData.password, 10);
            const admin = new Admin(reqData);
            await admin.save();
            response.status(StatusCodes.CREATED).send({ message: INSERT_SUCCESS });
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});

app.post("/admin/login", async (request, response) => {
    try {
        const admin = await Admin.findOne({ email: request.body.email });
        if (admin) {
            if (bcrypt.compareSync(request.body.password, admin.password)) {
                //generate Token

                const token = jwt.sign({ adminEmail: admin.email }, "secret1234")

                response.status(StatusCodes.OK).send({ message: "Login Successful", token: token });
            }
            else {
                response.status(StatusCodes.BAD_REQUEST).send({ message: "Invalid Email or Password" });
            }
        }
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
});

app.get("/admin/login", verifyToken, async (request, response) => {
    try {
        const user = await Admin.find();
        response.send({ user });
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: ERROR_MESSAGE });
    }
})

app.listen(5900, () => {
    console.log("server has started on 5900");
    connectDb();
});