const session = require("express-session")
const nodemailer = require('nodemailer');
require('dotenv').config();


async function session_get(req, res) {
	if (req.session) {
		res.send(json(req.session));
	}
	else {
		res.status(404).json('Not session found');
	}
}

async function verify(req, res) {
	const {vericode} = req.body;
	const email = req.session.email;
	const verificationcode = req.session.verificationcode;
	if (vericode === req.session.email) {
		return res.status(500).json('Please check for code !');

	}
	else {
		return res.status(200).json('Successfully registered !');
	}
}

async function opt(req, res, code, email, un) {
	const hostEmail = process.env.HOST_EMAIL;
	const hostPass = process.env.HOST_PASS;
	console.log(req.session.verificationcode);

	const transporter = nodemailer.createTransport({
		service: "gmail",
		secure: true,
		auth: {
			user: hostEmail,
			pass: hostPass,
		}
	});
	try {
		const send = await transporter.sendMail({
			from: hostEmail,
			to: email,
			subject: "Emerce verification code", // Subject line
			text: code,
			html: `<b>Hi ${un} this is Emerce verification system </b>`, // html body
		});
		console.log(req.session.email);
		return res.status(200).json('The code has been sent to your email !');
	}
	catch (err) {
		console.log(err);
		return res.status(404).json('email not found !')
	}
}

module.exports = {
	verify,
	opt,
	session_get,
}

