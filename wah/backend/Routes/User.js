const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
const {body, validationResult} = require('express-validator')

router.post('/CreateUser', 
[body('name').isLength({min:6}), 
body('email', 'Invalid Email ID').isEmail(), 
body('password', 'Password length must be atleast 7 characters').isLength({min:7})],
async(req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    try{
        await User.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: req.body.password
        });
        res.json({success:true})
    }catch(error){
        console.log(error);
        res.json({success:false});
    }
})

router.post('/LoginUser', 
[body('email', 'Invalid Email ID').isEmail(), 
body('password', 'Password length must be atleast 7 characters').isLength({min:7})],
async(req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    var email = req.body.email;

    try{
        var useremail = await User.findOne({email})
        if(!useremail){
            return res.status(400).json({errors: "Email ID not signed up"});
        }
        if(req.body.password !== useremail.password){
            return res.status(400).json({errors: "Incorrect Password"});
        }
        return res.json({success:true});
    }catch(error){
        console.log(error);
        res.json({success:false});
    }
})

module.exports = router