async function register(req, res) {
	const {email, username, password} = req.body;
	try {
		const verificationCode = Math.floor(100000 + Math.random() * 900000);
		req.session.userName = username;
		req.session.vericode = verificationCode;
		req.session.email = email;
		//Find user
		const existedUser = await User.findOne({username, email});
		if (existedUser) {
			// If user exists, .....
			return res.json("the account have already existed ! ");
		}
		//sending the opt code to users' emails
		await userMiddleWare.optCodesending(verificationCode, email);
		const temporaryUser = new User({
			isVerified: false,
			email: email,
			username: username,
			password: password,
		});
		await temporaryUser.save();
		res.status(200).send("Successfully registered");
	} catch (error) {
		console.log(error);
	}
}

async function login() {
	try {

	} catch (error) {
		console.log(error);

	}
}

async function logout() {

}

async function order() {

}

module.export = {
	login,
	logout,
	order,
	register
}

