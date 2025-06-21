import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import studentRouter from "./routers/studentRouter.js";
import userRouter from "./routers/userRouter.js";
import jwt from "jsonwebtoken"


const app = express();

app.use(bodyParser.json());
app.use(
    (req, res, next)=>{

        const value = req.header("Authorization")

        if(value != null){
            const token = value.replace("Bearer ","")
            jwt.verify(token,"ywd-2005",(err,decoded)=>{ 
                if(decoded == null){
                    res.status(403).json(
                        {
                            message : "Unauthorized"
                        }
                    )
                }else{
                    req.user = decoded
                    
                    next()
                    
                }
                
            })
        }else{
                next()
        }
        
       

    }
)


const ConnectionString = "mongodb+srv://admin:admin123@cluster0.lmgpokd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(ConnectionString).then(
    ()=>{
        console.log("database connected");
    }
).catch(()=>{
    console.log("failed connect to DB");
})



app.use("/students", studentRouter)
app.use("/users", userRouter)



app.listen(5000, ()=>{
    console.log("Server Is Running");
})