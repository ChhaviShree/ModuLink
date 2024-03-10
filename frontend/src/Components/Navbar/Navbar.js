import React, { useRef , useState} from 'react'
import './Navbar.css'
import logo from '../Assets/finallogo.png'
import {Link} from 'react-router-dom'
import nav_dropdown from '../Assets/dropdown_icon.png'


const Navbar = () => {
  const [menu,setMenu]=useState("home");
  const menuRef=useRef();
  const dropdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');

  }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>MODULINK</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""/>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none' ,color:'white'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:'none',color:'white'}} to='/About'>About</Link>{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("blogs")}}><Link style={{textDecoration:'none',color:'white'}} to='/Blogs'>Blogs</Link>{menu==="blogs"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("CustomerLogin")}}><Link style={{textDecoration:'none',color:'white'}} to='/CustomerLogin'>CustomerLogin</Link>{menu==="CustomerLogin"?<hr/>:<></>}</li>
      </ul>
    </div>
  )
}

export default Navbar
