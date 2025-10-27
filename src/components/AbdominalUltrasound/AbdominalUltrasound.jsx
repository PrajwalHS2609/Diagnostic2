import React from "react";
import "@/components/Style/style.css";
import Link from "next/link";
const AbdominalUltrasound = () => {
  const card = [
    {
      id: 1,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/f265ec3b279128584785f48396ad1110759fd57d-1920x1080.png",
      title: "Endoscopic Ultrasound",
      link: "/endoscopic-ultrasound-in-bangalore",
      description:
        "Endoscopic Ultrasound in Bangalore has emerged as one of the most advanced diagnostic imaging procedures, providing highly detailed images of internal organs and tissues.",
    },
    {
      id: 2,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/39a5da4b4bed3ad17e50d952553fc66c3bb2ff50-1920x1080.png",
      title: "Duplex Ultrasound",
      link: "/duplex-ultrasound-in-bangalore",
      description:
        "Duplex Ultrasound in Bangalore is one of the most advanced, non-invasive diagnostic imaging tests used to evaluate blood flow in arteries and veins.",
    },
    {
      id: 3,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/7752def8629771a7c61912e9456221e6bad171f2-1920x1080.png",
      title: "Triplex Ultrasound",
      link: "/triplex-ultrasound-in-bangalore",
      description:
        "Triplex Ultrasound in Bangalore is one of the most advanced diagnostic imaging techniques used to evaluate blood flow, tissue structure, and organ function in real-time.",
    },
    {
      id: 4,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/125e611ce5d8b7029351afeda7d855a40cb97cd9-1920x1080.png",
      title: "Transvaginal Ultrasound",
      link: "/transvaginal-ultrasound-in-bangalore",
      description:
        "Transvaginal Ultrasound in Bangalore is one of the most accurate and advanced imaging techniques used to evaluate a woman’s reproductive organs, including the uterus, fallopian tubes, ovaries, cervix, and pelvic region.",
    },
    {
      id: 5,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/27b16d89fa63c5377c8dac7c613240c3bf3f275f-1920x1080.png",
      title: "KUB Ultrasound",
      link: "/kub-ultrasound-in-bangalore",
      description:
        "KUB Ultrasound in Bangalore is one of the most important diagnostic imaging tests for evaluating the kidneys, ureters, and bladder — the primary organs of your urinary system.",
    },
    {
      id: 6,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/920a0fc185f23502d0d61342491e7162a80aff94-1920x1080.png",
      title: "Transabdominal Ultrasound",
      link: "/transabdominal-ultrasound-in-bangalore",
      description:
        "A Transabdominal Ultrasound in Bangalore is one of the most common and essential imaging tests used to examine the organs inside your abdomen.",
    },
  ];
  return (
    <div className="subService-container">
      {card.map((x) => (
        <div className="subService-content" key={x.id}>
          <div className="subService-item">
            <img src={x.img} alt={x.title} />
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

export default AbdominalUltrasound;
