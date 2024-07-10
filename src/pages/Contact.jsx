import React, { useState } from "react";
import axios from 'axios';
import { MdMessage } from 'react-icons/md';
import { MdCall } from 'react-icons/md';

import "./Contact.css"
const Contact = () => {
  const [formData, setFormData] = useState({
   name: '',
    email: '',
    topic: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/submit', formData);
      setResponseMessage(response.data);
      setFormData({
        name: '',
        email: '',
        topic: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
        setResponseMessage(`Error: ${error.response.data}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        setResponseMessage('Error submitting contact form: No response from server');
      } else {
        console.error('Error setting up request:', error.message);
        setResponseMessage('Error submitting contact form');
      }
    }
  };

  return (
    <div className="container">
      <div className="content">
        <h1>Contact Us, We're Ready to Help!</h1>
        <p>
          We strive to provide you with the best experience and the best platform
          to find your choice. Post us any queries and we'll get back to you.
        </p>
        <p>Post us any queries and we'll get back to you.</p>

        <div className="contact-options">
          <div className="chat">
            <i className="fas fa-comment-dots"></i>
            <div class="icon"><MdMessage style={{ color: 'white', fontSize: '40px' }} /></div>

            <div id="cu">
            <h3 > Chat with us !!</h3>
            <p >Our friendly team is here to help</p>
            <a href="mailto:to_let@gmail.com">to_let@gmail.com</a>
          </div>
          </div>
          <div className="call">
            <i className="fas fa-phone-alt"></i>
            <div class="icon"><MdCall style={{ color: 'white', fontSize: '40px' }} /> </div> 

            <div id="cu">
            <h3 > Call us...</h3>
            <p >Mon - Fri 8 am to 10 pm</p>
            <p >+91 9876543210</p>
            </div>
          </div>
        </div>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            >
              
              {/* Add your options here */}
            </input>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="btn" type="submit">Submit Query</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}

      </div>
    </div>
  );
};

export default Contact;
