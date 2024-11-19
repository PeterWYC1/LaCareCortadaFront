// src/pages/Register.jsx
import React from 'react';
import styles from '../Styles/Auth.module.css';

function Register() {
  return (
    <div className={styles.container}>
      <h1>Sign Up</h1>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Name" />
        <input className={styles.input} type="text" placeholder="Last Name" />
        <input className={styles.input} type="email" placeholder="Email" />
        <input className={styles.input} type="email" placeholder="Confirm Email" />
        <input className={styles.input} type="password" placeholder="Password" />
        <input className={styles.input} type="password" placeholder="Confirm Password" />
        <button className={styles.button} type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
