import React from 'react'
import NavBar from './components/NavBar'
import Home from './sections/Home'
import About from './sections/About'
import Services from './sections/Services'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import ProjectsPage from './components/ProjectsPage';

const App = () => {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Services />
        <ProjectsPage />
        <Blog />
        <Contact />
        <Footer />
    </div>
  )
}

export default App