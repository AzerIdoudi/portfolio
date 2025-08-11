
import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <ul className="skills-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>PHP</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Frameworks & Tools</h3>
          <ul className="skills-list">
            <li>React.js</li>
            <li>Flutter</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Deployment & Server Management</h3>
          <ul className="skills-list">
            <li>Deploying applications on cloud servers (e.g., DigitalOcean Droplets)</li>
            <li>Managing servers using Ubuntu (setup, updates, security, SSH)</li>
            <li>Configuring and pointing DNS to server IP addresses</li>
            <li>Setting up and managing web servers (Nginx, Apache)</li>
            <li>SSL certificate installation and renewal</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills