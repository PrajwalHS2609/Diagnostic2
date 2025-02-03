import React from "react";
import "./HomeWhy.css";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { GiMedicines } from "react-icons/gi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaHospitalUser } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { FaIndianRupeeSign } from "react-icons/fa6";

const HomeWhyCard = () => {
  const whyCard = [
    {
      id: 1,
      icon: <FaSuitcaseMedical />,
      title: "Service & Check",
      para: "Medical competitor research startup to financial",
    },
    {
      id: 2,
      icon: <GiMedicines />,
      title: "Medical Advices",
      para: "Medical competitor research startup to financial",
    },
    {
      id: 3,
      icon: <BsFillHeartPulseFill />,
      title: "Emergency Help",
      para: "Medical competitor research startup to financial",
    },
    {
      id: 4,
      icon: <GiTestTubes />,
      title: "Medical Research",
      para: "Medical competitor research startup to financial",
    },
    {
      id: 5,
      icon: <FaHospitalUser />,
      title: "Qualified Doctors",
      para: "Medical competitor research startup to financial",
    },
    {
      id: 6,
      icon: <FaIndianRupeeSign />,
      title: "Affordable Prices",
      para: "Medical competitor research startup to financial",
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
    </div>
  );
};

export default HomeWhyCard;
