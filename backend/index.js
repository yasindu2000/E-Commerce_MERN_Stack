import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Student from "./model/student.js";

const app = express();

app.use(bodyParser.json());

const ConnectionString = "mongodb+srv://admin:admin123@cluster0.lmgpokd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

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

    const student = new Student({

        name : req.body.name,
        age : req.body.age,
        email : req.body.email
    });

student.save().then(
    ()=>{
        res.json({
            message : "student save successfully"
        })
    }
).catch(
    ()=>{
        res.json({
            message : "failed to save"
        })
    }
)

})





app.delete("/", (req,res)=>{
     res.json({
        message : "this is a delete request",
    })
})


app.listen(5000, ()=>{
    console.log("Server Is Running");
})