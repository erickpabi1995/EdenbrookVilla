import styles from './FAQ.module.scss'
import { useState } from 'react';
import React from "react";
import { useNavigate } from 'react-router-dom';

const FAQ = () => {

  const navigate = useNavigate()

  const handleContact = () =>{
    navigate('/contactUs')
  }

  // Track only one open index at a time
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle an item (only one open at a time)
  const toggleItem = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: "What types of properties does Qluxe Homes offer?",
      answer: "Qluxe specializes in high-end residential developments — from off-plan villas to move-in-ready homes — designed to redefine modern luxury living in Ghana and beyond. Each property combines architectural excellence with functional sophistication."
    },
    {
      question: "How can I purchase or invest in a Qluxe property?",
      answer: "To purchase or invest, contact our sales team for details on available properties and investment opportunities."
    },
    {
      question: "Another question?",
      answer: "Answer to another question."
    },
    {
      question: "Yet another question?",
      answer: "Answer to yet another question."
    },
    {
      question: "One more question?",
      answer: "Answer to one more question."
    }
  ];

  return (
    <div className={styles.newsLetter}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p className={styles.titleColumn}>Your Questions. Answered. </p>
          <p className={styles.titleText}>Contact us if you have any other questions.</p>
        </div>
        <div className={styles.titleDescription}>
          <div className={styles.button}>
            {/* <div className={styles.insights}>
              <div className={styles.insightCard}>
                <p className={styles.blogSubContainer}>What types of properties does Qluxe Homes offer?</p>
                <div className={styles.blogColumn}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 14.9499C11.8667 14.9499 11.7417 14.9291 11.625 14.8874C11.5084 14.8457 11.4 14.7749 11.3 14.6749L6.70005 10.0749C6.51672 9.89157 6.42505 9.65824 6.42505 9.3749C6.42505 9.09157 6.51672 8.85824 6.70005 8.6749C6.88338 8.49157 7.11672 8.3999 7.40005 8.3999C7.68338 8.3999 7.91672 8.49157 8.10005 8.6749L12 12.5749L15.9 8.6749C16.0834 8.49157 16.3167 8.3999 16.6 8.3999C16.8834 8.3999 17.1167 8.49157 17.3 8.6749C17.4834 8.85824 17.575 9.09157 17.575 9.3749C17.575 9.65824 17.4834 9.89157 17.3 10.0749L12.7 14.6749C12.6 14.7749 12.4917 14.8457 12.375 14.8874C12.2584 14.9291 12.1334 14.9499 12 14.9499Z" fill="#172B22"/>
                  </svg>
                </div>
              </div>
              <p className={styles.blogSubColumn}>Qluxe specializes in high-end residential developments — from off-plan villas to move-in-ready homes — designed to redefine modern luxury living in Ghana and beyond. Each property combines architectural excellence with functional sophistication.</p>
            </div> */}
            <div className={styles.insights}>
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <React.Fragment key={index}>
                    <div
                      className={isOpen ? styles.insightCard : styles.blogSub}
                      onClick={() => toggleItem(index)}
                      style={{ cursor: 'pointer'}}
                    >
                      <p className={isOpen ? styles.blogSubContainer : styles.badge}>{item.question}</p>
                      <div className={isOpen ? styles.blogColumn : styles.badge_text}>
                          {isOpen ? 
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0002 9.04961C12.1335 9.04961 12.2585 9.07044 12.3752 9.11211C12.4919 9.15378 12.6002 9.22461 12.7002 9.32461L17.3002 13.9246C17.4835 14.1079 17.5752 14.3413 17.5752 14.6246C17.5752 14.9079 17.4835 15.1413 17.3002 15.3246C17.1169 15.5079 16.8835 15.5996 16.6002 15.5996C16.3169 15.5996 16.0835 15.5079 15.9002 15.3246L12.0002 11.4246L8.1002 15.3246C7.91686 15.5079 7.68353 15.5996 7.4002 15.5996C7.11686 15.5996 6.88353 15.5079 6.7002 15.3246C6.51686 15.1413 6.4252 14.9079 6.4252 14.6246C6.4252 14.3413 6.51686 14.1079 6.7002 13.9246L11.3002 9.32461C11.4002 9.22461 11.5085 9.15378 11.6252 9.11211C11.7419 9.07044 11.8669 9.04961 12.0002 9.04961Z" fill="#172B22"/>
</svg>
                  :
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.9998 14.9504C11.8665 14.9504 11.7415 14.9296 11.6248 14.8879C11.5081 14.8462 11.3998 14.7754 11.2998 14.6754L6.6998 10.0754C6.51647 9.89206 6.4248 9.65872 6.4248 9.37539C6.4248 9.09206 6.51647 8.85872 6.6998 8.67539C6.88314 8.49206 7.11647 8.40039 7.3998 8.40039C7.68314 8.40039 7.91647 8.49206 8.0998 8.67539L11.9998 12.5754L15.8998 8.67539C16.0831 8.49206 16.3165 8.40039 16.5998 8.40039C16.8831 8.40039 17.1165 8.49206 17.2998 8.67539C17.4831 8.85872 17.5748 9.09206 17.5748 9.37539C17.5748 9.65872 17.4831 9.89206 17.2998 10.0754L12.6998 14.6754C12.5998 14.7754 12.4915 14.8462 12.3748 14.8879C12.2581 14.9296 12.1331 14.9504 11.9998 14.9504Z" fill="#172B22"/>
</svg>
                          }
                      </div>
                    </div>
                    {isOpen && <p className={styles.blogSubColumn}>{item.answer}</p>}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className={styles.date_text}>
            <div className={styles.header}>
              <p className={styles.logo_groups}>Still have a question in mind?</p>
              <p className={styles.logo_subgroups}>Contact us if you have any other questions.</p>
            </div>
            <button className={styles.logo_text} onClick={handleContact}>Contact us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ