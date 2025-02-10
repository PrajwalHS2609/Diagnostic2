
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import tmt1 from "@/Images/tmt/tmt1.png";
import tmt2 from "@/Images/tmt/tmt2.png";
import tmt3 from "@/Images/tmt/tmt3.png";
export default function ECGTest() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={tmt1.src}
        imageSrc2={tmt2.src}
        imageSrc3={tmt3.src}
        alt="TMT Banner"
        head="Test in Bangalore "
        highlight="TMT "
        para="Accurate insights to keep your health moving forward"
        bread="TMT Test"
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
