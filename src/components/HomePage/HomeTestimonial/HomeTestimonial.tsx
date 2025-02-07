import React from 'react'
import "./HomeTestimonial.css"
import HomeTestimonialMain from './HomeTestimonialMain';
import HomeTestimonialHeader from './HomeTestimonialHeader';
const HomeTestimonial = () => {
  return (
    <div className='homeTestimonial-container'>
      <div className="homeTestimonial-content">
        <HomeTestimonialHeader/>
      </div>
      <div className="homeTestimonial-content">
        <HomeTestimonialMain/>
      </div>
    </div>
  )
}

export default HomeTestimonial
