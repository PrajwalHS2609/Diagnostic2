import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import React from "react";
import ultraSound1 from "@/Images/ultrasound/ultrasound1.png";
import ultraSound2 from "@/Images/ultrasound/ultrasound2.png";
import ultraSound3 from "@/Images/ultrasound/ultrasound3.png";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import CardiologyCard from "@/components/Cardiology/CardiologyCard";
const page = () => {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={ultraSound1.src}
        imageSrc2={ultraSound2.src}
        imageSrc3={ultraSound3.src}
        alt="Cardiology  Banner"
        head=" in Bangalore"
        highlight="Cardiology Test"
        para="Creating Life's masterpiece, one kick at a time"
        bread="Cardiology "
      />
      <CardiologyCard/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial/>

      <HomeWhy />
    </div>
  );
};

export default page;
