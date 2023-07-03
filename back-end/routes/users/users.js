var express = require('express');
var router = express.Router();
var Controllers = require('../../controllers/controllers')
var middleware = require('../../middleware/middleware')


/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

//add the middleware function 
router.post('/register', Controllers.register)

module.exports = router;
//var express = require("express");
//var router = express.Router();
//var axios = require("axios");

//router.post("/signUp/", userControl.register);
//router.post("/signUp/Email/", userMiddleWare.validateRegistration);
//router.post("/signUp/resend/", userControl.resend);
//router.post("/login/", userControl.login);

//module.exports = router;

