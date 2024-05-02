const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the House schema
const houseSchema = new Schema({
  type: String,
  specs: String,
});

// Define the Location schema
const locationSchema = new Schema({
  name: String,
  description: String,
  houses: [houseSchema],
  images: [String], // Define images as an array of strings
});

// Define the VendorView schema
const vendorViewSchema = new Schema({
  vendorId: { type: Schema.Types.ObjectId, required: true },
  locations: [locationSchema],
});

const VendorView = mongoose.model("VendorView", vendorViewSchema);

module.exports = VendorView;
