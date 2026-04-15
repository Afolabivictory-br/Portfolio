import React from "react";
import styles from "./Blog.module.css";

const blogs = [
  {
    id: 1,
    title: "How I Became a Full-Stack Developer",
    excerpt:
      "My journey from Political Science to software engineering and how I transitioned into tech.",
    date: "April 2026",
  },
  {
    id: 2,
    title: "React Tips Every Beginner Should Know",
    excerpt:
      "Important React concepts like components, props, state, and hooks simplified.",
    date: "March 2026",
  },
  {
    id: 3,
    title: "How to Build Responsive Websites",
    excerpt:
      "A guide to media queries, flexbox, grid, and mobile-first design.",
    date: "February 2026",
  },
  {
    id: 4,
    title: "Backend Basics with Node.js",
    excerpt:
      "Understanding APIs, Express, and how backend systems work.",
    date: "January 2026",
  },
];

const Blog = () => {
  return (
    <section className={styles.blog} id="blog">
      <h1 className={styles.title}>My Blog</h1>

      <div className={styles.grid}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <p className={styles.date}>{blog.date}</p>
            <h3 className={styles.blogTitle}>{blog.title}</h3>
            <p className={styles.excerpt}>{blog.excerpt}</p>
            <button className={styles.button}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;