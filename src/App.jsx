import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Projects from './pages/Projects';

const App = () => {
  return (
    <div>
        <NavBar />
        <Home />
        <About />
        <Services />
        <Projects />
        <Blog />
        <Contact />
        <Footer />
    </div>
  )
}

export default App