import React from 'react';
import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-left">
        <h3 className="footer-name">Azeri Doudi</h3>
        <p className="footer-title">Full Stack Developer</p>
      </div>
      
      <div className="footer-center">
        <div className="availability-status">
          <div className="status-indicator"></div>
          <span className="status-text">Available for full-time positions</span>
        </div>
      </div>
      
      <div className="footer-right">
        <div className="skills-container">
          <span className="skills-label">Tech Stack:</span>
          <div className="skills-list">
            <span className="skill-item">React</span>
            <span className="skill-item">Node.js</span>
            <span className="skill-item">MongoDB</span>
            <span className="skill-item">Express</span>
            <span className="skill-item">Flutter</span>
            <span className="skill-item">TypeScript</span>
            <span className="skill-item">JavaScript</span>
            <span className="skill-item">Git</span>
            <span className="skill-item">Python</span>
            <span className="skill-item">Java</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="footer-bottom">
      <span className="copyright">"Education is the most powerful weapon which you can use to change the world." — Nelson Mandela.</span>
    </div>
  </footer>
);

export default Footer;
