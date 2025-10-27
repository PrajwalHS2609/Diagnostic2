import React from 'react'
import "./HealthPackage.css"
import Image from 'next/image'
import healthyPackage from "@/Images/package.jpg"
const HealthPackageHeader = () => {
  return (
    <div className='healthPackageHeader'>
      <Image src={healthyPackage} alt="package" />
    </div>
  )
}

export default HealthPackageHeader
