import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FcHome } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const sections = ["home", 'hello' , "about", "projects", "skills", "contact"];
  const links = [
    { name: "Welcome", icon: "https://img.icons8.com/color/48/home--v1.png" },
    { name: "hello", icon: "https://img.icons8.com/color/48/home--v1.png" },
    { name: "Bio", icon: "https://img.icons8.com/color/48/info-squared.png" },
    { name: "Showcase", icon: "https://img.icons8.com/color/48/maintenance.png" },
    { name: "Capabilities", icon: "https://img.icons8.com/color/48/internship.png" },
    { name: "Reach Me", icon: "https://img.icons8.com/color/48/contacts.png" }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      const main = document.getElementById("main");
      const offsets = sections.map((id) => {
        const element = document.getElementById(id);
        return { id, offsetTop: element.offsetTop , element };
      });
      const scrollPosition = main.scrollTop + 45;
      const div2 = document.querySelector("#div2");
      const destination = document.querySelector("#destination");
      const contact = document.querySelector("#projects");
      const aboutCont = document.querySelector("#about");
      // const hello2 = document.querySelector("#hello2");
      
      const tempheight = div2?.getBoundingClientRect().height;
      if (div2?.getBoundingClientRect().top) {
        const scrollingRatio =
          ((div2?.getBoundingClientRect().top - 45) / tempheight) * 100;
        destination.style.left =
          scrollingRatio <= "0" ? "0%" : `${scrollingRatio}%`;
      }

      if (contact?.getBoundingClientRect().top < 65) {
        aboutCont.style.position = "relative";
      }
      else {
        aboutCont.style.position = "sticky";
      }
      for (let i = 0; i < offsets.length; i++) {
        if (
          scrollPosition <= offsets[i]?.offsetTop + 200 &&
          scrollPosition >= offsets[i]?.offsetTop - 200
        ) {
          setActiveLink(offsets[i].id);
          break;
        }
      }
    };

    const main = document.getElementById("main");
    main.addEventListener("scroll", handleScroll);

    return () => {
      main.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = async (id) => {
    // document.querySelector("#contact").style.display = 'block'
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.sidebar}>
      <h1 className={styles.sidebarHd}>
      <img width="48" height="48" src="https://img.icons8.com/color/48/code-file.png" alt="code-file"/> Portfolio
      </h1>
      <ul className={styles.linksCont}>
        {sections.map((containers, index) => {
          return (
            <li
              key={index}
              className={`${styles.links} ${
                activeLink === containers ? styles.active : ""
              }`}
              onClick={() => handleClick(containers)}
            >
                <img src={links[index].icon} alt={`${links[index].name} icon`} />
                {links[index].name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
