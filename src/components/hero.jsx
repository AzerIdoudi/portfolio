import React from 'react'
import profileImage from "../assets/profile.jpg"
import './hero.css'

const Hero = () => {
  return (
    <>
        <section>
            <div className="content">
                <div>
                    <img src={profileImage} alt="Profile" />
                </div>
                <div>
                    <h1>Hello, I'm <span className='name'>Azer Idoudi</span></h1>
                    <p>
                    Software Engineer with expertise in the MERN stack for building scalable, and dynamic web applications, and in Flutter for developing high-quality, cross-platform mobile applications. With a strong foundation in modern software development practices, I excel at designing, implementing, and optimizing solutions that deliver exceptional user experiences.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero