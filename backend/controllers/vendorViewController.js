const VendorView = require('../models/vendorViewModel');


const addVendorDetails = async (req, res) => {
  try {
    const { name,location,specifications,images}=req.body;
    const newVendorView = new VendorView({
      name,
      location,
      specifications,
      images,
    });
    await newVendorView.save();
    res.status(201).json({ message: 'Vendor details added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


const getAllVendorDetails = async(req,res)=>{
  try {
    const vendorDetails = await VendorView.find();
    res.status(200).json(vendorDetails);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { addVendorDetails,getAllVendorDetails };
