const userModel = require('../Model/userModel');
const jwt = require('jsonwebtoken');
const JWT_key = require('../secrets.js');

module.exports.signup = async function signup(req,res){
    try{
        let userData=req.body;
        const createdUser= await userModel.create(userData);

        if(createdUser){
            return res.json({
                Message:"USER SIGNED UP",
                Data:createdUser
            });
        }
        else{
            return res.json({
                Message:"ERROR WHILE SIGNING UP"
            });
        }
    }
    catch(err){
        return res.json({
            "Error": err,
            "Location": "authController"
        });
    }
}

module.exports.login = async function login(req,res){
    try{
        const userData=req.body;
        if(userData.email && userData.password){
            const foundUser = await userModel.findOne({email:userData.email});
        
            if(foundUser){

                if(foundUser.password==userData.password){
                    let uid = foundUser['_id'];      // JWT uid
                    let jwt_token = jwt.sign({payload:uid},JWT_key);
                    res.cookie('login_jwt',jwt_token,{httpOnly:true});
                    
                    return res.json({
                        Message:'User Logged In',
                        UserDetails:userData
                    });
                }
                else{
                    return res.json({
                        Message:"Wrong Password"
                    });
                }

            }
            else{
                return res.json({
                    Message:"User Not Found"
                });
            }
        }
        else{
            return res.json({
                Message:"Empty Fields Found"
            });
        }
    }
    catch(err){
        return res.json({
            "Error": err,
            "Location": "authController"
        });
    }
}

module.exports.logout = function logout(req,res){
    if(req.cookies.login_jwt){
        res.cookie('login_jwt',' ', {maxAge:1});
        return res.json({
            Message:"User Logout Successful"
        });
    }
    else{
        return res.json({
            Message:"Login First to Logout"
        });
    }
}
