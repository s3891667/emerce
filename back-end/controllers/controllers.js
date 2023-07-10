
const bcrypt = require('bcrypt');
const user = require('../model/user')

async function register(req, res) {
	const {un, email, pw, rpw} = req.body;
	console.log(un)
	try {
		const verificationcode = math.floor(100000 + math.random() * 900000);
		//req.session.un = username;
		//req.session.vericode = verificationcode;
		//req.session.email = email;
		//find user
		const existeduser = await user.findOne({username: un});
		if (existeduser) {
			// if user exists, .....
			return res.json("the account have already existed ! ");
		}
		//sending the opt code to users' emails
		//await usermiddleware.optcodesending(verificationcode, email);
		bcrypt.hash(pw, 10, function (err, hash) {
			if (err) {
				// Handle error
			} else {
				// Store the hash in your database or use it as needed
				console.log('Hashed pw:', hash);
			}
		});
		const temporaryuser = new user({
			//isverified: false,
			username: un,
			password: pw,
			email: email,
		});
		await temporaryuser.save();
		res.status(200).send("successfully registered");

	} catch (error) {
		console.log(error);
	}
}

async function login(req, res) {
	try {
		const {username, password} = req.body;
	} catch (error) {
		console.log(error);

	}
}

async function logout() {

}

async function order() {

}

module.exports = {

	register
}

