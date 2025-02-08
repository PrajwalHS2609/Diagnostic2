import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import "./globals.css";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import HomeServices from "@/components/HomePage/HomeServices/HomeServices";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeSubServices from "@/components/HomePage/HomeBlog/HomeBlog";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
export default function Home() {
  return (
    <div className="page-container">
      <HomeHeader />
      <HomeServices />
      <HomeAboutUs />
      <HomeWhy />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeSubServices />
    </div>
  );
}
