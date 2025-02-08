import React from 'react'
import "./../HealthPackage.css"
import HealthWellnessHead from './HealthWellnessHead';
import HealthWellnessMain from './HealthWellnessMain';

const HealthPackageWellness = () => {
  return (
    <div className='healthWellness'>
      <HealthWellnessHead/>
      <HealthWellnessMain/>
    </div>
  )
}

export default HealthPackageWellness
