import React from "react";
import styles from "./style.module.css";

const About = ({ Languages }) => {
  const skillsData = [
    { skill: "HTML / CSS", percentage: 99 },
    { skill: "ReactJs", percentage: 89 },
    { skill: "Angular", percentage: 75 },
    { skill: "Next / Nest JS", percentage: 68 },
  ];
  return (
    <div className={`${styles.main} relative bg-[purple] `} id="about">
      <div className={styles.skillsContainer} id="skills">
        <h2 className={styles.skillsTitle} data-text="My Skills">
          My Skills
        </h2>
        <p className={styles.skillsDescription}>
          I create smooth, fast, and user-friendly websites using the latest
          tools and technologies. From front-end to back-end,I ensure every
          detail functions delivering a
          seamless experience from start to finish.
        </p>
        <div className={styles.barLangCont}>
          <div className={styles.skillsBars}>
            {skillsData.map((skill, index) => (
              <div key={index} className={styles.skillBar}>
                <div className={styles.skillLabel}>
                  <span>{skill.skill}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div style={{ width: `${skill.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.skillsLangCont}>
            {Languages.map((lang, index) => (
              <div key={index} className={styles.skillLang}>
                <img src={lang.icon} alt="icon" />
                <p>{lang.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        id="destination"
        className={`absolute top-0 left-[100%] bg-[pink] ${styles.destination} `}
      ></div>
    </div>
  );
};
export default About;
