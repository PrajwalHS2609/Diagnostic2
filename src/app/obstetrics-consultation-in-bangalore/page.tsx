import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import ObstetricsContentFooter from "@/components/Consultation/ObstetricsConsultation/ObstetricsContentFooter";
import ObstetricsContentHead from "@/components/Consultation/ObstetricsConsultation/ObstetricsContentHead";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import obstetrics from "@/Images/Consultation/Obstetrics.png";
import "@/components/Style/style.css"
export default function ObstetricsConsultation() {
  return (
    <div className="page-container">
      <ConsultationHeader
        imageSrc={obstetrics.src}
        alt="Obstetrics  Banner"
        title="Consultation in Bangalore"
        highlight="Obstetrics "
        para="Creating Life's masterpiece, one kick at a time"
        bread="Obstetrics "
      />
      <ObstetricsContentHead />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
      <ObstetricsContentFooter />
    </div>
  );
}
