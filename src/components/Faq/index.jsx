import React, { useState } from 'react';
import styles from './style.module.css';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What is your return policy?',
      answer: 'You can return any item within 30 days of purchase for a full refund.',
    },
    {
      question: 'How do I track my order?',
      answer: 'Once your order has shipped, you will receive an email with tracking information.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to select countries outside the United States.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
    },
    {
      question: 'How can I contact customer service?',
      answer: 'You can reach our customer service via the contact form on our website or by emailing support@example.com.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.header}>
        <h2>What can curiosity, wonder, and awe do for you?</h2>
        <p>Research shows that experiencing curiosity and awe can immensely benefit our mental, physical, and professional health. Here’s a brief overview of what curiosity and awe can do for you.</p>
      </div>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <div 
              className={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className={styles.arrow}>{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className={styles.faqAnswer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;