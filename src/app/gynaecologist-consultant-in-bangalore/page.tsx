import ConsultationHeader from "@/components/Consultation/ConsultationHeader/ConsultationHeader";
import HomeAboutUs from "@/components/HomePage/HomeAboutUs/HomeAboutUs";
import HomeDoctor from "@/components/HomePage/HomeDoctor/HomeDoctor";
import HomeKey from "@/components/HomePage/HomeKey/HomeKey";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeWhy from "@/components/HomePage/HomeWhy/HomeWhy";
import gynecologist from "@/Images/Consultation/Gynaecologist.png"
export default function GynecologistConsultation() {
  return (
    <div className="page-container">
      <ConsultationHeader
        imageSrc={gynecologist.src}
        alt="Gynecologist  Banner"
        title="Consultation in Bangalore"
        highlight="Gynecologist "
        para="Creating Life's masterpiece, one kick at a time"
        bread="Gynecologist Consultation "
      />
      <HomeAboutUs />
      <HomeKey />
      <HomeDoctor />
      <HomeTestimonial />
      <HomeWhy />
    </div>
  );
}
