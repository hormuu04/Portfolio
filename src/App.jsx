import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Activities from './components/Activities'
import Certificate from './components/Certificate'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  useEffect(() => {
    AOS.init({ once: true, duration: 800 })
  }, [])

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <div data-aos="fade-up"><Hero /></div>
          <div data-aos="fade-right"><About /></div>
          
          <div data-aos="fade-up"><Activities /></div>
          <div data-aos="zoom-in"><Projects /></div>
          <div data-aos="fade-up"><Certificate /></div>
        </main>
      </div>
    </Router>
  )
}

export default App 