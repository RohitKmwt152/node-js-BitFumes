const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltAround = 10;

exports.singup = async (req, res) => {
    const password = await bcrypt.hash(req.body.password,saltAround);
    const data = {... req.body,password};
    const user = await User.create(data);
    res.json({user});
}


exports.login = async (req, res) => {
    // const password = await bcrypt.hash(req.body.password,saltAround);
    // const data = {... req.body,password};
    const user = await User.findOne({email:req.body.email});
    if(!user){
        res.status(404).json({error:'User not found!!'})
        return;
    }
    if(!(await bcrypt.compare(req.body.password,user.password))){
        res.status(404).json({error:'User not found!!'})
        return;
    }

    const token = await jwt.sign({user},'fake-jwt-secret');
    res.json({user, access_token:token});
}