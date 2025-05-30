import express from "express";
import mongoose from "mongoose";

let app = express();
let ConnectionString = "mongodb+srv://admin:admin123@cluster0.lmgpokd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(ConnectionString).then(
    ()=>{
        console.log("database connected");
    }
).catch(()=>{
    console.log("failed connect to DB");
})

app.get("/", (req,res)=>{
    
    res.json({
        message : "this is a get request",
    })
})

app.post("/", (req,res)=>{

     res.json({
        message : "this is a post request",
    })
})

app.delete("/", (req,res)=>{
     res.json({
        message : "this is a delete request",
    })
})


app.listen(5000, ()=>{
    console.log("Server Is Running");
})