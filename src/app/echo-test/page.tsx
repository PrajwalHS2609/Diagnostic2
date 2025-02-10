
import EchoCard from "@/components/Echo/EchoCard";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import echo1 from "@/Images/echo/echo1.png";
import echo2 from "@/Images/echo/echo2.png";
import echo3 from "@/Images/echo/echo3.png";
export default function EchoTest() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={echo1.src}
        imageSrc2={echo2.src}
        imageSrc3={echo3.src}
        alt="Echo Banner"
        head="Test in Bangalore "
        highlight="Echo "
        para="Accurate insights to keep your health moving forward"
        bread="Echo Test"
      />
      <EchoCard/>
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
