import React, { useContext } from 'react'
import styles from './About.module.css'
import themeStyle from '../components/Sidebar.module.css'
import { AppContext } from '../context/AppContext'

const About = () => {
    const { theme } = useContext(AppContext)

  return (
    <section style={{transition: '0.6s ease'}} className={`${styles.about} ${theme == 'dark' ? themeStyle.dark : themeStyle.light}`} id="about">

      <div className={styles.container}>

        <h2 className={styles.title}>About Me</h2>

        <p className={styles.text}>
          I’m a Frontend React Developer passionate about building clean,
          responsive and user-friendly web applications. I enjoy turning
          ideas into real digital experiences using modern tools like React,
          JavaScript, and CSS.
        </p>

        <p className={styles.text}>
          I focus on writing reusable components, improving UI/UX, and making
          sure every project works smoothly across all devices.
        </p>

        <div className={styles.stats}>
          <div className={styles.box}>
            <h3>1+</h3>
            <p>Years Learning</p>
          </div>

          <div className={styles.box}>
            <h3>10+</h3>
            <p>Projects Built</p>
          </div>

          <div className={styles.box}>
            <h3>Frontend</h3>
            <p>Specialization</p>
          </div>
        </div>

      </div>

      <div className={styles.skills}>

          <h3>My Skills</h3>

          <div className={styles.skillGrid}>

            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Python</span>
            <span>Django</span>
            <span>REST APIs</span>
            <span>Git & GitHub</span>

          </div>

        </div>

    </section>
  )
}

export default About