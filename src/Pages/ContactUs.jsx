import React from 'react';
import styles from '../Styles/ContactUs.module.css';

function ContactUs() {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form
        action="mailto:your-email@example.com"
        method="post"
        encType="text/plain"
        className={styles.form}
      >
        <input 
          type="text" 
          className={styles.input} 
          placeholder="Your Name" 
          name="name" 
          required
        />
        <input 
          type="email" 
          className={styles.input} 
          placeholder="Your Email" 
          name="email" 
          required
        />
        <textarea 
          className={styles.textarea} 
          placeholder="Your Message" 
          name="message" 
          rows="5"
          required
        ></textarea>
        <button type="submit" className={styles.button}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
