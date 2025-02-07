import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import ultraSound1 from "@/Images/ultrasound/ultrasound1.png";
import ultraSound2 from "@/Images/ultrasound/ultrasound2.png";
import ultraSound3 from "@/Images/ultrasound/ultrasound3.png";
export default function Radiological() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={ultraSound1.src}
        imageSrc2={ultraSound2.src}
        imageSrc3={ultraSound3.src}
        alt="Radiological Banner"
        head=" Services in Bangalore "
        highlight="Radiological"
        para="Creating Life's masterpiece, one kick at a time"
        bread="Radiological"
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial/>

      <HomeWhy />
    </div>
  );
}
