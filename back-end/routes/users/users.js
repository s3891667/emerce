var express = require('express');
var router = express.Router();
var Controllers = require('../../controllers/controllers.js')
var Middleware = require('../../middleware/middleware.js')



/* GET users listing. */
//router.get('/', function (req, res, next) {
//res.send('respond with a resource');
//});

//add the middleware function 
router.post('/register', Controllers.register);
router.post('/login', Controllers.login);
router.post('/resend', Controllers.resend);
router.post('/verify', Middleware.verify);
router.get('/logout', Controllers.logout);
router.get('/session', Middleware.session_get);



module.exports = router;
