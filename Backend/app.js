const express=require('express');
const userRouter=require('./Router/userRouter');
const cookieParser = require('cookie-parser');

const app=express();
app.listen(3000);

app.use(express.json());
app.use(cookieParser());

// EndPoint for all the user functions
app.use('/user',userRouter);