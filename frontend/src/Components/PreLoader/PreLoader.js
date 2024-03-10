import React from 'react'
import './PreLoader.css'
import videoSrc from "../Assets/MODULINK.mp4";

const PreLoader = () => {
  return (
    <div className='preloader'>
      <video autoPlay loop muted>
        <source src={videoSrc} type='video/mp4'/>
        Your Browser does not support the video tag.
      </video>
    </div>
  )
}

export default PreLoader
