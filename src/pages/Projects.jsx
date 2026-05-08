import React, { useContext } from 'react'
import styles from './Projects.module.css'
import themeStyle from '../components/Sidebar.module.css'
import { AppContext } from '../context/AppContext'

const Projects = () => {
  const { theme } = useContext(AppContext)

  return (
    <section style={{transition: '0.6s ease'}} className={`${styles.projects} ${theme == 'dark' ? themeStyle.dark : themeStyle.light}`} id="projects">

      <h2 className={styles.title}>My Projects</h2>

      <p className={styles.subtitle}>
        Here are some of the projects I’ve built while learning and improving my frontend skills.
      </p>

      <div className={styles.grid}>

        <div className={styles.card}>
          <div className={styles.image}></div>
          <h3>E-commerce UI</h3>
          <p>Modern shopping interface built with React.</p>
          <div className={styles.links}>
            <a href="#">Live</a>
            <a href="#">Code</a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.image}></div>
          <h3>Portfolio Website</h3>
          <p>Personal portfolio with React and CSS modules.</p>
          <div className={styles.links}>
            <a href="#">Live</a>
            <a href="#">Code</a>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.image}></div>
          <h3>Dashboard UI</h3>
          <p>Admin dashboard with charts and analytics layout.</p>
          <div className={styles.links}>
            <a href="#">Live</a>
            <a href="#">Code</a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Projects