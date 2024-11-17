import React from 'react';
import styles from './style.module.css';
import StarRating from './starRating';

const ContactForm = () => {
    return (
        <div className={styles.main} id='contact'>
            <div className={styles.formContainer}>
                <div className="flex">
                <input type="email" placeholder="Enter a valid email address" className={styles.inputField} />
                <input type="text" placeholder="Enter your Name" className={styles.inputField} />
                </div>
                <StarRating totalStars={5}/>
                <input type="text" placeholder="Enter your phone (e.g. +14155)" className={styles.inputField} />
                <textarea placeholder="Enter your message" className={styles.messageField}></textarea>
                <button className={styles.submitButton}>Submit</button>
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.heading}>Contact Us</h2>
                <p className={styles.text}>
                    Right now there is no us, I’m running the show alone. So every feedback you provide,
                    any suggestions you have and any new idea you like to share — please don’t hesitate,
                    write to me immediately.
                </p>
                <p className={styles.text}>
                    I’m a social animal. Animal because I’ve some degree of randomness in my behaviour.
                    Social because I love to hear and share with people.
                </p>
                <div className={styles.socialIcons}>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-behance"></i>
                    <i className="fab fa-pinterest"></i>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
