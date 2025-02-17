import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import RadiologyContentHead from "@/components/Services/RadiologicalProcedures/RadiologyContentHead";
import radiological1 from "@/Images/radiological/radiological1.png";
import radiological2 from "@/Images/radiological/radiological2.png";
import radiological3 from "@/Images/radiological/radiological3.png";
import RadiologyContentFooter from './../../components/Services/RadiologicalProcedures/RadiologyContentFooter';
export default function Radiological() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={radiological1.src}
        imageSrc2={radiological2.src}
        imageSrc3={radiological3.src}
        alt="Radiological Banner"
        head=" Services in Bangalore "
        highlight="Radiological"
        para="Creating Life's masterpiece, one kick at a time"
        bread="Radiological"
      />
      <RadiologyContentHead/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial/>
      <HomeWhy />
      <RadiologyContentFooter/>
    </div>
  );
}
