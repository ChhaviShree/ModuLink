import React, { useState } from "react";
import "./CustomerLogin.css";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { Button } from "@chakra-ui/react";

const CustomerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleSignUpClick = () => {
    console.log("SignUp clicked");
  };

  const handleCustomerLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://modu-link.vercel.app/customers/customer-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      if (!response.ok) {
        setLoading(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("type", "User");
      setLoading(false);
      window.location.href = "/user/blog";
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="clogin-parent">
      <Navbar menu={"blogs"} />
      <div className="ring">
        <i style={{ "--clr": "#00ff0a" }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>
        <div className="customer-login">
          <h2>Customer Login</h2>
          <div>
            <div className="inputBx">
              <input
                type="text"
                placeholder="Email"
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
            <div className="custlogin">
              <Button
                bgGradient="linear(to-r, #9a0234, #fff172)"
                _hover={{ bgGradient: "linear(to-r, #9a0234, #fff172)" }}
                color="white"
                width="60vh"
                height="48px"
                style={{
                  borderRadius: "20px",
                }}
                onClick={handleCustomerLogin}
                isLoading={loading}
              >
                Login
              </Button>
            </div>
            <div className="links-signup">
              {/* <a href="/">Forget Password</a> */}
              <Link to="/signup" onClick={handleSignUpClick}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default CustomerLogin;
