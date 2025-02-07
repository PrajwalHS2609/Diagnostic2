import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function Pathology() {
  return (
    <div className="page-container">
      <HeaderComponent
          imageSrc1={"/"}
          imageSrc2={"/"}
          imageSrc3={"/"}
        alt="Pathology Banner"
        head="Test At Home"
        highlight="Blood"
        para="Discover the Convenience of a Healthier Life with our Premium Service"
        bread="Pathology"
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeWhy />
    </div>
  );
}
