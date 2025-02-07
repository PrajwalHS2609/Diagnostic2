"use client";
import React from "react";
import "./HomeTestimonial.css";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const HomeTestimonialMain = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };
  const testimonial = [
    {
      id: 1,
      name: "Keton",
      para: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rem sapiente temporibus sit incidunt iure assumenda officia, illum quod itaque pariatur perferendis reprehenderit labore? Quia ipsam commodi vitae iure voluptas.",
    },
    {
      id: 2,
      name: "Smith",
      para: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rem sapiente temporibus sit incidunt iure assumenda officia, illum quod itaque pariatur perferendis reprehenderit labore? Quia ipsam commodi vitae iure voluptas.",
    },
    {
      id: 3,
      name: "Jane Doe",
      para: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam rem sapiente temporibus sit incidunt iure assumenda officia, illum quod itaque pariatur perferendis reprehenderit labore? Quia ipsam commodi vitae iure voluptas.",
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
                  <img
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1738844775~exp=1738848375~hmac=11afe7f5c834b7b4c107dd98cecca9e42df8a67791c7ad30034c18b0937be690&w=996"
                    alt=""
                  />
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
