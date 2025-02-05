import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import AboutUsbanner from "@/Images/aboutUsBanner.png";

export default function AboutUs() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc={AboutUsbanner.src}
        alt="AboutUsbanner"
        head="About Us"
        highlight=""
        para=""
        bread="About Us"
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeWhy />
    </div>
  );
}
