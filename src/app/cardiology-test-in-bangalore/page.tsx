import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import React from "react";
import cardiology1 from "@/Images/cardiology/cardiology1.png";
import cardiology2 from "@/Images/cardiology/cardiology2.png";
import cardiology3 from "@/Images/cardiology/cardiology3.png";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import CardiologyCard from "@/components/Services/Cardiology/CardiologyCard";
const page = () => {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={cardiology1.src}
        imageSrc2={cardiology2.src}
        imageSrc3={cardiology3.src}
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
