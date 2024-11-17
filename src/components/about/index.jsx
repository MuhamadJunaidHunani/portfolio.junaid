import React from "react";
import styles from "./style.module.css";

const About = ({ Languages }) => {
  const skillsData = [
    { skill: "HTML / CSS", percentage: 100 },
    { skill: "ReactJs", percentage: 89 },
    { skill: "Angular", percentage: 75 },
    { skill: "Next / Nest JS", percentage: 68 },
  ];
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "💻",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Web Design",
      icon: "🖥️",
      description:
        "Lorem Ipsum is simply  ubdhksab khbdkbab bjkcbqd dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "Responsive Design",
      icon: "📱",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div className={`${styles.main} relative bg-[purple] `} id="about">
      <div className={styles.skillsContainer} id="skills">
        <h2 className={styles.skillsTitle}>What I Do,</h2>
        <p className={styles.skillsDescription}>
          I create smooth, fast, and user-friendly websites using the latest
          tools and technologies. From front-end to back-end,I ensure every
          detail functions delivering a seamless experience from start to
          finish.
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
        id="service"
        className={`absolute top-0 left-[100%] bg-[pink] ${styles.servicesContainer} `}
      >
        <h2 className={styles.heading}>What I Offer,</h2>
        <p className={styles.servicesDescription}>
          From concept to launch, I handle every aspect of your web development
          needs with precision and creativity.Building tailor-made websites that
          not only look stunning but perform flawlessly
        </p>
        <div className={styles.servicesGrid}>
          <div className={styles.servicesInnerGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
