import React from 'react';
import styles from './style.module.css';

const skillsData = [
  { skill: 'Photoshop', percentage: 90 },
  { skill: 'jQuery', percentage: 75 },
  { skill: 'HTML / CSS', percentage: 99 },
  { skill: 'ReactJs', percentage: 89 },
  { skill: 'Angular', percentage: 75 },
  { skill: 'Next / Nest JS', percentage: 68 },
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer} id='skills'>
      <h2 className={styles.skillsTitle} data-text="My Skills">My Skills</h2>
      <p className={styles.skillsDescription}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab laudantium
        possimus molestias sapiente, saepe facilis dolore autem repellat, qua iure tempore
        nisi perspiciatis. Quasi?
      </p>
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
    </div>
  );
};

export default Skills;
