const express = require('express');
const {signup,login,logout} = require('../Controller/authController');


const userRouter=express.Router();


userRouter.route('/')
.get((req,res)=>{
    res.send("Done")
});


// User SignUp
userRouter.route('/signup')
.post(signup);

// User Login
userRouter.route('/login')
.post(login);

// Logout User
userRouter.route('/logout')
.get(logout);




module.exports = userRouter;