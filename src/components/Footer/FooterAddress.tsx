import React from "react";
import "./Footer.css";
import Image from "next/image";
import logo from "@/Images/logoWhite.png";
import { FaRegClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa";

const FooterAddress = () => {
  const socialIcon = [
    { id: 1, icon: <FaInstagram />, link: "/" },
    { id: 2, icon: <FaFacebookF />, link: "/" },
    { id: 3, icon: <FaYoutube />, link: "/" },
    { id: 4, icon: <BsTwitterX />, link: "/" },
  ];
  return (
    <div className="footerAddress-container">
      <span>
        <Image src={logo} alt="logo" />
      </span>
      <div className="footerAddress-content">
        <FaRegClock className="footerAddress-ico" />
        Mon - Fri: 8.00 am. - 6.00 pm.
      </div>
      <div className="footerAddress-content">
        <FaLocationDot className="footerAddress-ico" />
        <a href="">
          {" "}
          2nd Floor, JK Plaza, 788, 12th Main Rd, HAL 2nd Stage, Indiranagar,
          Bengaluru, Karnataka 560038, India
        </a>
      </div>
      <div className="footerAddress-content">
        <FaPhoneAlt className="footerAddress-ico" />
        <a href="tel:9876543210">+91 9876543210</a>
      </div>
      <div className="footerAddress-content">
        <FaEnvelopeOpenText className="footerAddress-ico" />
        <a href="mailto:info@xyz.com">info@xyz.com</a>
      </div>
      <div className="footerAddress-socialContainer">
        {socialIcon.map((x) => (
          <span key={x.id}>
            <a href={x.link}>{x.icon}</a>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FooterAddress;
