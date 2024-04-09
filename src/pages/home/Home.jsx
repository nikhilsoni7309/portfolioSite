import React from 'react'
import Profile from "../../assets/profile-img.webp"
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>Hi! I'm Nikhil Soni.</span> Web developer
          </h1>

          <p className="home__description">
            I'm an Indian web developer proficient in both front-end and back-end technologies, 
            with a primary focus on front-end development. Committed to creating visually 
            appealing and user-friendly interfaces that elevates online experience and drive business growth.
          </p>

          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block">
        
      </div>
    </section>
  )
}

export default Home
