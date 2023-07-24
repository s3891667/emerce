const bcrypt = require('bcrypt');
const session = require('express-session');
const User = require('../model/user');
const Middleware = require('../middleware/middleware');

async function register(req, res) {
	const {un, email, pw, rpw} = req.body;
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

		bcrypt.hash(pw, 10, function (err, hash) {
			if (err) {
				// Handle error
				console.log(err)
			}
		});
		const temporaryuser = new User({
			username: un,
			password: pw,
			email: email,
			isverified: false,
		});
		console.log(req.session.email)
		await temporaryuser.save();
		res.status(200).json("successfully registered");
		//res.send('session sent!')

	} catch (error) {
		console.log(error);
	}
}

async function login(req, res) {
	try {
		const {email, password} = req.body;
		const user = mongoose.findOne({email: email});
		const result = await bcrypt.compare(password, user.password);
		if (result == False) {
			res.status(500).json('Wrong password');
		}
		else {
			req.session.un = email;
			res.status(200).json('Successfully logged in !');
		}

		const {email, password} = req.body;
		console.log(email);

	} catch (error) {
		console.log(error);

	}
}

async function logout() {

}

async function resend(req, res) {
	const email = req.session.email;
	const un = req.session.username;
	await Middleware.opt(req, res, code, email, un)
	res.status(200).json('The code has been resent');
}

async function order() {

}


module.exports = {
	register,
	login,
	resend,

}

