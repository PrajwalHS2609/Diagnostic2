import React from 'react'
import "./Footer.css";
import FooterAddress from './FooterAddress';
import FooterLinks from './FooterLinks';
import FooterService from './FooterService';
import FooterPost from './FooterPost';

const TopFooter = () => {
  return (
    <div className='topFooter-container'>
      <FooterAddress/>
      <FooterLinks/>
      <FooterService/>
      <FooterPost/>
    </div>
  )
}

export default TopFooter
