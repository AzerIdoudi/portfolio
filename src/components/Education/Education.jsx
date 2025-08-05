import './Education.css'

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-year">October 2024 - Present</div>
            <div className="education-content">
              <h3 className="degree-title">Software Engineering Degree</h3>
              <h4 className="institution">TEK-UP Private College of Engineering and Technology</h4>
              <p className="location">Tunis, Tunisia</p>
              
            </div>
          </div>
          
          <div className="education-item">
            <div className="education-year">September 2020 - January 2024</div>
            <div className="education-content">
              <h3 className="degree-title">Bachelor of Science in Software Engineering</h3>
              <h4 className="institution">Higher Institute of Applied Sciences and Technology of Kasserine</h4>
              <p className="location">Kasserine, Tunisia</p>
              
            </div>
          </div>

          <div className="education-item">
            <div className="education-year">September 2019 - June 2020</div>
            <div className="education-content">
              <h3 className="degree-title">High School Diploma in Computer Science</h3>
              <h4 className="institution">Abou Kacem Chebbi Kasserine High School</h4>
              <p className="location">Kasserine, Tunisia</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
