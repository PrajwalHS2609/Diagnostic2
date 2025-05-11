"use client";
import React from "react";
import "./HeaderComponent.css";
import { MdOutlineDoubleArrow } from "react-icons/md";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import Image from "next/image";

interface HeaderProps {
  imageSrc1: string;
  imageSrc2: string;
  imageSrc3: string;
  alt: string;
  head: string;
  highlight: string;
  para: string;
  bread: string;
}
const HeaderComponent = ({
  imageSrc1,
  imageSrc2,
  imageSrc3,
  alt,
  head,
  highlight,
  para,
  bread,
}: HeaderProps) => {
  const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".bookPopUp");
    if (bookPopUpElement) {
      (bookPopUpElement as HTMLElement).style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };

  return (
    <div className="headerComponent-container">
      <div className="headerComponent-imgContainer">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={false}
          loop={true}
          speed={2000}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCube, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="mySwiper-img">
            <Image src={imageSrc1} alt={alt} width={1000} height={1000} />
          </SwiperSlide>
          <SwiperSlide className="mySwiper-img">
            <Image src={imageSrc2} alt={alt} width={1000} height={1000} />
          </SwiperSlide>
          <SwiperSlide className="mySwiper-img">
            <Image src={imageSrc3} alt={alt} width={1000} height={1000} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="headerComponent-cover">
        <div className="headerComponent-coverContent">
          <h2>
            <span>{highlight}</span> {head}
          </h2>
          <p>{para}</p>
          <span>
            <Link href="/contact-us">
              <button className="headerComponent-btn1">Contact Now</button>
            </Link>
            <Link href="">
              <button className="headerComponent-btn2" onClick={handleAppointment}>
                Book Appointment Now
              </button>
            </Link>
          </span>
        </div>
        <span>
          <h5>
            <Link href="/">Home</Link>
          </h5>
          <h5>
            <MdOutlineDoubleArrow />
          </h5>
          <h5>{bread}</h5>
        </span>
      </div>
    </div>
  );
};

export default HeaderComponent;
