import React, { useState } from 'react';
import './VendorLogin.css';
import Navbar from '../Components/Navbar/Navbar';
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

const VendorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading]=useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const handleSignUpClick=()=>{
    console.log("SignUp Clicked");
  }
  const handleVendorLogin=async()=>{
    setLoading(true);
    try{
      const response=await fetch("https://modular-house.vercel.app/vendors/vendor-login",
    {
      method:"POST",
      headers:{
        "Content-Type":"application/json",

      },
      body:JSON.stringify({
        emailAddress:email,
        password:password,
      }),
    });
    if(!response.ok){
      setLoading(false);
      throw new Error(`HTTP error!Status:${response.status}`);
    }
    const data=await response.json();
    console.log("Email:",data.email);
    console.log("Token:",data.token);
    localStorage.setItem("token",data.token);
    setLoading(false);
    window.location.href="/user/dashboard";
    }catch(error){
      console.log("Error:",error.message);
    }
  };

  return (
    <div className='vlogin-parent'>
      <Navbar menu={"blogs"}/>
      <div className="ring">
      <i style={{'--clr': '#00ff0a'}}></i>
      <i style={{'--clr': '#ff0057'}}></i>
      <i style={{'--clr': '#fffd44'}}></i>
      <div className="vendor-login">
        <h2>Vendor Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputBx">
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="vendorlogin">
              <Button
                bgGradient="linear(to-r, #9a0234, #fff172)"
                _hover={{ bgGradient: "linear(to-r, #9a0234, #fff172)" }}
                color="white"
                width="60vh"
                height="48px"
                style={{
                  borderRadius: "20px",
                }}
                onClick={handleVendorLogin}
                isLoading={loading}
              >
                Login
              </Button>
            </div>
            <div className="links-vendor-signup">
              {/* <a href="/">Forget Password</a> */}
              <Link to="/vendor-register" onClick={handleSignUpClick}>
                Sign Up
              </Link>
            </div>
          
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default VendorLogin;
