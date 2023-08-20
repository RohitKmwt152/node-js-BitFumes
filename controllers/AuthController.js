const User = require("../models/User");
const bcrypt = require("bcrypt");
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
    // if
    res.json({user});
}