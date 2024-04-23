import React,{useState} from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  const [email,setEmail]=useState('');

  const handleSubscribe=()=>{
    console.log('Subscribed with email: ',email);
    setEmail('');
  };

  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>Subscribe to our NewsLetter and stay updated</p>
    <div>
      <input type='email' placeholder='Your Email Id' 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
    <button onClick={handleSubscribe}>Subscribe</button>
    </div>
    </div>
  )
}

export default NewsLetter
