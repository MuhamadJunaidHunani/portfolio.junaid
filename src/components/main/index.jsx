import React from "react";
import styles from './style.module.css'
import Home from "../home";
import About from "../about";
import Contact from "../contact";
import Temp from "../temp";
import Projects from "../projects";
import Skills from "../skills";
import Hello from "../hello";
import Hello2 from "../hello2";

const Main = ({Languages})=>{
    return(
        <div className={styles.main} id="main">
            <Home/>
            <Hello/>
            <Hello2/>
            <About Languages={Languages}/>
            <Temp/>
            <Projects/>
            <Skills/>
            <Contact/>
        </div>
    )
}
export default Main;