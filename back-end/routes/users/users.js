var express = require('express');
var router = express.Router();
var Controllers = require('../../controllers/controllers')
var Middleware = require('../../middleware/middleware')


/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

//add the middleware function 
router.post('/register', Controllers.register)
router.post('/login', Controllers.login)


module.exports = router;
