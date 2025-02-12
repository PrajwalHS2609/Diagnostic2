import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import urology from "@/Images/Consultation/Urology.png"
export default function UrologyConsultation() {
  return (
    <div className="page-container">
      <ConsultationHeader
        imageSrc={urology.src}
        alt="Urology  Banner"
        title="Consultation in Bangalore"
        highlight="Urology "
        para="Creating Life's masterpiece, one kick at a time"
        bread="Urology "
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
