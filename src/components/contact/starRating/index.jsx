import React, { useState } from 'react';
import styles from './style.module.css';
import { IoBulbOutline } from "react-icons/io5";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    console.log(rate);
    
  };

  return (
    <div className={`${styles.starRatingContainer} flex flex-row-reverse`}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = totalStars - index;
        return (
          <span
            key={index}
            className={starValue <= rating ? styles.starFilled : styles.starEmpty}
            onClick={() => handleRating(starValue)} 
          >
            <IoBulbOutline/>
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
