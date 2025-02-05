import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import "./globals.css";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import HomeServices from "@/components/HomePage/HomeServices/HomeServices";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeSubServices from "@/components/HomePage/HomeSubServices/HomeSubServices";
import DashLayout from "@/components/Dashboard/layout";
export default function Home() {
  return (
    <div className="page-container">
      <HomeHeader />
      <HomeServices />
      <HomeAboutUs />
      <HomeKey />
      <HomeSubServices />
      <HomeDoctor />
      <HomeWhy />

    </div>
  );
}
