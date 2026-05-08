import React, { useState, useEffect, useContext } from 'react'
import styles from './Sidebar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faHouse,
  faUser,
  faCode,
  faEnvelope,
  faXmark,
  faMobileAndroid,
  faMoon,
  faToggleOff,
  faToggleOn
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'
import Logo from '../assets/hero.jpeg'
import { AppContext } from '../context/AppContext'

const Sidebar = () => {
  const { theme, setTheme } = useContext(AppContext)

  const [open, setOpen] = useState(false)

  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className={styles.menuBtn} onClick={() => setOpen(true)}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className={`${styles.sidebar} ${open ? styles.active : ''}`}>
        
        <div className={styles.closeBtn} onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </div>

        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>

        <div className={styles.themeToggle}>
          <FontAwesomeIcon onClick={() =>  setTheme(prevTheme => (prevTheme == 'light' ? 'dark' : 'light'))} icon={theme == 'dark' ? faToggleOff : faToggleOn}/>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <a
              href="#home"
              className={active === 'home' ? styles.active : ''}
            >
              <FontAwesomeIcon icon={faHouse} />
              <span>Home</span>
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={active === 'about' ? styles.active : ''}
            >
              <FontAwesomeIcon icon={faUser} />
              <span>About</span>
            </a>
          </li>

          <li>
            <a
              href="#services"
              className={active === 'services' ? styles.active : ''}
            >
              <FontAwesomeIcon icon={faMobileAndroid} />
              <span>Services</span>
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={active === 'projects' ? styles.active : ''}
            >
              <FontAwesomeIcon icon={faCode} />
              <span>Projects</span>
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={active === 'contact' ? styles.active : ''}
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Contact</span>
            </a>
          </li>
        </ul>

        <div className={styles.socials}>
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a href="#">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </div>

      </div>
    </>
  )
}

export default Sidebar