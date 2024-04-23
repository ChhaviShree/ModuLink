import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/finallogo.png";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
} from "@chakra-ui/react";

const Navbar = ({ menu }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleLoginClick = () => {
    setShowDropdown(!showDropdown);
  };
  const handleLoginOptionClick = (option) => {
    setShowDropdown(false);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>MODULINK</p>
      </div>
      <ul className={`nav-menu`}>
        <li>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "white" }} to="/About">
            About
          </Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "white" }} to="/Blogs">
            Blogs
          </Link>
          {menu === "blogs" ? <hr /> : <></>}
        </li>
        <li>
          <Menu>
            <MenuButton as={Button}>Login</MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => (window.location.href = "/customer-login")}
              >
                
                <Box color="black">Customer Login</Box>
              </MenuItem>
              <MenuItem
                onClick={() => (window.location.href = "/vendor-login")}
              >
                <Box color="black">Vendor Login</Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
