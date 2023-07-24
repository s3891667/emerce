const session = require("express-session")
const nodemailer = require('nodemailer');
require('dotenv').config();

async function verify(req, res) {
	const {vericode} = req.body;
	const email = req.session.email;
	const verificationcode = req.session.verificationcode;
	if (vericode === req.session.email) {
		res.send('Please check for code !');

	}
	else {
		res.send('Successfully registered !');
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

	const send = await transporter.sendMail({
		from: hostEmail,
		to: email,
		subject: "Emerce verification code", // Subject line
		text: code,
		html: `<b>Hi ${un} this is Emerce verification system </b>`, // html body
	});
	console.log(req.session.email);
	res.send(json('The code has been sent to your email !'));
}

module.exports = {
	verify,
	opt
}

