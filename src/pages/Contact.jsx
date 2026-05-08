import React, { useContext } from 'react'
import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../context/AppContext'
import themeStyle from '../components/Sidebar.module.css'

const Contact = () => {
  const { theme } = useContext(AppContext)

  return (
    <section style={{transition: '0.6s ease'}} className={`${styles.contact} ${theme == 'dark' ? themeStyle.dark : themeStyle.light}`} id="contact">

      <h2 className={styles.title}>Contact Me</h2>

      <p className={styles.subtitle}>
        Got a project or opportunity? Feel free to reach out.
      </p>

      <div className={styles.container}>

        {/* LEFT INFO */}
        <div className={styles.info}>

          <div className={styles.box}>
            <FontAwesomeIcon icon={faEnvelope} />
            <div>
              <h4>Email</h4>
              <p>ayomideafolabi1024@gmail.com</p>
            </div>
          </div>

          <div className={styles.box}>
            <FontAwesomeIcon icon={faPhone} />
            <div>
              <h4>Phone</h4>
              <p>+234 816 489 0146</p>
            </div>
          </div>

        </div>

        {/* FORM */}
        <form className={styles.form}>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="6"></textarea>

          <button>Send Message</button>

        </form>

      </div>

    </section>
  )
}

export default Contact