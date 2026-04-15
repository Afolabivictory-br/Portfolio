import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <h1 className={styles.title}>Get In Touch</h1>
      <p className={styles.subtitle}>
        Have a project or opportunity? Let’s build something amazing together.
      </p>

      <div className={styles.container}>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="6"></textarea>

          <button type="submit">Send Message</button>
        </form>

        <div className={styles.info}>
          <h3>Contact Info</h3>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayomideafolabi1024@gmail.com" target="_blank" rel="noopener noreferrer">
            Send me an email
          </a>
          <p>Phone: +234 802 667 2774</p>
          <p>Location: Abuja, Nigeria</p>

          <div className={styles.socials}>
            <a href="https://github.com/Afolabivictory-br" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/afolabi-victory-998b65345/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://wa.me/+2348026672774" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;