import { useState, useEffect } from 'react'
import './Projects.css'

const gsnLanding = '/assets/GreatSportNutrition/gsnLandingPage.png'
const gsnAdmin = '/assets/GreatSportNutrition/adminLandingImages.png'
const gsnAdminProduct = '/assets/GreatSportNutrition/adminProduct.png'
const gsnCheckout = '/assets/GreatSportNutrition/checkout.png'
const gsnShop = '/assets/GreatSportNutrition/shopPage.png'
const gsnShopProduct = '/assets/GreatSportNutrition/shopProduct.png'
const gsnUsersManagement = '/assets/GreatSportNutrition/usersManagement.png'

const instapickkLanding = '/assets/Instapickk/LandingPage.jpg'
const instapickkProjects = '/assets/Instapickk/projects.jpg'
const instapickkCalendar = '/assets/Instapickk/calendar.jpg'
const instapickkCreateProject = '/assets/Instapickk/createProject.jpg'
const instapickkTasksAndComments = '/assets/Instapickk/tasksAndComments.jpg'
const instapickkUserDashboard = '/assets/Instapickk/userDashboard.jpg'

const eazyVideo = '/assets/eazyCarpooling/video.mp4'

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (activeProject !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [activeProject])

  useEffect(() => {
    setCurrentImageIndex(0)
  }, [activeProject])

  const nextImage = () => {
    if (activeProject !== null && filteredProjects[activeProject]) {
      setCurrentImageIndex((prev) => 
        prev === filteredProjects[activeProject].images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (activeProject !== null && filteredProjects[activeProject]) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? filteredProjects[activeProject].images.length - 1 : prev - 1
      )
    }
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

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
      images: [gsnLanding, gsnAdmin, gsnShop, gsnAdminProduct, gsnCheckout, gsnShopProduct, gsnUsersManagement],
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
      images: [instapickkLanding, instapickkProjects, instapickkCalendar, instapickkCreateProject, instapickkTasksAndComments, instapickkUserDashboard],
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
      images: [eazyVideo],
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
                {project.images[0].endsWith('.mp4') ? (
                  <video 
                    src={project.images[0]} 
                    alt={`${project.title} demo video`}
                    className="project-img"
                    muted
                    loop
                    autoPlay
                  />
                ) : (
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} screenshot`}
                    className="project-img"
                  />
                )}
                <div className="project-overlay">
                  <div className="overlay-content">
                    <h4 className="overlay-title">{project.title}</h4>
                    <p className="overlay-subtitle">{project.subtitle}</p>
                    <button
                      onClick={() => setActiveProject(index)}
                      className="view-details-btn"
                    >
                      <span>View Details</span>
                    </button>
                  </div>
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
                  <div className="image-carousel">
                    <div className="main-image-container">
                      {/* Check if current item is a video */}
                      {filteredProjects[activeProject]?.images[currentImageIndex].endsWith('.mp4') ? (
                        <video 
                          src={filteredProjects[activeProject]?.images[currentImageIndex]} 
                          alt={`${filteredProjects[activeProject]?.title} demo video`}
                          className="modal-img main-image"
                          controls
                          autoPlay
                          muted
                          loop
                        />
                      ) : (
                        <img 
                          src={filteredProjects[activeProject]?.images[currentImageIndex]} 
                          alt={`${filteredProjects[activeProject]?.title} screenshot ${currentImageIndex + 1}`}
                          className="modal-img main-image"
                        />
                      )}
                      
                      {/* Navigation Arrows */}
                      {filteredProjects[activeProject]?.images.length > 1 && (
                        <>
                          <button 
                            className="nav-arrow nav-prev" 
                            onClick={prevImage}
                            aria-label="Previous image"
                          >
                            ‹
                          </button>
                          <button 
                            className="nav-arrow nav-next" 
                            onClick={nextImage}
                            aria-label="Next image"
                          >
                            ›
                          </button>
                        </>
                      )}
                      
                      {/* Image Counter */}
                      {filteredProjects[activeProject]?.images.length > 1 && (
                        <div className="image-counter">
                          {currentImageIndex + 1} / {filteredProjects[activeProject]?.images.length}
                        </div>
                      )}
                    </div>
                    
                    {/* Thumbnail Navigation */}
                    {filteredProjects[activeProject]?.images.length > 1 && (
                      <div className="thumbnail-nav">
                        {filteredProjects[activeProject]?.images.map((item, imgIndex) => (
                          <button
                            key={imgIndex}
                            className={`thumbnail ${imgIndex === currentImageIndex ? 'active' : ''}`}
                            onClick={() => goToImage(imgIndex)}
                          >
                            {item.endsWith('.mp4') ? (
                              <div className="video-thumbnail">
                                <video 
                                  src={item} 
                                  alt={`Video thumbnail ${imgIndex + 1}`}
                                  muted
                                />
                                <div className="play-icon">▶</div>
                              </div>
                            ) : (
                              <img 
                                src={item} 
                                alt={`Thumbnail ${imgIndex + 1}`}
                              />
                            )}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
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
