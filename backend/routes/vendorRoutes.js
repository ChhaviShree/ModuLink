const express = require('express');
const router = express.Router();
const {addVendorRegistration,login} = require('../controllers/vendorController');


router.post('/vendor-register',addVendorRegistration);
router.post('/vendor-login',login);

module.exports = router;
