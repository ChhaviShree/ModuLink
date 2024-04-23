import React, { useState } from 'react'
import './FeedBack.css'

const FeedBack = () => {

  const intialfeedback=[
    {id:1,text:"Great Experience with the website, Contacting to vendors was very easy",author:'Sanket dash'},
    {id:2,text:"Design of the website is very friendly",author:"Manas Ranjan"},
    {id:3,text:"Very Uselful, Thank You ModuLink for my dreamHome",author:"Chhavi Shree"}
  ];

  const [feedbackList,setFeedbackList]=useState(intialfeedback);
  const [newFeedback,setnewFeedback]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(newFeedback.trim()!==''){
      const newId=feedbackList.length+1;
      const newFeedbackObj={id:newId,text:newFeedback,author:'Anonymous'}
      setFeedbackList([...feedbackList,newFeedbackObj])
      setnewFeedback('');

    }
  };
  const handleDelete=(id)=>{
    const updatedFeedbackList=feedbackList.filter(feedback=>feedback.id!==id);
    setFeedbackList(updatedFeedbackList);
  };
  
  return (
    <div className='feedback'>
      <div className='feedback-list'>
        {feedbackList.map(Feedback=>(
          <div key={Feedback.id} className='feedback-box'>
            <p className='feedback-text'>{Feedback.text}</p>
            <p className='feedback-author'>{Feedback.author}</p>
            <button onClick={()=> handleDelete(Feedback.id)} className='delete-button'>Delete</button>
          </div>
        ))}
    </div>
    <form onSubmit={handleSubmit} className='feedback-form'>
      <textarea value={newFeedback} onChange={(e)=> setnewFeedback(e.target.value)}
      placeholder='Share Your FeedBack!'></textarea>
      <button type='submit' className='submit-button'>Submit</button>
    </form>
    </div>
  )
}

export default FeedBack
