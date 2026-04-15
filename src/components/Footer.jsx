import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* LEFT */}
        <div className={styles.left}>
          <h2>Afolabi Victory</h2>
          <p>Full-Stack Web Developer</p>
        </div>

        {/* MIDDLE */}
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT */}
        <div className={styles.socials}>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Afolabi Victory. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;