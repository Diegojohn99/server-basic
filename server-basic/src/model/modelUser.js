const mongoose = require('mongoose');

const User = mongoose.model('User', { 
    name: String,
    email: String,
    age: Number,
 });
 
 module.exports = User