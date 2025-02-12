import React from "react";
import "./ConsultationHeader.css";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  imageSrc: string;
  alt: string;
  title: string;
  highlight: string;
  para: string;
  bread: string;
}
const ConsultationHeader = ({
  imageSrc,
  alt,
  title,
  highlight,
  para,
  bread,
}: HeaderProps) => {

//   const handleAppointment = () => {
//     const bookPopUpElement = document.querySelector(".bookPopUp");
//     if (bookPopUpElement) {
//       (bookPopUpElement as HTMLElement).style.visibility = "visible";
//     } else {
//       console.warn("Element with class 'bookPopUp' not found");
//     }
//   };
  return (
    <div className="consultation-headerContainer">
      <Image src={imageSrc} alt={alt} width={1000} height={1000}/>
      <div className="consultation-headerContents">
        <h2><span>{highlight}</span>{title}</h2>
        <p>{para}</p>
        <span>
          <Link href="/contact-us">
            <button className="headerComponent-btn1">Contact Now</button>
          </Link>
          <Link href="">
            <button
              className="headerComponent-btn2"
            //   onClick={handleAppointment}
            >
              Book Appointment Now
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ConsultationHeader;
