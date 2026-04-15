import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';
import ProjectOne from '../assets/projectone.png'
import ProjectTwo from '../assets/projecttwo.png'
import ProjectThree from '../assets/projectthree.png'

const projects = [
  {
    id: 1,
    title: 'Skin Care App',
    description: 'A simple web app, built with HTML, CSS and JavaScript',
    image: `${ProjectOne}`,
    link: 'https://your-portfolio.co',
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'An online store built with React, Redux, and Stripe for payments.',
    image: `${ProjectTwo}`,
    link: 'https://your-ecommerce.co',
  },
  {
    id: 3,
    title: 'Travel Website',
    description: 'An Website built with HTML and CSS.',
    image:`${ProjectThree}` ,
    link: 'https://your-ecommerce.co',
  },
];

const Projects = () => {
  return (
    <section className={styles.projects} id='projects'>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;