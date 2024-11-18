import React from "react";
import styles from './style.module.css'
import SideBar from "../sideBar";
import NavBar from "../navbar";

const Layout = ({children , Languages})=>{
    return(
        <div className={`max-w-[1500px] overflow-hidden ${styles.main}`}>
            <SideBar/>
            <div className={styles.subMain}>
                <NavBar languages = {Languages}/>
                {children}
            </div>
        </div>
    )
}
export default Layout;