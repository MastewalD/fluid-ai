import React from 'react';
import styles from './style.module.css'; // Create a CSS module for styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src='/images/logo.svg' alt="Company Logo" className={styles.logo} />
          <p>2024 Fluid AI</p>
        </div>
        <div className={styles.links}>
          <ul className={styles.linkList}>
            <li><a href="#ourFeature" className={styles.link}>Our Feature</a></li>
            <li><a href="#areas" className={styles.link}>Areas</a></li>
            <li><a href="#faqs" className={styles.link}>FAQs</a></li>
            <li><a href="#waitlist" className={styles.link}>The Waitlist</a></li>
            <li><a href="#contact" className={styles.link}>Contact Us</a></li>
          </ul>

          <ul className={styles.linkList}>
            <li><a href="#terms" className={styles.link}>Terms of Service</a></li>
            <li><a href="#privacy" className={styles.link}>Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;