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
        {/* FORM */}
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message" rows="6"></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* INFO */}
        <div className={styles.info}>
          <h3>Contact Info</h3>
          <p>Email: yourmail@gmail.com</p>
          <p>Phone: +234 XXX XXX XXXX</p>
          <p>Location: Abuja, Nigeria</p>

          <div className={styles.socials}>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;