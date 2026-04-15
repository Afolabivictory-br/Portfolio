import React from "react";
import styles from "./Services.module.css";

const services = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "I build responsive and interactive user interfaces using React, HTML, CSS, and modern JavaScript.",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "I create secure and scalable backend systems using Python, Django, and databases like MongoDB and PostgreSQL.",
  },
  {
    id: 3,
    title: "Full-Stack Web Apps",
    description:
      "I develop complete web applications from frontend to backend with clean architecture and performance in mind.",
  },
  {
    id: 4,
    title: "API Development",
    description:
      "I design and build REST APIs that are fast, secure, and easy to integrate.",
  },
  {
    id: 5,
    title: "Website Optimization",
    description:
      "I improve website speed, SEO, and overall performance for better user experience.",
  },
  {
    id: 6,
    title: "UI Implementation",
    description:
      "I convert Figma or UI designs into pixel-perfect, responsive websites.",
  },
];

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <h1 className={styles.title}>My Services</h1>

      <div className={styles.grid}>
        {services.map((service) => (
          <div key={service.id} className={styles.card}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;