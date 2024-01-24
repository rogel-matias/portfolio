import { useState } from "react";
import { Link as ScrollLink } from "react-scroll"

import styles from "./navbar.module.css"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header>
      <button className={styles.openButton} onClick={handleToggleMenu}>
        <img src="/assets/home/list.svg"/>
      </button>
      <nav className={isOpen ? `${styles.nav} ${styles.visibleNav}` : styles.nav}>
        <button className={styles.closeButton} onClick={handleToggleMenu}>
          <img src='/assets/home/x-square.svg'/>
        </button>
        <ul className={styles.ul}>
          <li>
            <ScrollLink 
              to="home"
              onClick={handleToggleMenu}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Inicio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="aboutme"
              onClick={handleToggleMenu}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Sobre mí
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="projects"
              onClick={handleToggleMenu}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Proyectos
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="skills"
              onClick={handleToggleMenu}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Habilidades
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="certificates"
              onClick={handleToggleMenu}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Certificados
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="contact"
              onClick={handleToggleMenu}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
            >
              Contacto
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar