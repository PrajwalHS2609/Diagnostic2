import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import PathologyCard from "@/components/Pathology/PathologyCard";
import pathalogy1 from "@/Images/pathalogy/pathalogy1.png";
import pathalogy2 from "@/Images/pathalogy/pathalogy2.png";
import pathalogy3 from "@/Images/pathalogy/pathalogy3.png";
export default function Pathology() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={pathalogy1.src}
        imageSrc2={pathalogy2.src}
        imageSrc3={pathalogy3.src}
        alt="Pathology Banner"
        head="Test At Home"
        highlight="Blood"
        para="Discover the Convenience of a Healthier Life with our Premium Service"
        bread="Pathology"
      />
      <PathologyCard />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />

      <HomeWhy />
    </div>
  );
}
