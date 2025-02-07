import React from "react";
import "./HomeTestimonial.css";
import Image from "next/image";
import logo from "@/Images/logo.png";
const HomeTestimonialHeader = () => {
  return (
    <div className="homeTestimonialHeader-container">
      <span>
        <h2>Client Testimonial: </h2>
        <p>Hear From Our Happy Clients</p>
      </span>
      <div className="homeTestimonialHeader-logo">
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default HomeTestimonialHeader;
