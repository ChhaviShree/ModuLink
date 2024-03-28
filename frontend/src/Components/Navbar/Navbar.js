import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/finallogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLoginClick = () => {
    setShowDropdown(!showDropdown);
  }

  const handleLoginOptionClick = (option) => {
    setMenu(option);
    setShowDropdown(false);
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>MODULINK</p>
      </div>
      <ul className={`nav-menu`}>
        <li onClick={() => { setMenu("home") }}>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("about") }}>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/About'>About</Link>
          {menu === "about" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("blogs") }}>
          <Link style={{ textDecoration: 'none', color: 'white' }} to='/Blogs'>Blogs</Link>
          {menu === "blogs" ? <hr /> : <></>}
        </li>
        <li>
          <span className="login-option" onClick={handleLoginClick}>Login</span>
          {showDropdown && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={() => handleLoginOptionClick("CustomerLogin")}>Customer Login</button>
              <button className="dropdown-item" onClick={() => handleLoginOptionClick("VendorLogin")}>Vendor Login</button>
            </div>
          )}
          {(menu === "CustomerLogin" || menu === "VendorLogin") && <hr />}
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
