const User = require("../model/modelUser");

async function getUser(req, res){
    const user = await User.find()
    res.json(user)
}

async function createUser (req, res){
    const user = req.body 
    const temp = await User.create(user);
    res.json(temp)
}

module.exports = {
    getUser,
    createUser,
}