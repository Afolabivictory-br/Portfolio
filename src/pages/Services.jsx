import React, { useContext } from 'react'
import styles from './Services.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faDatabase,
  faLaptopCode,
  faServer
} from '@fortawesome/free-solid-svg-icons'
import themeStyle from '../components/Sidebar.module.css'
import { AppContext } from '../context/AppContext'

const Services = () => {
  const { theme } = useContext(AppContext)

  return (
    <section style={{transition: '0.6s ease'}} className={`${styles.services} ${theme == 'dark' ? themeStyle.dark : themeStyle.light}`} id="services">

      <h2 className={styles.title}>My Services</h2>

      <p className={styles.subtitle}>
        I build complete digital solutions — from frontend interfaces to backend systems.
      </p>

      <div className={styles.grid}>

        <div className={styles.card}>
          <FontAwesomeIcon icon={faLaptopCode} />
          <h3>Frontend Development</h3>
          <p>
            I build modern, responsive and interactive user interfaces using React, HTML and CSS.
          </p>
        </div>

        <div className={styles.card}>
          <FontAwesomeIcon icon={faServer} />
          <h3>Backend Development</h3>
          <p>
            I create scalable backend systems using Python and Django with secure APIs and authentication.
          </p>
        </div>

        <div className={styles.card}>
          <FontAwesomeIcon icon={faDatabase} />
          <h3>Database Design</h3>
          <p>
            I design and manage databases for efficient data storage and smooth application performance.
          </p>
        </div>

        <div className={styles.card}>
          <FontAwesomeIcon icon={faCode} />
          <h3>Full-Stack Solutions</h3>
          <p>
            I combine frontend and backend to build complete web applications from start to finish.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Services