import BTMLayoutDiagnosticsContent from "@/components/DiagnosticCities/BTMLayoutDiagnostics/BTMLayoutDiagnosticsContent";
import BTMLayoutDiagnosticsHead from "@/components/DiagnosticCities/BTMLayoutDiagnostics/BTMLayoutDiagnosticsHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";

export default function BTMLayoutDiagnostic() {
  return (
    <div className="page-container">
      <HomeHeader />
      <BTMLayoutDiagnosticsHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <BTMLayoutDiagnosticsContent />
    </div>
  );
}
