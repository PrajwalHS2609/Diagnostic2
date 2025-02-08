"use client";
import "./HomeAboutUs.css";
import { SlCalender } from "react-icons/sl";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";

const HomeAboutUsContent = () => {
  const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".bookPopUp");
    if (bookPopUpElement) {
      (bookPopUpElement as HTMLElement).style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };
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
          <h6 onClick={handleAppointment}>
            <Link href="/">Book an Appointment</Link>
          </h6>
        </div>
        <div className="homeAboutContent-content">
          <IoMdCall className="homeAboutContent-Icon" />
          <h6>
            <Link href="/contact-us">Contact Us</Link>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUsContent;
