import React from "react";
import "./HomeServices.css";
import Link from "next/link";
import { MdBloodtype } from "react-icons/md";
import { GiSoundWaves } from "react-icons/gi";
import { FaXRay } from "react-icons/fa6";
import { FaRadiationAlt } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import { TbTreadmill } from "react-icons/tb";
import { TbWaveSawTool } from "react-icons/tb";

const HomeServicesCard = () => {
  const serviceCard = [
    {
      id: 1,
      title: "Pathology",
      description:
        "Pathology is the medical discipline that provides diagnostic information to patients and clinicians, impacting nearly all aspects of patient care.",
      icon: <MdBloodtype />,
      link: "/pathology-test",
    },
    {
      id: 2,
      title: "Ultrasound",
      description:
        "Ultrasound is a noninvasive imaging test that uses high-frequency sound waves to create real-time pictures or video of soft tissues inside your body.",
      icon: <GiSoundWaves />,
      link: "/ultrasound-scan",
    },
    {
      id: 3,
      title: "X-Ray",
      description:
        "An X-ray is a form of electromagnetic radiation that can penetrate various materials, allowing for internal imaging of structures such as bones and organs.",
      icon: <FaXRay />,
      link: "/x-ray",
    },
    {
      id: 4,
      title: "Doppler",
      description:
        "A Doppler ultrasound is a noninvasive imaging test that uses sound waves to show how well your blood flows through your blood vessels",
      icon: <GiSoundWaves />,
      link: "/doppler-test",
    },
    {
      id: 5,
      title: "Radiology Procedure",
      description:
        "A radiology procedure is a medical process that uses imaging technology, such as X-rays, MRI, or ultrasound, to diagnose or treat diseases within the body.",
      icon: <FaRadiationAlt />,
      link: "/radiological-services",
    },
    {
      id: 6,
      title: "ECHO",
      description:
        "An echocardiogram (echo) is a test that uses high-frequency sound waves (ultrasound) to create images of your heart's valves and chambers, helping to evaluate its pumping action.",
      icon: <TbWaveSawTool />,
      link: "/echo-test",
    },
    {
      id: 7,
      title: "TMT",
      description:
        "A Treadmill Test, or exercise stress test, assesses heart function by monitoring electrical activity, heart rate, and blood pressure during exercise.",
      icon: <TbTreadmill />,
      link: "/tmt-test",
    },
    {
      id: 8,
      title: "ECG",
      description:
        "An electrocardiogram (ECG) is a quick and non-invasive test that records the electrical activity of your heart to help detect various cardiac conditions. ",
      icon: <GiHeartBeats />,
      link: "/ecg-test",
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
              <Link href={x.link}>{x.title}</Link>{" "}
            </h4>
            <p>{x.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeServicesCard;
