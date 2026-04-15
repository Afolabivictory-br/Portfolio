import React, { useState } from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
        <div className={styles.logo}>
            <a href="#home">
                <h3>BrownDev</h3>
            </a>
        </div>

        <div className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>

        <div 
          className={styles.hambuger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
            <i className="fa-solid fa-bars"></i>
        </div>
    </nav>
  )
}

export default NavBar