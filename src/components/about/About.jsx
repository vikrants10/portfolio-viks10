import React from 'react'
import './about.css'
import ME from  '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa6'
import {FaUsers} from 'react-icons/fa'
import {HiLightBulb} from 'react-icons/hi'
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Ima" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Worked on 5+ project</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon'/>
              <h5>Certifications</h5>
              <small>“Web Development” from masai</small>
            </article>
            <article className="about__card">
              <HiLightBulb className='about__icon'/>
              <h5>Awards</h5>
              <small>Participate In Regional Sports Meet in Badminton Two Times.</small>
            </article>
          </div>
          <p>
          Hello, I am Vikrant Kumar Singh,
          Currently pursuing my MSC in Computer Science from Kalinga University, I am a hardworking individual looking for a challenging position 
          where I can showcase my skills and contribute to the growth of the organization.
          </p>
          <a href="#contact" className='btn btn-primary'> Lets Talk </a>
        </div>
      </div>
    </section>
  )
}

export default about