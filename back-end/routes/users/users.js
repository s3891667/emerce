var express = require('express');
var router = express.Router();
var controllers = require('../../controllers')
var middleware = requre('../../middleware')

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

//add the middleware function 
//router.post('/register', function(req,res,next){

//})

module.exports = router;
