import React from "react";
import styles from './style.module.css'
import Home from "../home";
import About from "../about";
import Contact from "../contact";
import Temp from "../temp";

const Main = ()=>{
    return(
        <div className={styles.main} id="main">
            <Home/>
            <About/>
            <Temp/>
            <Contact/>
        </div>
    )
}
export default Main;