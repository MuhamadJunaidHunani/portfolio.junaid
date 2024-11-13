import React, { useEffect } from "react";
import styles from "./style.module.css";
import journeyImg from "../../assets/images/journey.jpg";
import DestinationImg from "../../assets/images/destination.jpg";

const Hello = () => {
  useEffect(() => {
    const main = document.querySelector("#main");
    const hello = document.querySelector("#hello");
    const hello2 = document.querySelector("#hello2");
    const overlay = document.querySelector("#overlay");
    const heading = document.querySelector("#heading");
    const para = document.querySelector("#para");
    main.addEventListener("scroll", () => {
      if (document.querySelector("#about").getBoundingClientRect().top < 46) {
        hello.style.position = "relative";
      } else {
        hello.style.position = "sticky";
      }
      const value =
        ((hello2.getBoundingClientRect().top - 45) /
          (hello2.getBoundingClientRect().height / 2)) *
        100;
      if (value < 100) {
        hello.style.backgroundImage = `url(${DestinationImg})`;
        console.log("journey");
        overlay.style.opacity = `${value}%`;
        heading.innerHTML = "My Journey"
        para.innerHTML =
          `With 1.75+ years of hands-on experience, I've honed my skills in frontend development, specializing in building dynamic, user-friendly interfaces. My journey began at Xperiode, where I played a key role in designing and developing responsive web applications using React, Firebase, and other modern technologies. Through continuous learning and real-world challenges, I’ve gained a deep understanding of creating seamless user experiences.`;
      } else if (hello.getBoundingClientRect().top < 50) {
        console.log("des");
        hello.style.backgroundImage = `url(${journeyImg})`;
        console.log(Math.abs(value - 200));
        heading.innerHTML = "My Destination"
        para.innerHTML =
          `In the future, I see myself evolving into a versatile full-stack developer, seamlessly working across both frontend and backend technologies. My aim is to build complete, scalable web solutions that not only look great but also perform efficiently. By mastering cutting-edge frameworks and backend technologies, I plan to lead end-to-end projects, collaborate with cross-functional teams, and deliver high-impact solutions that drive innovation in the digital space.`;
        overlay.style.opacity = `${Math.abs(value - 200)}%`;
      }
    });
  });
  return (
    <div className={`sticky top-0 ${styles.hello}`} id="hello">
      <div className={styles.overlay} id="overlay">
        <h1 className={styles.heading} id="heading"></h1>
        <p className={styles.para} id="para"></p>
      </div>
    </div>
  );
};

export default Hello;
