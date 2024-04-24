import React from 'react'
import { Link } from 'react-router-dom'
import './Buttons.css'

const Buttons = () => {
  return (
    <div className='button'>
      <div className='button-item'>
        <Link to="/build-your-house">Build Your House</Link>
      </div>
      <div className='button-item'>
        <Link to="/vendor-register">Vendor Registration</Link>
      </div>
    </div>
  )
}

export default Buttons
