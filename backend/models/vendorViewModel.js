const mongoose = require('mongoose');
const Vendor=require('./vendorModel')


const vendorViewSchema = new mongoose.Schema({
  // vendor_id: { type: mongoose.Schema.Types.ObjectId, required: true,ref:'Vendor' },
  name: { type: String, required: true },
  location: { type: String, required: true },
  specifications: { type: String },
  images: [{ type: String }],
});



const VendorView = mongoose.model('VendorView', vendorViewSchema);

module.exports = VendorView;
