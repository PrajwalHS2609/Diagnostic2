import React from 'react'
import HomeDoctorHead from './HomeDoctorHead'
import HomeDoctorCard from './HomeDoctorCard'
import "./HomeDoctor.css"

const HomeDoctor = () => {
  return (
    <div className='homeDoctor-container'>
      <HomeDoctorHead/>
      <HomeDoctorCard/>
    </div>
  )
}

export default HomeDoctor
