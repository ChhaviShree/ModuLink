const bcrypt = require('bcrypt');
const Customer = require('../models/CustomerModel');
const jwt = require('jsonwebtoken');

const customerRegister = async (req, res) => {
  const { email, password, phoneNumber, address, pincode } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({ email, password: hashedPassword, phoneNumber, address, pincode }); // Updated model name
    await newCustomer.save();
    res.status(201).json({ message: 'Customer registered successfully' }); // Updated message
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const customerLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ email }); // Updated model name
    if (!customer) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, customer.password); // Updated variable name
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ customerId: customer._id }, process.env.JWT_SECRET, { expiresIn: '4h' }); // Updated variable name
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { customerRegister, customerLogin };
