const express=require('express');
const userRouter=require('./Router/userRouter');
const productRouter=require('./Router/productRouter');
const cookieParser = require('cookie-parser');
const itemModel = require('./Model/allProducts');
var cors = require('cors')

const app=express();
app.listen(8000);
app.use(cors());

app.use(express.json());
app.use(cookieParser());

// EndPoint for all the user functions
app.use('/user',userRouter);
app.use('/product',productRouter);

// Endpoint to get all the products in Database
app.get('/getAllItems',async (req,res)=>{
    let items = await itemModel.find();
    return res.json({
        "Message" : "All Items",
        Items: items
    });
})