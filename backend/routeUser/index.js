const { Router }= require('express');
const verifyToken= require('../middleware/verifyToken');
const errorCatcher = require('../utils/errorCatcher');
const signup= require('./signup');
const login= require('./login');
const email_verification= require('./email_verification');
const password_reset= require('./password_reset');

const router = new Router();

router.post('/signup', errorCatcher(signup));
router.post('/login', errorCatcher(login));
router.get('/email_verification', errorCatcher(verifyToken), errorCatcher(email_verification));
router.post('/password_reset', errorCatcher(password_reset));

module.exports =  router;
