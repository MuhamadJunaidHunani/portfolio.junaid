import React from "react";
import styles from './style.module.css'

const About = () => {
    return (
        <div className={`${styles.main} relative bg-[purple] `} id="about">
            <div id="journey" className={`text-white w-[100%] bg-[blue] ${styles.journey} `} >Journey</div>
            <div id="destination" className={`absolute top-0 left-[100%] bg-[pink] ${styles.destination} `} >Destination</div>
        </div>
    )
}
export default About;