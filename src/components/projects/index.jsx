import React from "react";
import styles from './style.module.css'
import lift from '../../assets/images/projects/lift.png'
import cars from '../../assets/images/projects/cars.png'
import quiz from '../../assets/images/projects/quiz.png'
import clock from '../../assets/images/projects/clock.png'
import slider from '../../assets/images/projects/slider.png'
import chatApp from '../../assets/images/projects/chatApp.png'

const myProjects = [
  {
    title: 'Lift Algorithm',
    url: 'liift.netlify.app',
    img: lift
  }
]
const Projects = ()=>{
    
    return(
        <div className={styles.main} id="projects">
     
    </div>
    )
}
export default Projects;