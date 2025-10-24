import React from "react";
import "@/components/Style/style.css";
import Link from "next/link";
import pregnancy from "@/Images/ultrasound/Pregnancy Ultrasound.png";
import abdominal from "@/Images/ultrasound/Abdominal Ultrasound.png";
import pelvic from "@/Images/ultrasound/Pelvic scan.png";
import thyroid from "@/Images/ultrasound/Tumor Markers Test.png";
import vascular from "@/Images/ultrasound/Vascular Ultrasound.png";
import breast from "@/Images/ultrasound/Breast Ultrasound.png";
import Image from "next/image";

const UltrasoundCard = () => {
  const card = [
    {
      id: 1,
      img: pregnancy,
      title: "Pregnancy Ultrasound",
      link: "/pregnancy-ultrasound-in-bangalore",
      description:
        "Expecting mothers in  Bangalore can rely on our 3D and 4D Ultrasound Scans for routine pregnancy monitoring. These scans provide clear images of the baby, offering both emotional connection and vital insights into the pregnancy's progress.",
    },
    {
      id: 2,
      img: abdominal,
      title: "Abdominal Ultrasound",
      link: "/abdominal-ultrasound-in-bangalore",
      description:
        "Our abdominal Ultrasound Scan in  Bangalore helps in diagnosing conditions affecting the liver, kidneys, gallbladder, pancreas, and other internal organs. It is a vital tool for detecting abnormalities like gallstones, kidney stones, liver disease, and more.",
    },
    {
      id: 3,
      img: pelvic,
      title: "Pelvic Ultrasound",
      link: "/pelvic-ultrasound-in-bangalore",
      description:
        "For women, a pelvic ultrasound is often used to assess reproductive health and diagnose conditions such as ovarian cysts, fibroids, or other abnormalities. Our Ultrasound Scan in  Bangalore provides detailed images that help in identifying and managing these conditions effectively.",
    },
    {
      id: 4,
      img: thyroid,
      title: "Thyroid Ultrasound",
      link: "/",
      description:
        "Thyroid issues are common, and our Ultrasound Scan in  Bangalore offers a non-invasive way to examine the thyroid gland. This scan can help in diagnosing conditions like thyroid nodules, goiters, or thyroid cancer.",
    },
    {
      id: 5,
      img: vascular,
      title: "Vascular Ultrasound",
      link: "/",
      description:
        "Blood flow abnormalities can be detected using our vascular Ultrasound Scan in  Bangalore. This type of ultrasound is critical for diagnosing conditions such as deep vein thrombosis (DVT) or peripheral artery disease (PAD).",
    },
    {
      id: 6,
      img: breast,
      title: "Breast Ultrasound",
      link: "/",
      description:
        "For women who are undergoing breast cancer screenings or who have detected lumps, a breast ultrasound can provide important diagnostic insights. Our Ultrasound Scan in  Bangalore is part of our comprehensive women’s health services.",
    },
  ];
  return (
    <div className="subService-container">
      {card.map((x) => (
        <div className="subService-content" key={x.id}>
          <div className="subService-item">
            <Image src={x.img} alt={x.title} />
          </div>
          <div className="subService-item">
            <h4>
              {" "}
              <Link href={x.link}>{x.title}</Link>{" "}
            </h4>
            <p>{x.description}</p>
            <Link href={x.link}>
            <button>Read More</button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UltrasoundCard;
