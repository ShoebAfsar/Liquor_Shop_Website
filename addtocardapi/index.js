import express, { request, response } from 'express';
import mongoose from 'mongoose';
import { Shop } from './addtocartSchema.js';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json());
const connectDb=async ()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/shopdb');
        console.log("Database Connected");
    }
    catch(error){
        console.log(error)
    }
}

app.post("/shop",async(request,response)=>{
    try{
        const reqData=request.body;
        const add=new  Shop(reqData) ;
        await add.save();
        response.send({message:'data inserted'});
    }
    catch(error){
        response.send({message:'something went wrong'});
    }
})

app.get("/shop",async (request,response)=>{
    try{
        const product=await Shop.find()
        response.send({shop:product});

    }
    catch(error){
        response.send({message:'something went wrong'});
    }

});
app.get("/shop/:id_no",async (request,response)=>{
    try{
        const product=await Shop.findOne({id_no:request.params.id_no})
        if(product==null){
            response.status(404)
            response.send({message:'product not found'});
        }
        else{
        response.send({shop:product});
        }

    }
    catch(error){
        response.status(500)
        response.send({message:'something went wrong'});
    }

});

app.delete("/shop/:id_no",async(request,response)=>{
    try{
        await Shop.deleteOne({id_no:request.params.id_no})
            response.send({message:'product removed'});
    }
    catch(error){
        response.status(500)
        response.send({message:'something went wrong'});
    }

})

app.put("/shop/:id_no",async(request,response)=>{
    try{
        await Shop.updateOne({id_no:request.params.id_no},request.body);
       
            response.send({message:'product updated'});  
        

    }
    catch(error){
        response.status(500)
        response.send({message:'something went wrong'});
    }

})


app.listen(4900,()=>{
    console.log("Server has started on 4900");
    connectDb();
    
});