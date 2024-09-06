import React, { useState } from "react";
import styles from "./style.module.css";

const NavBar = (props) => {
    const [activeLang , setActiveLink] = useState(0);

  return (
    <div className={styles.main}>
        {props.languages.map((lang, index) => (
          <div key={index} className={`${styles.langCont} ${activeLang === index? styles.activeLang:''}`} onMouseEnter={()=>setActiveLink(index)}>
            <img src={lang.icon} alt="icon" />
             <p>{lang.name}</p>
          </div>
        ))}
      </div>
  );
};
export default NavBar;
