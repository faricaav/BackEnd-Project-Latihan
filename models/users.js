const mongoose = require('mongoose')
 
const User = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
});
 
const Users = mongoose.model('user', User);
module.exports = Users; 