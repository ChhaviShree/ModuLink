import React from 'react'
import './Models.css'
import basicdesign1 from '../Assets/basicdesign1.jpg'
import basicdesign2 from '../Assets/basicdesign2.jpg'
import basicdesign3 from '../Assets/basicdesign3.jpg'
import basicdesign4 from '../Assets/basicdesign4.jpg'
import basicdesign8 from '../Assets/basicdesign8.jpg'
import basicdesign6 from '../Assets/basicdesign6.jpg'


const Models = () => {
  return (
    <div className='container-box'>
      <div className='description'>
        <p>Hey, did you know you can make your dream home with
           modular housing? It's the coolest, most sustainable way to make your dream home a reality!</p>
      </div>
      <div className='cube-container'>
      <div className='models'>
        <div className='container'>
          <div className='image-cube'>
            <div className='front'>
              <img src={basicdesign1} alt='1'/>
            </div>
            <div className='right'>
              <img src={basicdesign2} alt='2'/>
            </div>
            <div className='back'>
              <img src={basicdesign3} alt='3'/>
            </div>
            <div className='left'>
              <img src={basicdesign4} alt='4'/>
            </div>
            <div className='top'>
              <img src={basicdesign8} alt='8'/>
            </div>
            <div className='bottom' >
              <img src={basicdesign6} alt='6'/>
            </div>
          </div>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Models
