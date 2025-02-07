import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function Radiological() {
  return (
    <div className="page-container">
      <HeaderComponent
                  imageSrc1={"/"}
                  imageSrc2={"/"}
                  imageSrc3={"/"}
        alt="Radiological Banner"
        head=" Services in Bangalore "
        highlight="Radiological"
        para="Creating Life's masterpiece, one kick at a time"
        bread="Radiological"
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeWhy />
    </div>
  );
}
