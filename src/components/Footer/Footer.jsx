import { useState, useEffect } from 'react'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Get current visitor count from localStorage
    const currentCount = localStorage.getItem('visitorCount')
    const lastVisit = localStorage.getItem('lastVisit')
    const today = new Date().toDateString()

    if (!currentCount) {
      // First time visitor
      localStorage.setItem('visitorCount', '1')
      localStorage.setItem('lastVisit', today)
      setVisitorCount(1)
    } else {
      if (lastVisit !== today) {
        // New day, increment counter
        const newCount = parseInt(currentCount) + 1
        localStorage.setItem('visitorCount', newCount.toString())
        localStorage.setItem('lastVisit', today)
        setVisitorCount(newCount)
      } else {
        // Same day, use existing count
        setVisitorCount(parseInt(currentCount))
      }
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-links">
              <a
                href="mailto:azeridoudi@yahoo.com"
                className="contact-link"
              >
                📧 azeridoudi@yahoo.com
              </a>
              <a
                href="https://www.linkedin.com/in/azeridoudi/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                💼 LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Availability</h4>
            <div className="availability-badge">
              <span className="status-indicator">🟢</span>
              <span className="status-text">Available for Full-Time Positions</span>
            </div>
          </div>

          <div className="footer-section">
            <h4>Programming Languages & Technologies</h4>
            <div className="tech-stack">
              <span className="tech-item">JavaScript</span>
              <span className="tech-item">Java</span>
              <span className="tech-item">Python</span>
              <span className="tech-item">C</span>
              <span className="tech-item">Dart</span>
              <span className="tech-item">React</span>
              <span className="tech-item">Node.js</span>
              <span className="tech-item">Flutter</span>
              <span className="tech-item">MongoDB</span>
              <span className="tech-item">Express.js</span>
              <span className="tech-item">MySQL</span>
              <span className="tech-item">Git</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="counter-display">
              <span className="counter-icon">👥</span>
              <span className="counter-text">Visitors: </span>
              <span className="counter-number">{visitorCount.toLocaleString()}</span>
            </div>
            
            <p>&copy; {currentYear} Azer Idoudi. All rights reserved.</p>
            
            <button 
              onClick={handleScrollToTop}
              className="back-to-top"
              aria-label="Back to top"
            >
              ↑ Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
