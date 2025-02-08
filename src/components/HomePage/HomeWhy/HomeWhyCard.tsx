import React from "react";
import "./HomeWhy.css";
import { GrCertificate } from "react-icons/gr";
import { GiMedicines } from "react-icons/gi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalUser } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";

const HomeWhyCard = () => {
  const whyCard = [
    {
      id: 1,
      icon: <GrCertificate />,
      title: "Accreditation and Certifications",
      para: "Our NABL-accredited diagnostic center upholds international standards, offering reliable testing and calibration services for accurate results.",
    },
    {
      id: 2,
      icon: <GiMedicines />,
      title: "Advanced Technology",
      para: "We utilize state-of-the-art equipment and advanced technology to ensure precise, reliable, and high-quality diagnostic results.",
    },
    {
      id: 3,
      icon: <BsFillHeartPulseFill />,
      title: "Comprehensive Range of Services:",
      para: "Our facility offers a wide array of diagnostic tests, including imaging, pathology, and specialized screenings, all under one roof for your convenience.",
    },
    {
      id: 4,
      icon: <GiTestTubes />,
      title: "Experienced Medical Professionals",
      para: "Our team of skilled radiologists, pathologists, and technicians is committed to precise diagnoses and compassionate care.",
    },
    {
      id: 5,
      icon: <FaUserDoctor />,
      title: "Qualified Doctors",
      para: "We prioritize promptness without compromising accuracy, ensuring that your test results are delivered on time to facilitate swift medical decisions.",
    },
    {
      id: 6,
      icon: <FaHospitalUser />,
      title: "Patient-Centric Approach",
      para: "Our center prioritizes patient comfort with a clean, hygienic environment and a supportive staff to assist you throughout the diagnostic process. ",
    },
  ];
  return (
    <div className="homeWhyCard-container">
      {whyCard.map((x) => (
        <div className="homeWhyCard-item" key={x.id}>
          <div className="homeWhyCard-itemContent">
            <span className="homeWhyCard-icon">{x.icon}</span>
          </div>
          <div className="homeWhyCard-itemContent">
            <h3>{x.title}</h3>
            <p>{x.para}</p>
          </div>
        </div>
      ))}
      <p>
        By focusing on these key areas, we strive to provide exceptional
        diagnostic services that you can trust.
      </p>
    </div>
  );
};

export default HomeWhyCard;
