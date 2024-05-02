import React, { useState } from 'react';
import './FeedBack.css'; // Import your CSS file

const FeedBack = () => {
  const initialFeedback = [
    { id: 1, text: "Great Experience with the website, Contacting to vendors was very easy", author: 'Sanket dash' },
    { id: 2, text: "Design of the website is very friendly", author: "Manas Ranjan" },
    { id: 3, text: "Very Useful, Thank You ModuLink for my dreamHome", author: "Chhavi Shree" }
  ];

  const [feedbackList, setFeedbackList] = useState(initialFeedback);
  const [newFeedback, setNewFeedback] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFeedback.trim() !== '' && authorName.trim() !== '') {
      const newId = feedbackList.length + 1;
      const newFeedbackObj = { id: newId, text: newFeedback, author: authorName };
      setFeedbackList([...feedbackList, newFeedbackObj]);
      setNewFeedback('');
      setAuthorName('');
    }
  };

  const handleDelete = (id) => {
    const updatedFeedbackList = feedbackList.filter(feedback => feedback.id !== id);
    setFeedbackList(updatedFeedbackList);
  };

  return (
    <div className='feedback'>
      <div className='arrow-icon'>&#x22;</div> {/* Arrow Icon */}
      <form onSubmit={handleSubmit} className='feedback-form'>
        <textarea
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)}
          placeholder='Share Your Feedback!'
          className="feedback-input"
        />
        <input
          type='text'
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder='Your Name'
          className="feedback-input"
        />
        <button type='submit' className="submit-button">Submit</button>
      </form>
      <div className='feedback-list'>
        {feedbackList.map(feedback => (
          <div key={feedback.id} className='feedback-card'>
            <textarea
              value={feedback.text}
              readOnly
              className="feedback-textarea"
            />
            <p className='author'>- {feedback.author}</p>
            <button onClick={() => handleDelete(feedback.id)} className='delete-button'>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeedBack;
