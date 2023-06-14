import React, { useState } from 'react';
import axios from 'axios';
import './faq.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faEdit } from '@fortawesome/free-regular-svg-icons';

const FeedbackForm = () => {
  const initialFormData = {
    username: '',
    email: '',
    message: '',
    rating1: '',
    rating2: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await axios.post(
        'https://formspree.io/f/xrgvwkbq',
        formData
      );

      if (response.status === 200) {
        // Form submission successful
        console.log('Form submitted successfully');
        setFormData(initialFormData);
      }
    } catch (error) {
      // Form submission failed
      console.error('Form submission failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h4 className="text-center">FEEDBACK FORM</h4>
        <div className="form-group">
          <label htmlFor="username">
            <FontAwesomeIcon icon={faUser} />
            Your Name
          </label>
          <textarea
            name="username"
            
            className="form-control"
            placeholder="e.g. john doe"
            value={formData.username}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} />
            Your Email
          </label>
          <textarea
            name="email"
            
            className="form-control"
            placeholder="email@domain.com"
            value={formData.email}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            <FontAwesomeIcon icon={faEdit} />
            Your Message
          </label>
          <textarea
            name="message"
            className="form-control"
            placeholder="type here"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="rating1">How would you rate our service?</label>
          <div className="rating">
            <input
              type="radio"
              name="rating1"
              value="5"
              id="rating1-5"
              checked={formData.rating1 === '5'}
              onChange={handleChange}
              required
            />
            <label htmlFor="rating1-5">5</label>
            <input
              type="radio"
              name="rating1"
              value="4"
              id="rating1-4"
              checked={formData.rating1 === '4'}
              onChange={handleChange}
              required
            />
            <label htmlFor="rating1-4">4</label>
            <input
              type="radio"
              name="rating1"
              value="3"
              id="rating1-3"
              checked={formData.rating1 === '3'}
              onChange={handleChange}
              required
            />
            <label htmlFor="rating1-3">3</label>
            <input
              type="radio"
              name="rating1"
              value="2"
              id="rating1-2"
              checked={formData.rating1 === '2'}
              onChange={handleChange}
              required
            />
            <label htmlFor="rating1-2">2</label>
            <input
              type="radio"
              name="rating1"
              value="1"
              id="rating1-1"
              checked={formData.rating1 === '1'}
              onChange={handleChange}
              required
            />
            <label htmlFor="rating1-1">1</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="rating2">
            How likely are you to recommend us to a friend?
          </label>
          <div className="rating">
            <input
              type="radio"
              name="rating2"
              value="5"
              id="rating2-5"
              checked={formData.rating2 === '5'}
              onChange={handleChange}
              required
            />
            <label htmlFor="rating2-5">5</label>
            <input
              type="radio"
              name="rating2"
              value="4"
              id="rating2-4"
              checked={formData.rating2 === '4'}
              onChange={handleChange}
              required
            />
            <label htmlFor="rating2-4">4</label>
            <input
              type="radio"
              name="rating2"
              value="3"
              id="rating2-3"
              checked={formData.rating2 === '3'}
              onChange={handleChange}
              required
            />
            <label htmlFor="rating2-3">3</label>
            <input
              type="radio"
              name="rating2"
              value="2"
              id="rating2-2"
              checked={formData.rating2 === '2'}
              onChange={handleChange}
              required
            />
            <label htmlFor="rating2-2">2</label>
            <input
              type="radio"
              name="rating2"
              value="1"
              id="rating2-1"
              checked={formData.rating2 === '1'}
              onChange={handleChange}
              required
            />
            <label htmlFor="rating2-1">1</label>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
