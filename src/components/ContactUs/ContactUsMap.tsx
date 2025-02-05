import React from 'react'
import "./ContactUs.css"
const ContactUsMap = () => {
  return (
    <div className='contactUsMap-container'>
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.966104073773!2d77.60987967454662!3d12.97401981482631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1686b3eabc95%3A0x10f3e5fed9a62662!2s123%2C%20Mahatma%20Gandhi%20Rd%2C%20FM%20Cariappa%20Colony%2C%20Sivanchetti%20Gardens%2C%20Bengaluru%2C%20Karnataka%20560025!5e0!3m2!1sen!2sin!4v1736420643606!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default ContactUsMap
