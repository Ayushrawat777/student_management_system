//install npm i express
//install npm i mongoose
//install npm i body-parser
/* const express = require('express');
const app =express();
const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mynewdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('database is connected');
}).catch((err)=>{
   console.log(err);
}) */

//second method

/* mongoose.connect("mongodb://localhost:27017/mynewdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err)
    {
        console.log("connected to db")
    }else{
        console.log("error")
    }
}) */

//schema for mongodb
/*  const sch={
    name:String,
    email:String,
    id:Number
 }

const monmodel=mongoose.model("NEWCOL",sch); */

//post
/* app.post("/post",async(req,res)=>{
    console.log("inside post function");
    const data =new monmodel({
        name:req.body.name,
        email:req.body.email,
        id:req.body.id
    });
    const val =await data.save();
    res.send("posted");
})

app.listen(4000,()=>{
    console.log("on port 4000")
}) */