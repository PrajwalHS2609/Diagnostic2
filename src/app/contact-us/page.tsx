import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
import ContactUsMain from "@/components/ContactUs/ContactUsMain";
import ContactUsMap from "@/components/ContactUs/ContactUsMap";
export const metadata = {
  title: "Contact us for Pathology, Ultrasound, Doppler Scan, X-Ray & ECG Test",
  description:
    "Contact Us for Diagnostics Services in Bangalore for Pathology, Ultrasound, 	Digital X-Ray, Doppler Scanning, Radiological Procedure, ECHO, TMT, ECG & many more services.",
  canonical: "https://diagnosticscenter.co.in/contact-us",
  keywords: [
    "Diagnostic Center,Medical Testing,Pathology Lab Health Checkup,Laboratory Services Medical Diagnosis",
    "Ultrasound Testing,ECG Test,Blood Test,X-ray Services,MRI Scan,Echo Scan ,",
  ],
};
export default function ContactUs() {
  return (
    <div className="page-container">
      <ContactUsHeader />
      <ContactUsMain />
      <ContactUsMap />
    </div>
  );
}
