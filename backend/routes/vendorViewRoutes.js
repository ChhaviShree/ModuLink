const express = require("express");
const {
  addVendorDetails,
  getAllVendorDetails,
} = require("../controllers/vendorViewController");
const router = express.Router();
const auth = require("../auth/auth");

router.post("/add-vendor-details", auth, addVendorDetails);
router.get("/all-vendor-details", auth, getAllVendorDetails);

module.exports = router;
