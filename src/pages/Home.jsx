import React, { useState } from 'react';
import './Home.css';
import axios from 'axios';
import map from "../assests/map.jpeg";


const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  
  const [responseMessage, setResponseMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setResponseMessage(response.data);
      setFormData({
        name: '',
        email: '',
        phone: '',
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
    <div className="home-page  ">
      <div className="contact-container">
      <img id="img"src={map} alt='MAP'></img>
        
        <div className="contact-form-container">
          <h2>Get in Touch</h2>
          <p>Have some questions?<br />
          <br />
           Feel free to ask them anytime.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Phone:
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <label>
              Message:
              <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
            </label>
            <button type="submit">Send Message</button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}

        </div>
      </div>
    </div>
  );
};

export default Home;
