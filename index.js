const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const app = express();

mongoose.connect("mongodb://localhost:27017/myDB", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected with mongodb")
}).catch((err) => {
    console.log(err)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())
bodyParser

const productSchema = new mongoose.Schema(
    { 
        Name: String,
        Age: Number,
        Mobile: Number,
        Email: String
    }
)

const Product = new mongoose.model("Information", productSchema)

//read product

app.get("/api/v1/products", async (req, res) => {
    const products = await Product.find(); 
    res.status(200).json({
        success: true,
        products
    })
})


//create product
app.post("/api/v1/product/new", async (req, res) => {
    const product = await Product.create(req.body);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
    }
    res.status(200).json({
        success: true,
        product
    })
})


//update product
app.put("/api/v1/product/:id", async (req, res) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
        runValidators: true
    })
    res.status(200).json({
        success: true,
        product
    })
})

//delete product

app.delete("/api/v1/product/:id", async (req, res) => {
    const product = await product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "product not found"
        })

    }
    await product.remove();
    res.status(200).json({
        success: true,
        message: "the product is deleted successfully"
    })
})

app.listen(4000, () => {
    console.log('server is running http://localhost:4000');
})



