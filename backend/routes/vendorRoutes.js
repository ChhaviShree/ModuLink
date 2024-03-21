const express = require('express');
const router = express.Router();
const {addVendorRegistration} = require('../controllers/vendorController');

router.post('/vendor-registration',addVendorRegistration);

module.exports = router;
