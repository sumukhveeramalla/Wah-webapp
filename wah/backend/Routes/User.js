const express = require('express')
const router = express.Router()
const User = require('../models/UserSchema')
const {body, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const jwtSecret = "ForSakeOfSecurity$#"

router.post('/CreateUser', 
[body('name').isLength({min:6}), 
body('email', 'Invalid Email ID').isEmail(), 
body('password', 'Password length must be atleast 7 characters').isLength({min:7})],
async(req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    var salt = await bcrypt.genSalt();
    var secPswd = await bcrypt.hash(req.body.password, salt);

    try{
        await User.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: secPswd
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
        var userData = await User.findOne({email})
        if(!userData){
            return res.status(400).json({errors: "Email ID not signed up"});
        }

        const pwdCompare = await bcrypt.compare(req.body.password, userData.password)
        if(!pwdCompare){
            return res.status(400).json({errors: "Incorrect Password"});
        }

        const data = {
            user:{
                id:userData.id
            }
        }

        const authToken = jwt.sign(data, jwtSecret)
        return res.json({success:true, authToken:authToken});
    }catch(error){
        console.log(error);
        res.json({success:false});
    }
})

module.exports = router