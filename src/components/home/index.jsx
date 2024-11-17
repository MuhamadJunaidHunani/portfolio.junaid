import React from "react";
import styles from './style.module.css'
import Admin from '../../assets/images/Admin2.jpeg'
import AutoTypingText from "../AutoTypingText";

const Home = ()=>{
    const texts = [
        "Front End Developer ",
        "/* Way to FULL STACK */ ",
      ];
    return(
        <div className={styles.main} id="home">
      <div className={styles.heroContent}>
        <h1 className={styles.itroHd}>&lt;<span className= {`${styles.intro} font-mono`}>Meet, M.Junaid</span>/&gt;</h1>
        <AutoTypingText texts={texts} speed={100}/>
        <p>
        Transforming code into creativity, I build the bridges between vision and innovation.   
        </p>
      </div>
      <div className={styles.heroImage}>
        <img src={Admin} alt="Illustration" />
      </div>
    </div>
    )
}
export default Home;