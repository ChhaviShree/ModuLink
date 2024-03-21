const VendorRegistration = require('../models/vendorModel');

const addVendorRegistration = async (req,res)=>{
  try {
    const newVendorRegistration = new VendorRegistration(req.body);
    await newVendorRegistration.save();
    res.status(201).json({ message: 'Vendor registration information added successfully' });
  } catch (error) {
    console.error('Error adding vendor registration:',error);
    res.status(500).json({ error: 'Failed to add vendor registration information' });
  }
};

module.exports = { addVendorRegistration };
