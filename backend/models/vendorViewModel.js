const mongoose = require('mongoose');

const vendorViewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  specifications: { type: String },
  images: [{ type: String }],
});

const VendorView = mongoose.model('VendorView', vendorViewSchema);

module.exports = VendorView;
