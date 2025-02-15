"use client";
import React from "react";
import "./HomeTestimonial.css";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import Img1 from "@/Images/Testimonial/Mohit Sharma.png";
import Img2 from "@/Images/Testimonial/Anjali.png";
import Img3 from "@/Images/Testimonial/Vikram Reddy.jpg";

const HomeTestimonialMain = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const testimonial = [
    {
      id: 1,
      name: "Mohit Sharma",
      img: Img1,
      para: "Excellent experience at Diagnostics Center! Professional staff, smooth process, and a hygienic facility made me feel comfortable. Highly recommend for reliable and accurate tests.",
    },
    {
      id: 2,
      name: "Anjali Menon",
      img: Img2,
      para: "Diagnostics Center provided exceptional service! Skilled technicians handled my tests with care, reports were timely, and the doctor gave a detailed explanation. Grateful for the staff's dedication to a seamless experience. Highly recommended",
    },
    {
      id: 3,
      name: "Vikram Reddy",
      img: Img3,
      para: "Highly satisfied with  Diagnostics! The home sample collection was convenient, timely, and safe. Accurate reports, prompt service, and a professional staff made the process stress-free. Definitely recommend!",
    },
  ];
  return (
    <div className="homeTestimonialMain-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {testimonial.map((x) => (
          <Carousel.Item key={x.id}>
            <div className="homeTestimonialMain-content">
              <div className="homeTestimonialMain-wrapper">
                <div className="homeTestimonialMain-imgContainer">
                  <Image src={x.img} alt={x.name} />
                </div>
                <div className="homeTestimonialMain-textContainer">
                  <div className="homeTestimonialMain-textContent">
                    <ImQuotesLeft />
                  </div>
                  <div className="homeTestimonialMain-textContent">
                    <h5>{x.name}</h5>
                  </div>
                  <div className="homeTestimonialMain-textContent">
                    <p>{x.para}</p>
                  </div>
                  <div className="homeTestimonialMain-textContent">
                    <ImQuotesRight />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeTestimonialMain;
