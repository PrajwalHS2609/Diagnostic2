import ContactUsMain from "@/components/ContactUs/ContactUsMain";
import ContactUsMap from "@/components/ContactUs/ContactUsMap";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";
import Contactbanner from "@/Images/contactBanner.png";
export default function ContactUs() {
  return (
    <div className="page-container">
      <HeaderComponent
        imageSrc={Contactbanner.src}
        alt="Contactbanner"
        head="Contact Us"
        highlight=""
        para=""
        bread="Contact Us"
      />
      <ContactUsMain/>
      <ContactUsMap/>
    </div>
  );
}
