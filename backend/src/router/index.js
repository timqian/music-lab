const { Router }= require('express');
const signup= require('./signup');
const login= require('./login');
const email_verification= require('./email_verification');
const password_reset= require('./password_reset');
const verifyToken= require('../utils/verifyToken');

const router = new Router();

router.post('/signup', signup);
router.get('/email_verification', verifyToken, email_verification);
router.post('/login', login);
router.post('/password_reset', password_reset);

module.exports =  router;
