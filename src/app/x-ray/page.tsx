import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import xray1 from "@/Images/xray/x-ray1.png"
import xray2 from "@/Images/xray/x-ray2.png"
import xray3 from "@/Images/xray/x-ray3.png"

export default function UltrasoundScan() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc1={xray1.src}
        imageSrc2={xray2.src}
        imageSrc3={xray3.src}
        alt="Xray Banner"
        head=" Services in Bangalore "
        highlight="X-ray"
        para="Creating Life's masterpiece, one kick at a time"
        bread="X-Ray"
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeWhy />
    </div>
  );
}
