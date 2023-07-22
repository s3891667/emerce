const bcrypt = require('bcrypt');
const session = require('express-session');
const User = require('../model/user');
const Middleware = require('../middleware/middleware');

async function register(req, res) {
	const {un, email, pw, rpw} = req.body;
	console.log(un)
	try {
		const codeGen = Math.floor(Math.random() * 10000);
		const verificationcode = codeGen.toString().padStart(4, '0');
		//find user
		const existeduser = await User.findOne({username: email});
		if (existeduser) {
			// if user exists, .....
			return res.json("the account have already existed ! ");
		}
		req.session.verificationcode = verificationcode;
		req.session.email = email;

		//sending the opt code to users' emails
		await Middleware.opt(req, res, verificationcode, email);

		bcrypt.hash(pw, 10, function (err, hash) {
			if (err) {
				// Handle error
			} else {
				// Store the hash in your database or use it as needed
				console.log('Hashed pw:', hash);
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
		res.status(200).send("successfully registered");
		//res.send('session sent!')

	} catch (error) {
		console.log(error);
	}
}

async function order() {

}


async function login(req, res) {
	try {
		const {email, password} = req.body;
		console.log(email);


	} catch (error) {
		console.log(error);

	}
}

async function logout() {

}

module.exports = {
	register,
	login,
}

