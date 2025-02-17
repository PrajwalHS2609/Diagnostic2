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
import CardiologyContentHeader from "@/components/Consultation/CardiologyConsultation/CardiologyContentHeader";
import CardiologyContentFooter from "@/components/Consultation/CardiologyConsultation/CardiologyContentFooter";

export const metadata = {
  title: "Cardiology Services in Bangalore | Diabetologist near Me",
  description:
  "Cardiology Services in Bangalore is a crucial role in diagnosing and treating various conditions related to the female reproductive system. ",
  canonical: "https://diagnosticscenter.co.in/cardiology-test-in-bangalore",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
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
      <CardiologyContentHeader/>
      <CardiologyCard/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial/>
      <HomeWhy />
      <CardiologyContentFooter/>
    </div>
  );
};

export default page;
