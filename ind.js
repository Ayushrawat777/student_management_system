const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))


app.get("/api/v1/products",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":"*"
    })
}).listen(3000); 