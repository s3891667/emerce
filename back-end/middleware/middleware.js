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
async function opt(req, res, code, email) {
	const hostEmail = process.env.HOST_EMAIL;
	const hostPass = process.env.host_pass;
	const transporter = nodemailer.createTransport({
		host: "smtp.forwardemail.net",
		port: 465,
		secure: true,
		auth: {
			user: email,
			pass: pass,
		}
	});

	const send = await transporter.sendMail({
		from: hostEmail,
		to: email,
		subject: "Emerce verification code", // Subject line
		text: code,
		html: "<b>Hello world?</b>", // html body
	});
	console.log(req.session.email);
	res.send(json('The code has been sent to your email !'));
}

module.exports = {
	verify,
	opt
}

