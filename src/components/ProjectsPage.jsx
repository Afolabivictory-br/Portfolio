import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './ProjectsPage.module.css'; // Adjust path

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A portfolio website built with React, showcasing my skills and projects.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhOHbQKqZUEvHHRhOjtwAr2jHURO1SeJ8Jg&s',
    link: 'https://your-portfolio.com',
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'An online store built with React, Redux, and Stripe for payments.',
    image: 'https://pngimg.com/uploads/number2/Number%202%20PNG%20images%20free%20download_PNG14925.png',
    link: 'https://your-ecommerce.com',
  },
];

const ProjectsPage = () => {
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

export default ProjectsPage;