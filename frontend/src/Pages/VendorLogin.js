import React, { useState } from "react";
import "./VendorLogin.css";
import Navbar from "../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
} from "@chakra-ui/react";

const VendorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleVendorLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://modu-link.vercel.app/vendors/vendor-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress: email,
          password: password,
        }),
      });
      if (!response.ok) {
        setLoading(false);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("type", "Vendor");
      setLoading(false);
      setLoginSuccess(true);
      setTimeout(() => {
        setLoginSuccess(false);
        window.location.href = "/vendor-view";
      }, 4000);
    } catch (error) {
      setLoginError("Invalid email or password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="vlogin-parent">
      <Navbar menu={"blogs"} />
      <div className="ring">
        <i style={{ "--clr": "#00ff0a" }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>
        <div className="vendor-login">
          <h2>Vendor Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleVendorLogin();
            }}
          >
            <div className="inputBx">
              <input
                type="text"
                placeholder="Enter your email"
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
            <div className="error-message">
              {loginError && <p>{loginError}</p>}
            </div>
            <div className="links-vendor-signup">
              <Link to="/vendor-register">Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
      <AlertDialog
        isOpen={loginSuccess}
        leastDestructiveRef={null}
        onClose={() => setLoginSuccess(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Login Successful
            </AlertDialogHeader>
            <AlertDialogBody>
              You have been successfully logged in. Redirecting to VendorView...
            </AlertDialogBody>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
};

export default VendorLogin;
