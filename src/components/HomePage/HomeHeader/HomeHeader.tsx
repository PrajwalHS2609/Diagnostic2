"use client";
import React from "react";
import "./HomeHeader.css";
import Link from "next/link";
// import homeHeaderVid1 from "@/Videos/HomeHeader1.mp4";
const HomeHeader = () => {
  const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".bookPopUp");
    if (bookPopUpElement) {
      (bookPopUpElement as HTMLElement).style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };

  return (
    <div className="homeHeader-container">
      <video className="homeHeader-video" autoPlay loop muted playsInline>
        <source src="/videos/HomeHeader1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>{" "}
      <div className="homeHeader-cover">
        <div className="homeHeader-coverContent">
          <h2>
            Clear Insights, Better Care:<span>Ultrasound Scan</span>
          </h2>
          <p>
            Experience precise and reliable imaging with our advanced ultrasound
            scan services for accurate diagnostics.
          </p>
          <span>
            <Link href="/contact-us">
              <button className="homeheader-btn1">Contact Now</button>
            </Link>
            <Link href="/">
              <button className="homeheader-btn2" onClick={handleAppointment}>
                Book Appointment Now
              </button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
