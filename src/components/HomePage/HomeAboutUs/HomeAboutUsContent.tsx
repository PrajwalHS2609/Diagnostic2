import React from "react";
import "./HomeAboutUs.css";
import { SlCalender } from "react-icons/sl";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

const HomeAboutUsContent = () => {
  return (
    <div className="homeAboutContent-container">
      <h6>OUR ABOUT US</h6>
      <h2>More Than 26+ Years About Provide Medical.</h2>
      <p>
        We are privileged to work with hundreds of future-thinking medial,
        including many of the world’s top hardware, software, and brands , feel
        safe and comfortable in establishing.
      </p>
      <div className="homeAboutContent-wrapper">
        <div className="homeAboutContent-content">
          <SlCalender className="homeAboutContent-Icon" />{" "}
          <h6><Link href="/">Book an Appointment</Link></h6>
        </div>
        <div className="homeAboutContent-content">
          <IoMdCall className="homeAboutContent-Icon" />
          <h6>
            <Link href="/">Contact Us</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUsContent;
