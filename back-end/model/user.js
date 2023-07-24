const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const userSchema = new Schema({
	username: String,
	password: String,
	email: String,
	isverified: Boolean,

})


const User = model('User', userSchema, 'users')
module.exports = User;
