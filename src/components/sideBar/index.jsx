import React, { useEffect, useState } from 'react';
import styles from './style.module.css';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const sections = ['home', 'about', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const main = document.getElementById("main");
      const offsets = sections.map(id => {
        const element = document.getElementById(id);
        return { id, offsetTop: element.offsetTop };
      });
      const scrollPosition = main.scrollTop + 45
      const div2 = document.querySelector("#div2");
      const destination = document.querySelector("#destination");
      const contact = document.querySelector("#contact");
      const aboutCont = document.querySelector("#about");

      const tempheight = (div2?.getBoundingClientRect().height);
      if (div2?.getBoundingClientRect().top) {
        const scrollingRatio = ((div2?.getBoundingClientRect().top-45)/tempheight)*100
        destination.style.left = scrollingRatio <= '0'? '0%' : `${scrollingRatio}%`
      }

      if (contact?.getBoundingClientRect().top < 65) {
        aboutCont.style.position = 'relative'
      }
      else {
        aboutCont.style.position = 'sticky'
      }
      for (let i = 0; i < offsets.length; i++) {
        if (scrollPosition <= offsets[i]?.offsetTop + 200 && scrollPosition >= offsets[i]?.offsetTop - 200) {
          setActiveLink(offsets[i].id);
          break;
        }
      }

    };

    const main = document.getElementById("main");
    main.addEventListener('scroll', handleScroll);



    return () => {
      main.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = async (id) => {
    // document.querySelector("#contact").style.display = 'block'
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

  };

  return (
    <nav className={styles.sidebar}>
      <ul>
        {sections.map((containers, index) => {
          return (
            <li key={index} className={activeLink === containers ? styles.active : ''} onClick={() => handleClick(containers)}>{containers}</li>
          )
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
