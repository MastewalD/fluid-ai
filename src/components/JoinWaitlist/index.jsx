import React, { useState } from 'react';
import styles from './style.module.css'; 

const JoinWaitlist = () => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'India',
    'Japan',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Country:', country);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2 className={styles.title}>Join the Fluid AI Waitlist Today!</h2>
        <form className={styles.form}>
          <input
            type="text"
            placeholder="Enter your name"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.input}
            required
          />
          <select className={styles.select} required>
            <option value="" disabled selected>
              Select your country
            </option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinWaitlist;