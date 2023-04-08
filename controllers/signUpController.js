const User = require('../models/userModel')

const bcrypt = require('bcryptjs')

exports.postAddUser =async (req,res) => {
    try{
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({where:{email:email}})
        console.log(user)
        if(!user){
            bcrypt.hash(password, 10, async(err,hash) =>{
                const data = await User.create({
                    name : name,
                    email: email,
                    password: hash
                })
                res.status(203).json({userData: data});
                console.log(err)
            })
        }
        else{
            res.json({message:"User Already Exists"})
        }
        
        }catch(err){
        res.status(500).json({error:err})
        console.log(err)
    }
    
}