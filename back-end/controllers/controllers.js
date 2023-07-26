const bcrypt = require('bcrypt');
const session = require('express-session');
const User = require('../model/user');
const Middleware = require('../middleware/middleware');

async function register(req, res) {
	const {un, email, pw} = req.body;
	try {
		const codeGen = Math.floor(Math.random() * 10000);
		const verificationcode = codeGen.toString().padStart(4, '0');
		//find user
		const existeduser = await User.findOne({username: un});
		if (existeduser) {
			// if user exists, .....
			return res.status(500).json("the account have already existed ! ");
		}
		req.session.verificationcode = verificationcode;
		req.session.username = un;
		req.session.email = email;

		//sending the opt code to users' emails
		await Middleware.opt(req, res, verificationcode, email, un);

		bcrypt.hash(pw, 10);

		const temporaryuser = new User({
			username: un,
			password: pw,
			email: email,
			isverified: false,
		});
		await temporaryuser.save();
		return res.status(200).json("successfully registered");

	} catch (error) {
		console.log(error);
	}
}

async function login(req, res) {
	try {
		const {email, password} = req.body;
		const user = await mongoose.findOne({email: email}).exec();
		if (!user) {
			return res.status(404).json('User not found');
		}
		const user_pass = user.password;
		const result = await bcrypt.compare(password, user_pass);
		if (result == false) {
			return res.status(500).json('Wrong password')
		}
		else {
			req.session.un = email;
			return res.status(200).json('Successfully logged in !');
		}
	} catch (error) {
		console.log(error);

	}
}

async function logout(req, res) {
	req.session.destroy();
	return res.status(200).json('Successfully login')
}

async function resend(req, res) {
	const email = req.session.email;
	const un = req.session.username;
	try {
		await Middleware.opt(req, res, req.session.verificationcode, email, un)
		return res.status(200).json('The code has been resent');
	}
	catch (err) {
		console.log(err)
	}
}

async function order() {

}


module.exports = {
	register,
	login,
	logout,
	resend,

}

