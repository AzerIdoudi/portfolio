import React from 'react'
import './projects.css'
import gsn from '../assets/gsn.jpg'
import insta from '../assets/insta.jpg'
import eez from '../assets/eez.png'

const projectData = [
  {
    title: 'Great Sport Nutrition',
    subtitle: 'Full-stack eCommerce Platform',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    description: 'A comprehensive e-commerce platform for sport nutrition products with admin dashboard, payment processing, and inventory management.',
    duration: '3 months',
    status: 'Live',
    image: gsn,
  },
  {
    title: 'Instapickk',
    subtitle: 'Project Management Platform',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    description: 'A collaborative project management platform featuring real-time notifications, team invitations, task tracking, and comment systems.',
    duration: '2 months',
    status: 'Beta',
    image: insta,
  },
  {
    title: 'Eezy Carpooling',
    subtitle: 'Mobile Carpooling App',
    technologies: ['Flutter', 'Express', 'Node.js'],
    description: 'A mobile application connecting car owners and passengers for efficient carpooling with ride posting and request management.',
    duration: '4 months',
    status: 'Development',
    image: eez,
  }
];

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p className="projects-subtitle">
            Explore my latest work in full-stack development, showcasing modern web technologies and innovative solutions.
          </p>
        </div>
        
        <div className="projects-grid">
          {projectData.map((project, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-card-header">
                <img 
                  src={project.image}
                  alt={project.title + ' screenshot'}
                  className="project-header-image"
                />
              </div>
              
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-meta">
                  <div className="meta-item">
                    <div className="meta-label">Duration</div>
                    <div className="meta-value">{project.duration}</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-label">Status</div>
                    <div className="meta-value">{project.status}</div>
                  </div>
                </div>
                
                <div className="project-tech-stack">
                  <div className="tech-stack-title">Tech Stack</div>
                  <div className="tech-badges">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-actions">
                  {project.title === 'Great Sport Nutrition' ? (
                    <a
                      className="project-btn"
                      href="https://greatsportnutrition.com.tn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Project →
                    </a>
                  ) : project.title === 'Instapickk' ? (
                    <a
                      className="project-btn"
                      href="https://www.linkedin.com/posts/azeridoudi_excited-to-share-instapickk-a-project-management-activity-7356210163357249536-qTVi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADSsxbEByW1B6L95DhB9A8o8D4cyxAG8FnA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project Demo →
                    </a>
                  ) : project.title === 'Eezy Carpooling' ? (
                    <a
                      className="project-btn"
                      href="https://www.linkedin.com/posts/azeridoudi_i-am-excited-to-introduce-a-simple-carpooling-activity-7181977668416925696-YV8j?utm_source=share&utm_medium=member_desktop&rcm=ACoAADSsxbEByW1B6L95DhB9A8o8D4cyxAG8FnA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project Details →
                    </a>
                  ) : (
                    <button className="project-btn">View Project →</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects