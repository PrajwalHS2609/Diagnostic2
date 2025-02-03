import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import "./globals.css";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import HomeServices from "@/components/HomePage/HomeServices/HomeServices";
export default function Home() {
  return (
    <div className="page-container">
      <HomeHeader />
      <HomeAboutUs />
      <HomeKey />
      <HomeServices />
      <HomeWhy />
    </div>
  );
}
