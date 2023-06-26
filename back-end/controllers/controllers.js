async function register(req, res) {
	const {username, email, password, repassword} = req.body;
	try {
		const verificationcode = math.floor(100000 + math.random() * 900000);
		//req.session.username = username;
		//req.session.vericode = verificationcode;
		//req.session.email = email;
		//find user
		const existeduser = await user.findone({username, email});
		if (existeduser) {
			// if user exists, .....
			return res.json("the account have already existed ! ");
		}
		//sending the opt code to users' emails
		await usermiddleware.optcodesending(verificationcode, email);
		const temporaryuser = new user({
			isverified: false,
			email: email,
			username: username,
			password: password,
		});
		await temporaryuser.save();
		res.status(200).send("successfully registered");
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
	register
}

