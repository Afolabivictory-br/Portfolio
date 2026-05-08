import React, { useContext } from 'react'
import styles from './Home.module.css'
import hero from '../assets/hero.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons/faMoon'
import { AppContext } from '../context/AppContext'
import themeStyle from '../components/Sidebar.module.css'

const Home = () => {
  const { theme } = useContext(AppContext)
  return (
    <section style={{transition: '0.6s ease'}} className={`${styles.home} ${theme == 'dark' ? themeStyle.dark : themeStyle.light}`} id="home">

      <div className={styles.left}>
        <p className={styles.intro}>HELLO THERE</p>

        <h1>
          I’m <span>Victory</span><br />
          Full-Stack Web Developer
        </h1>

        <p className={styles.desc}>
          I build modern, responsive and interactive web experiences
          using React and Django.
        </p>

        <div className={styles.buttons}>
          <a href="#projects" className={styles.primaryBtn}>
            View Projects
          </a>

          <a href="#contact" className={styles.secondaryBtn}>
            Hire Me
          </a>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imageWrapper}>
          <img src={hero} alt="hero" />
        </div>
      </div>

    </section>
  )
}

export default Home