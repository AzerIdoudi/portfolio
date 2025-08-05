const profileImage = '/assets/AzerIdoudiImage.jpg'
import './Hero.css'

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image">
            <img 
              src={profileImage} 
              alt="Azer Idoudi - Software Engineering Student"
              className="profile-image"
            />
            <div className="image-glow"></div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Azer Idoudi</span>
            </h1>
            <h2 className="hero-subtitle">
              Software Engineering Student
            </h2>
            <p className="hero-description">
              Specialized in web and mobile development with expertise in the MERN stack and Flutter. 
              Passionate about creating innovative solutions and bringing ideas to life through code.
            </p>
            
            <div className="hero-cta">
              <button 
                onClick={handleProjectsClick}
                className="cta-button primary"
                aria-label="View my projects"
              >
                View My Work
              </button>
              
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  )
}

export default Hero
