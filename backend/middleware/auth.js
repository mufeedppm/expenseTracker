const jwt = require('jsonwebtoken')

const User = require('../models/userModel')

exports.authenticate = async (req,res,next) => {
    try{
        const token =req.header('Authorization');
        const decryptToken =  jwt.verify(token, process.env.SECRET_TOKEN);
        const user= await User.findByPk(decryptToken.userId)
        req.user = user;
        next();

    }catch(err){
        console.log(err)
        return res.status(401).json({success:false,message:'user not found'})
    }
    
}