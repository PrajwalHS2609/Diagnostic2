import DopplerCard from "@/components/Doppler/DopplerCard";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import doppler1 from "@/Images/doppler/doppler1.png";
import doppler2 from "@/Images/doppler/doppler2.png";
import doppler3 from "@/Images/doppler/doppler3.png";
export default function DopplerScan() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={doppler1.src}
        imageSrc2={doppler2.src}
        imageSrc3={doppler3.src}
        alt="Doppler Banner"
        head="in Bangalore "
        highlight="Doppler Scan"
        para="Accurate insights to keep your health moving forward"
        bread="Doppler Scan"
      />
      <DopplerCard/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
