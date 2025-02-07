import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
import ContactUsMain from "@/components/ContactUs/ContactUsMain";
import ContactUsMap from "@/components/ContactUs/ContactUsMap";
export default function ContactUs() {
  return (
    <div className="page-container">
      <ContactUsHeader />
      <ContactUsMain />
      <ContactUsMap />
    </div>
  );
}
