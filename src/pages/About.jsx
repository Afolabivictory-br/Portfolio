import React from 'react'
import styles from './About.module.css'
import AboutImg from '../assets/about.jpeg'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <p className={styles.aboutLabel}>About me</p>
    <div className={styles.aboutWrap}>
      <div className={styles.aboutText}>
          <p className={styles.aboutBody}>
            I am Afolabi Victory, a passionate Full-Stack Web Developer based in Nigeria, with a background in Political Science from Prince Abubakar Audu University, Kogi State.
            My journey into tech began during my time in university, where I developed a strong interest in building digital solutions and understanding how systems work. That curiosity led me into web development, where I discovered my passion for creating responsive, user-friendly, and functional web applications.
            <br />
            I specialize in modern web technologies such as React, JavaScript, and backend development, focusing on building scalable and efficient digital solutions. I enjoy turning ideas into real-world products, with a strong emphasis on performance, design, and user experience.
            <br />
            Beyond coding, I am constantly learning and improving my skills. I spend time exploring new technologies, building personal projects, and solving real-world problems through code.
            <br />
            Currently, I am focused on growing as a developer, building impactful projects, and creating solutions that provide real value to users and businesses. My goal is not just to write code, but to build products that make a meaningful difference.
        </p>
      </div>
      <div className={styles.aboutImg}>
          <img src={AboutImg} alt="" />
      </div>
    </div>
  <div>
    <p className={styles.aboutLabel}>Tech stack</p>
    <div className={styles.skillsGrid}>
      <div className={styles.skillTag}>React</div>
      <div className={styles.skillTag}>Bootstrap</div>
      <div className={styles.skillTag}>Tailwind CSS</div>
      <div className={styles.skillTag}>JavaScript</div>
      <div className={styles.skillTag}>Responsive Design</div>
      <div className={styles.skillTag}>Figma</div>
      <div className={styles.skillTag}>AWS / Vercel</div>
      <div className={styles.skillTag}>REST APIs</div>
      <div className={styles.skillTag}>Python</div>
      <div className={styles.skillTag}>Django</div>
    </div>
  </div>
</section>
  )
}

export default About
