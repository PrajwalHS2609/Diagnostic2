"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomeHeader.css";
import Link from "next/link";
import Image from "next/image";
import headerHomebanner2 from "@/Images/homeHeader/homeHeaderBanner2.png";

const HomeHeader = () => {
  const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".bookPopUp");
    if (bookPopUpElement) {
      (bookPopUpElement as HTMLElement).style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };
  const headerContent = [
    {
      id: 1,
      img:headerHomebanner2,
      head: "Clear Insights, Better Care: ",
      highlight: "Ultrasound Scan",
      para: "Experience precise and reliable imaging with our advanced ultrasound scan services for accurate diagnostics.",
    },
    {
      id: 2,
      img:headerHomebanner2,
      head: "Blood Tests at ",
      highlight: "Home",
      para: "Get accurate and reliable blood tests from the comfort of your home with expert care at your doorstep.",
    },
  ];
  return (
    <Carousel>
      {headerContent.map((x) => (
        <Carousel.Item key={x.id}>
          <div className="homeHeader-container">
            <Image src={x.img} alt={x.head} />
            <div className="homeHeader-cover">
              <div className="homeHeader-coverContent">
                <h2>
                  {x.head} <span>{x.highlight}</span>
                </h2>
                <p>{x.para}</p>
                <span>
                  <Link href="/">
                    <button className="homeheader-btn1">Contact Now</button>
                  </Link>
                  <Link href="/">
                    <button className="homeheader-btn2" onClick={handleAppointment}>Book Appointment Now</button>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeHeader;
