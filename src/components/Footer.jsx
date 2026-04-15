import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.left}>
          <h2>Afolabi Victory</h2>
          <p>Full-Stack Web Developer</p>
        </div>

        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.socials}>
          <a href="https://github.com/Afolabivictory-br" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/afolabi-victory-998b65345/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://wa.me/+2348026672774" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Afolabi Victory. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;