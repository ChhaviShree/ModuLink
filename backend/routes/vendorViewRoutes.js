const express = require('express');
const { addVendorDetails, getAllVendorDetails } = require('../controllers/vendorViewController');

const router = express.Router();


router.post('/add-vendor-details', addVendorDetails);
router.get('/all-vendor-details',getAllVendorDetails);

module.exports = router;
