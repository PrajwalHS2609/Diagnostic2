import React from "react";
import "./HomeServices.css";
import Link from "next/link";
import { MdBloodtype } from "react-icons/md";
import { GiSoundWaves } from "react-icons/gi";
import { FaXRay } from "react-icons/fa6";
import { FaRadiationAlt } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import { TbTreadmill } from "react-icons/tb";
import { GiTechnoHeart } from "react-icons/gi";
import { TbWaveSawTool } from "react-icons/tb";

const HomeServicesCard = () => {
  const serviceCard = [
    {
      id: 1,
      title: "Pathology",
      description:
        "Pathology studies diseases by analyzing tissues and fluids to aid diagnosis and treatment.",
      icon: <MdBloodtype />,
      link:"/pathology-test"
    },
    {
      id: 2,
      title: "Ultrasound",
      description:
        "Ultrasound uses sound waves to image internal body structures.",
      icon: <GiSoundWaves />,
      link:"/ultrasound-scan"
    },
    {
      id: 3,
      title: "X-Ray",
      description:
        "X-ray uses radiation to capture images of bones and organs.",
      icon: <FaXRay />,
      link:"/x-ray"
    },
    {
      id: 4,
      title: "Cardiology",
      description:
        "Cardiology deals with heart diseases, diagnosis, and treatment.",
      icon: <GiHeartBeats />,
      link:"/cardiology-test"
    },
    {
      id: 5,
      title: "Radiology Procedure",
      description:
        "Radiology uses imaging techniques to diagnose and treat conditions.",
      icon: <FaRadiationAlt />,
      link:"/radiological-services"
    },
    {
      id: 6,
      title: "ECHO",
      description:
        "Echo (Echocardiogram) uses ultrasound to assess heart structure and function.",
      icon: <TbWaveSawTool />,
      link:"/echo-test"
    },
    {
      id: 7,
      title: "TMT",
      description:
        "TMT (Treadmill Test) evaluates heart function under stress to detect issues like blockages and arrhythmias.",
      icon: <TbTreadmill />,
      link:"/tmt"
    },
    {
      id: 8,
      title: "ECG",
      description:
        "ECG records heart activity to detect abnormalities like arrhythmias and heart attacks.",
      icon: <GiTechnoHeart />,
      link:"/ecg-test"
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
