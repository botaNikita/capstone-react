// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './GiveReviews.css'
import { Rating } from  '@mui/material';

// Function component for giving reviews
function GiveReviews({ doctor, index }) {

  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();    
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
        setSubmittedMessage(formData);
        setFormData({
        name: '',
        review: '',
        rating: 0
        });
        setShowWarning(false);
        setShowForm(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <tr key={index}>
        <td>{index + 1}</td>
        <td>{doctor.name}</td>
        <td>{doctor.speciality}</td>
        <td>
            {!showForm ? (
                // Display button to open the form
                <button onClick={handleButtonClick} disabled={!!submittedMessage.name}>Click here</button>
            ) : (
                // Display form for giving feedback
                <form onSubmit={handleSubmit}>
                    <h3>Give Your Feedback</h3>
                    {showWarning && <p className="warning">Please fill out all fields.</p>}
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="review">Review:</label>
                        <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="rating">Rating:</label>
                        <Rating id="rating" name="rating" value={formData.rating} onChange={handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}            
        </td>
        <td>
            {!!submittedMessage && (
                <div>
                <h3>Submitted Message:</h3>
                <p>{submittedMessage.review}</p>
                </div>
            )}
        </td>
    </tr>
  );
}

export default GiveReviews;
