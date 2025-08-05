import './About.css'

const About = () => {
  const skills = [
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'JavaScript' },
    { name: 'Flutter' },
    { name: 'MongoDB' },
    { name: 'Express.js' },
    { name: 'HTML/CSS' },
    { name: 'Git' }
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better and my technical expertise
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="text-block">
              <h3>About me</h3>
              <p>
                I am a dedicated Software Engineering student with comprehensive expertise in full-stack web development 
                and cross-platform mobile applications. My technical proficiency spans the MERN stack (MongoDB, Express.js, 
                React, Node.js) and Flutter, enabling me to deliver end-to-end solutions from conceptualization through 
                deployment. I am passionate about solving complex technical challenges, writing clean and efficient code, 
                and staying current with emerging technologies and industry best practices.
              </p>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong> azeridoudi@yahoo.com
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong> 
                <a 
                  href="https://www.linkedin.com/in/azeridoudi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  linkedin.com/in/azeridoudi
                </a>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
