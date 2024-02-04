import React from 'react'
import Hero from '../Components/Hero/Hero'
import Models from '../Components/Models/Models'
import Buttons from '../Components/Buttons/Buttons'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import FeedBack from '../Components/FeedBack/FeedBack'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Buttons/>
      <Models/>
      <FeedBack/>
      <NewsLetter/>
    </div>
  )
}

export default Home
