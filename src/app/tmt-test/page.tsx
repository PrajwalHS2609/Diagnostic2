
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import ultraSound1 from "@/Images/ultrasound/ultrasound1.png";
import ultraSound2 from "@/Images/ultrasound/ultrasound2.png";
import ultraSound3 from "@/Images/ultrasound/ultrasound3.png";
export default function ECGTest() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={ultraSound1.src}
        imageSrc2={ultraSound2.src}
        imageSrc3={ultraSound3.src}
        alt="ECG Banner"
        head="Test in Bangalore "
        highlight="ECG "
        para="Accurate insights to keep your health moving forward"
        bread="ECG Test"
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
