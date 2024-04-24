const express = require('express');
const router = express.Router();
const {customerRegister,customerLogin}=require('../controllers/CustomerController');

router.post('/signup', customerRegister);
router.post('/customer-login',customerLogin);


module.exports = router;
