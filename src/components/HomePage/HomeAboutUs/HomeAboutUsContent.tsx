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
      <h2>Celebrating Over 26 Years of Diagnostic Excellence. </h2>
      <p>
        We are honored to collaborate with numerous forward-thinking medical
        professionals and esteemed global brands in hardware and software. These
        partnerships enable us to provide a safe and comfortable environment for
        our patients, ensuring the highest standards of diagnostic care.
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
