import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Loader from './assets/logo.png'

const App = () => {
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    setTimeout(() =>{
      setLoader(false)
    }, 3000)
  })

  if (loader) {
    return(
      <div className='Loader'>
        <img src={Loader} alt="" />
      </div>
    )
  }
  
  return (
    <div>
      <Sidebar />
      <div className='mainContent'>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App