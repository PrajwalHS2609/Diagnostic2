import React from 'react'
import "./HomeWhy.css";
import HomeWhyHead from './HomeWhyHead';
import HomeWhyCard from './HomeWhyCard';

const HomeWhy = () => {
  return (
    <div className='homeWhyMain-container'>
      <div className="homeWhyMain-content">
        <HomeWhyHead/>
        <HomeWhyCard/>
      </div>
      <div className="homeWhyMain-content">
      </div>
    </div>
  )
}

export default HomeWhy
