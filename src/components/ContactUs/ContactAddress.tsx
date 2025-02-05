import React from "react";
import "./ContactUs.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Image from "next/image";
import logo from "@/Images/logo.png";
import contactUsDoc from "@/Images/ContactUs/contactUsAddress.jpg";

const ContactUsAddress = () => {
  return (
    <div className="contactUsAddress-container">
        <div className="contactUsAddress-logo">
            <Image src={logo} alt="logo" />
        </div>
      <div className="contactUsAddress-imgContainer">
        <Image src={contactUsDoc} alt="contactUsDoc" />
      </div>
      <div className="contactUsAddress-content">
        <ul>
          <div className="contactUsAddress-Item">
            <FaLocationDot className="contactUsAddress-ico" />
            <a href="">
              {" "}
              2nd Floor, JK Plaza, 788, 12th Main Rd, HAL 2nd Stage,
              Indiranagar, Bengaluru, Karnataka 560038, India
            </a>
          </div>
          <div className="contactUsAddress-Item">
            <FaPhoneAlt className="contactUsAddress-ico" />
            <a href="tel:9876543210">+91 9876543210</a>
          </div>
          <div className="contactUsAddress-Item">
            <FaEnvelopeOpenText className="contactUsAddress-ico" />
            <a href="mailto:info@xyz.com">info@xyz.com</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default ContactUsAddress;
