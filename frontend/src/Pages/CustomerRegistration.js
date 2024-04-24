import React, { useState } from 'react';
import './CustomerRegistration.css';
import Navbar from "../Components/Navbar/Navbar";
import { Button } from "@chakra-ui/react";

const CustomerRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(' "https://modular-house.vercel.app/customers/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          phoneNumber: phoneNumber,
          address: address,
          pincode: pincode,
        }),
      });

      if (!response.ok) {
        setLoading(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Registration Successful:', data);
      setLoading(false);
    } catch (error) {
      console.error('Error:', error.message);
      setLoading(false);
    }
  };

  return (
    <div className='signup-parent'>
      <Navbar menu={"blogs"} />
      <div className="ring">
        <i style={{'--clr': '#00ff0a'}}></i>
        <i style={{'--clr': '#ff0057'}}></i>
        <i style={{'--clr': '#fffd44'}}></i>
        <div className="signup">
          <h2>Customer Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="inputBx">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="inputBx">
              <input
                type="password"
                placeholder="Password (minimum 6 characters, one special character, one number, and one alphabet)"
                value={password}
                onChange={handlePasswordChange}
                pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
                title="Password must contain minimum 6 characters, at least one special character, one number, and one alphabet"
                required
              />
            </div>
            <div className="inputBx">
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
              />
            </div>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={handleAddressChange}
                required
              />
            </div>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Pincode"
                value={pincode}
                onChange={handlePincodeChange}
                required
              />
            </div>
            <div className="custregister">
              <Button
                bgGradient="linear(to-r, #9a0234, #fff172)"
                _hover={{ bgGradient: "linear(to-r, #9a0234, #fff172)" }}
                color="white"
                width="60vh"
                height="48px"
                style={{ borderRadius: "20px" }}
                type="submit"
                isLoading={loading}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;
