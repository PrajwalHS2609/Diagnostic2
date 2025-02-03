import Link from "next/link";
import React from "react";

const FooterPost = () => {
  return (
    <div className="footerPost-container">
      <h4>Recent Post</h4>
      <ul>
        <li>
          <Link href="/">
            <img
              src="https://img.freepik.com/free-photo/doctor-with-patient-hospital-doctor-working-office-listening-patient-she-is-explaining-her-symptoms-healtcare-assistance-concept_657921-287.jpg?t=st=1738588969~exp=1738592569~hmac=9a3a1d13cd73c79bcd7dd8e932e15a4392172bf7a4a1c1105b0deb1d4d4f08c4&w=996"
              alt=""
            />
            <h6>Decoding Symptoms: A Guide to Medical Diagnosis</h6>
          </Link>
        </li>
        <li>
          <Link href="/">
            <img
              src="https://img.freepik.com/free-photo/serious-man-consulting-with-young-female-physician-doctor-checkup-meeting-hospital-skilled-general-practitioner-giving-healthcare-medical-advices-patient_657921-853.jpg?t=st=1738588988~exp=1738592588~hmac=a67805c395d5443056567fcb0329c0b82f126c90e9306e137877105703eb24e1&w=996"
              alt=""
            />
            <h6>
              Medical Diagnostics: Unraveling Symptoms for Accurate Diagnosis
            </h6>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterPost;
