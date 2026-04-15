import React from 'react';
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      <img src={project.image} alt={project.title} className={styles.image} />
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;