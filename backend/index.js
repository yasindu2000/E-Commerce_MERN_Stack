import express from "express";

let app = express();

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