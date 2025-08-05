import { useEffect, useRef, useState } from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'
import BackgroundWaves from './components/BackgroundWaves/BackgroundWaves'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const sectionsRef = useRef([])
  const scrollTimeoutRef = useRef(null)

  const sections = ['hero', 'about', 'education', 'projects', 'footer']

  useEffect(() => {
    let wheelTimeout = null

    const handleWheel = (e) => {
      if (isScrolling) return

      e.preventDefault()

      // Clear existing timeout
      if (wheelTimeout) {
        clearTimeout(wheelTimeout)
      }

      // Set timeout to detect end of wheel scrolling
      wheelTimeout = setTimeout(() => {
        const delta = e.deltaY
        const threshold = 50 // Minimum scroll amount to trigger section change

        if (Math.abs(delta) > threshold) {
          if (delta > 0 && currentSection < sections.length - 1) {
            // Scroll down
            scrollToSection(currentSection + 1)
          } else if (delta < 0 && currentSection > 0) {
            // Scroll up
            scrollToSection(currentSection - 1)
          }
        }
      }, 50) // Debounce wheel events
    }

    const scrollToSection = (sectionIndex) => {
      if (sectionIndex < 0 || sectionIndex >= sections.length || isScrolling) return

      setIsScrolling(true)
      setCurrentSection(sectionIndex)

      const sectionElement = document.getElementById(sections[sectionIndex])
      if (sectionElement) {
        sectionElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })

        // Reset scrolling flag after animation
        setTimeout(() => {
          setIsScrolling(false)
        }, 1000)
      }
    }

    // Add wheel event listener
    window.addEventListener('wheel', handleWheel, { passive: false })

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      if (isScrolling) return

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault()
        if (currentSection < sections.length - 1) {
          scrollToSection(currentSection + 1)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        if (currentSection > 0) {
          scrollToSection(currentSection - 1)
        }
      } else if (e.key === 'Home') {
        e.preventDefault()
        scrollToSection(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        scrollToSection(sections.length - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      if (wheelTimeout) {
        clearTimeout(wheelTimeout)
      }
    }
  }, [currentSection, isScrolling, sections.length])

  // Handle intersection observer for current section detection
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      if (isScrolling) return

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          const sectionIndex = sections.indexOf(sectionId)
          if (sectionIndex !== -1 && sectionIndex !== currentSection) {
            setCurrentSection(sectionIndex)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [isScrolling, currentSection, sections])

  return (
    <div className="App">
      <BackgroundWaves />
      
      {/* Section Navigation Indicator */}
      <div className="section-indicator">
        {sections.map((section, index) => (
          <div
            key={section}
            className={`indicator-dot ${index === currentSection ? 'active' : ''}`}
            onClick={() => {
              if (!isScrolling) {
                const sectionElement = document.getElementById(section)
                if (sectionElement) {
                  setIsScrolling(true)
                  setCurrentSection(index)
                  sectionElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  })
                  setTimeout(() => setIsScrolling(false), 1000)
                }
              }
            }}
            title={section.charAt(0).toUpperCase() + section.slice(1)}
          />
        ))}
      </div>

      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default App
