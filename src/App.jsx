import { useState } from 'react'
import './App.css'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
