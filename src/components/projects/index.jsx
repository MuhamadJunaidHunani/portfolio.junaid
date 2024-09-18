
// import quiz from '../../assets/images/projects/quiz.png'
// import clock from '../../assets/images/projects/clock.png'
import slider from '../../assets/images/projects/slider.png'
import chatApp from '../../assets/images/projects/chatApp.png'
import lift from '../../assets/images/projects/lift.png';
import styles from './style.module.css';

const myProjects = [
  {
    title: 'Lift Algorithm',
    url: 'liift.netlify.app',
    img:slider ,
  }
]
const Projects = ()=>{
    
    return(
        <div className={styles.main} id="projects">
            <div className={styles.projectsCont}>
                {myProjects.map((item, index)=>{
                    return(
                        <div className={styles.projectCard}>
                            {/* <p className={styles.cardTitle}>{item.title}</p> */}
                            <img className={styles.cardImg} src={item.img} alt={item.title} />
                            <div className={styles.behindLay}></div>
                        </div>
                    )
                })}
            </div>
       </div>
    )
}
export default Projects;