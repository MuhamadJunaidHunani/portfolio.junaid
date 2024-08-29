import React from "react";
import styles from './style.module.css'
import Admin from '../../assets/images/Admin.jpeg'
import AutoTypingText from "../AutoTypingText";

const Home = ()=>{
    const texts = [
        "Full Stack Developer  ",
        "/* Way to MERN Stack */  ",
      ];
    return(
        <div className={styles.main} id="home">
      <div className={styles.heroContent}>
        <h1 className={styles.itroHd}>&lt;<span className= {`${styles.intro} font-mono`}>Meet, M.Junaid</span>/&gt;</h1>
        <AutoTypingText texts={texts} speed={100}/>
        <p>
        Transforming code into creativity, I build the bridges between vision and innovation.   
        </p>
        {/* <div className={styles.cta}>
          <input type="email" placeholder="Enter your email" />
          <button>Get Started</button>
        </div> */}
      </div>
      <div className={styles.heroImage}>
        {/* <img src={Admin} alt="Illustration" /> */}
      </div>
    </div>
    )
}
export default Home;