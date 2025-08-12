import React from 'react'
import './contact.css'
import resumePDF from '../assets/AzerIdoudi_Resume.pdf'

const Contact = () => {
  const handleResumeClick = () => {
    window.open(resumePDF, '_blank');
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">Let's connect and discuss opportunities to work together</p>
        <div className="contact-info">
          <a className="contact-link" href="mailto:azer.idoudi@yahoo.com">azer.idoudi@yahoo.com</a>
          <a className="contact-link" href="https://www.linkedin.com/in/azeridoudi" target="_blank" rel="noopener noreferrer">linkedin.com/in/azeridoudi</a>
        </div>
        <button className="resume-btn" onClick={handleResumeClick}>Resume</button>
      </div>
    </section>
  )
}

export default Contact