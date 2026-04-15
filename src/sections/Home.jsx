import React from 'react'
import styles from './Home.module.css'
import HeroImg from '../assets/Brown.jpeg'

const Home = () => {
  return (
    <div className={styles.hero} id="home">
        <div className={styles.heroImg}>
            <img src={HeroImg} alt="Afolabi Victory" />
        </div>
        <div className={styles.heroText}>
            <h1>Hi, i'm <span>Afolabi Victory</span></h1>
            <h2>Full-Stack Web Developer</h2>
            <p>
                I create modern web experiences that are fast, responsive, and intuitive, crafted with
                attention to detail, performance, and usability. I combine design and technology to build
                impactful products that solve real-world problems and deliver lasting value.
            </p>
            <div className={styles.heroBtn}>
                <button id={styles.contact}>Contact Me</button>
                <button id={styles.cv}>Download CV <i className="fa-solid fa-download"></i></button>
            </div>
            <div className={styles.heroIcon}>
                <a href="https://www.linkedin.com/in/afolabi-victory-998b65345/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/Afolabivictory-br"><i className="fa-brands fa-github"></i></a>
                <a href="https://wa.me/+2348026672774"><i className="fa-brands fa-square-whatsapp"></i></a>
            </div>
        </div>
    </div>
  )
}

export default Home
