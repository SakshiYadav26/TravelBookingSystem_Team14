import React, { useState } from 'react';
import axios from 'axios';
import styles from './feedback.module.css';
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
        'https://formspree.io/f/xoqoqnqg',
        formData
      );

      if (response.status === 200) {
        console.log('Form submitted successfully');
        setFormData(initialFormData);
      }
    } catch (error) {
      console.error('Form submission failed');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h4>FEEDBACK FORM</h4>
        <div className={styles.field}>
          <label htmlFor="username">
            <FontAwesomeIcon icon={faUser} />
            Your Name
          </label>
          <input
            name="username"
            type="text"
            placeholder="e.g. john doe"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">
            <FontAwesomeIcon icon={faEnvelope} />
            Your Email
          </label>
          <input
            name="email"
            type="text"
            placeholder="email@domain.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">
            <FontAwesomeIcon icon={faEdit} />
            Your Message
          </label>
          <textarea
            name="message"
            placeholder="Type here"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={styles.field}>
          <label htmlFor="rating1">How would you rate our service?</label>
          <div className={styles.rating}>
            {[5, 4, 3, 2, 1].map((rating) => (
              <React.Fragment key={rating}>
                <input
                  type="radio"
                  name="rating1"
                  value={rating}
                  id={`rating1-${rating}`}
                  checked={formData.rating1 === String(rating)}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={`rating1-${rating}`}>{rating}</label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="rating2">How likely are you to recommend us?</label>
          <div className={styles.rating}>
            {[5, 4, 3, 2, 1].map((rating) => (
              <React.Fragment key={rating}>
                <input
                  type="radio"
                  name="rating2"
                  value={rating}
                  id={`rating2-${rating}`}
                  checked={formData.rating2 === String(rating)}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={`rating2-${rating}`}>{rating}</label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send Me Message
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
