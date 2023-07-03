const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userSchema = new Schema({
	username: String,
	password: String,
	email: String,
})


const User = model('User', userSchema, 'users')
module.exports = User;
