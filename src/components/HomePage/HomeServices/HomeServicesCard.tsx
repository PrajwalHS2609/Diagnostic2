import React from "react";
import "./HomeServices.css";
import Link from "next/link";
import { MdBloodtype } from "react-icons/md";
import { GiSoundWaves } from "react-icons/gi";
import { FaXRay } from "react-icons/fa6";
import { FaRadiationAlt } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";

const HomeServicesCard = () => {
  const serviceCard = [
    {
      id: 1,
      title: "Pathology",
      description:
        "Pathology studies diseases by analyzing tissues and fluids to aid diagnosis and treatment.",
      icon: <MdBloodtype />,
    },
    {
      id: 2,
      title: "Ultrasound",
      description:
        "Ultrasound uses sound waves to image internal body structures.",
      icon: <GiSoundWaves />,
    },
    {
      id: 3,
      title: "X-Ray",
      description:
        "X-ray uses radiation to capture images of bones and organs.",
      icon: <FaXRay />,
    },
    {
      id: 4,
      title: "Cardiology",
      description:
        "Cardiology deals with heart diseases, diagnosis, and treatment.",
      icon: <GiHeartBeats />,
    },
    {
      id: 5,
      title: "Radiology Procedure",
      description:
        "Radiology uses imaging techniques to diagnose and treat conditions.",
      icon: <FaRadiationAlt />,
    },
  ];
  return (
    <div className="homeServicesCard-container">
      {serviceCard.map((x) => (
        <div className="homeServicesCard-content" key={x.id}>
          <span>
            <div className="homeServicesCard-IconContainer">{x.icon}</div>
            <div className="homeServicesCard-design"></div>
          </span>
          <div className="homeServicesCard-textContainer">
            <h4>
              <Link href={"/"}>{x.title}</Link>{" "}
            </h4>
            <p>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeServicesCard;
