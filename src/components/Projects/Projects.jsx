import { useState, useEffect } from 'react'
import './Projects.css'

// Import project images
import gsnLanding from '../../assets/GreatSportNutrition/gsnLandingPage.png'
import gsnAdmin from '../../assets/GreatSportNutrition/adminLandingImages.png'
import gsnShop from '../../assets/GreatSportNutrition/shopPage.png'
import instapickkLanding from '../../assets/Instapickk/LandingPage.jpg'
import instapickkProjects from '../../assets/Instapickk/projects.jpg'
import instapickkCalendar from '../../assets/Instapickk/calendar.jpg'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeProject !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeProject])

  const projects = [
    {
      id: 1,
      title: "Great Sport Nutrition",
      subtitle: "Full-Stack E-commerce Platform",
      description: "A complete management solution for GSN deployed at greatsportnutrition.com.tn. This full-stack project combines a powerful React frontend with a Node.js/Express backend and MongoDB database.",
      fullDescription: "I've built and deployed a complete management solution for GSN at greatsportnutrition.com.tn. This full-stack project combines a powerful React frontend with a Node.js/Express backend and MongoDB database.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "DigitalOcean", "Nginx", "SSL"],
      features: [
        "Responsive admin dashboard for complete business management",
        "Custom athlete partnership system with commission tracking and promo codes",
        "Product catalog with dynamic filtering and search capabilities",
        "Comprehensive order processing and inventory management",
        "Customizable landing page with dynamic content management",
        "Fully responsive design for all devices"
      ],
      images: [gsnLanding, gsnAdmin, gsnShop],
      liveUrl: "https://greatsportnutrition.com.tn",
      category: "Full-Stack Web"
    },
    {
      id: 2,
      title: "Instapickk",
      subtitle: "Project Management Web Application",
      description: "A project management web application built using the MERN stack, designed to help individuals and teams plan, track, and collaborate on projects with a clean and intuitive interface.",
      fullDescription: "Instapickk is designed to help individuals and teams plan, track, and collaborate on projects with a clean and intuitive interface. I focused on building a practical and scalable solution that supports real-world workflows.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
      features: [
        "User authentication with JWT",
        "Role-based access for project members",
        "Project and task management with deadlines and statuses",
        "Calendar view for timeline organization",
        "Task-level comments and team collaboration tools",
        "In-app notifications",
        "Activity log for full project visibility"
      ],
      images: [instapickkLanding, instapickkProjects, instapickkCalendar],
      githubUrl: "#",
      category: "Full-Stack Web"
    },
    {
      id: 3,
      title: "EazyCarpooling",
      subtitle: "Mobile Carpooling Application",
      description: "A simple carpooling mobile application that I personally designed and developed using Flutter for the front-end and Node.js for the back-end. This app aims to simplify ride-sharing and enhance commuting experiences.",
      fullDescription: "A simple carpooling mobile application that I personally designed and developed using Flutter for the front-end and Node.js for the back-end. This app aims to simplify ride-sharing and enhance commuting experiences.",
      technologies: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "Maps API"],
      features: [
        "User registration with role selection (driver or passenger)",
        "Car management for drivers",
        "Real-time location tracking",
        "Trip request system",
        "Driver discovery and car browsing for passengers",
        "Trip management and deletion",
        "Account settings and profile management"
      ],
      images: [gsnLanding], // Placeholder since video file exists
      githubUrl: "#",
      category: "Mobile App"
    }
  ]

  const categories = ["All", "Full-Stack Web", "Mobile App"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Explore my portfolio of web and mobile applications
          </p>
        </div>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.images[0]} 
                  alt={`${project.title} screenshot`}
                  className="project-img"
                />
                <div className="project-overlay">
                  <button
                    onClick={() => setActiveProject(index)}
                    className="view-details-btn"
                  >
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-more">+{project.technologies.length - 4}</span>
                  )}
                </div>
                
                <div className="project-links">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link live"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Details Modal */}
        {activeProject !== null && (
          <div className="project-modal" onClick={() => setActiveProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="close-modal"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
              >
                ×
              </button>
              
              <div className="modal-project">
                <div className="modal-images">
                  {filteredProjects[activeProject]?.images.map((img, imgIndex) => (
                    <img 
                      key={imgIndex}
                      src={img} 
                      alt={`${filteredProjects[activeProject].title} screenshot ${imgIndex + 1}`}
                      className="modal-img"
                    />
                  ))}
                </div>
                
                <div className="modal-info">
                  <h3>{filteredProjects[activeProject]?.title}</h3>
                  <p className="modal-subtitle">{filteredProjects[activeProject]?.subtitle}</p>
                  <p className="modal-description">{filteredProjects[activeProject]?.fullDescription}</p>
                  
                  <div className="modal-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {filteredProjects[activeProject]?.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="modal-tech">
                    <h4>Technologies Used:</h4>
                    <div className="tech-list">
                      {filteredProjects[activeProject]?.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="modal-links">
                    {filteredProjects[activeProject]?.liveUrl && (
                      <a 
                        href={filteredProjects[activeProject].liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        Visit Live Site
                      </a>
                    )}
                    {filteredProjects[activeProject]?.githubUrl && (
                      <a 
                        href={filteredProjects[activeProject].githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
