import React, { useEffect } from "react";
import styles from './style.module.css'
import journeyImg from '../../assets/images/journey.jpg'
import DestinationImg from '../../assets/images/destination.jpg'

const Hello = () => {
    useEffect(() => {
      const main = document.querySelector("#main");
      const hello = document.querySelector("#hello");
      const hello2 = document.querySelector("#hello2");
      const overlay = document.querySelector("#overlay");
    main.addEventListener("scroll", () => {
      if(document.querySelector("#about").getBoundingClientRect().top <46 ){
        hello.style.position = "relative" 
    }else{
          hello.style.position = "sticky" 
      }
    const value = ((hello2.getBoundingClientRect().top - 45)/(hello2.getBoundingClientRect().height/2))*100
    if(value < 100){
        hello.style.backgroundImage = `url(${DestinationImg})`;
        console.log("journey");
        overlay.style.opacity = `${value}%`
    }
    else if(hello.getBoundingClientRect().top < 50){
        console.log("des");
        hello.style.backgroundImage = `url(${journeyImg})`
        console.log(Math.abs(value-200));
        overlay.style.opacity = `${Math.abs(value-200)}%`
    }
      
    });
  });
  return (
    <div className={`sticky top-0 ${styles.hello}`} id="hello">
        <div className={styles.overlay} id="overlay"></div>
    </div>
  );
};

export default Hello;
