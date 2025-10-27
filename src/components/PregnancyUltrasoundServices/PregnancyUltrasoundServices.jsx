import React from "react";
import "@/components/Style/style.css";
import Link from "next/link";
const PregnancyUltrasoundServices = () => {
  const card = [
    {
      id: 1,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/80e2cc42f38e6d552f8310322181fca2f205cb5e-1920x1080.png",
      title: "Dating Scan",
      link: "/dating-scan-in-bangalore",
      description:
        "Dating Scan in Bangalore, a vital ultrasound that confirms your pregnancy, calculates your due date, and ensures your baby is developing safely.",
    },
    {
      id: 2,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/52dd7b72cc1e094faf41ca5cebb53c1f88879617-1920x1080.png",
      title: "Fetal Echocardiogram",
      link: "/fetal-echocardiogram-in-bangalore",
      description:
        "Pregnancy is a joyful journey filled with anticipation and concern for your baby’s health. A fetal echocardiogram in Bangalore is a key test to assess your baby’s heart health before birth.",
    },
    {
      id: 3,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/6cc7c2bd17f253725edfb6d7bf9353a2cd8f384c-1920x1080.png",
      title: "NT Scan",
      link: "/nt-scan-in-bangalore",
      description:
        "Pregnancy is one of the most exciting and emotional journeys of a woman’s life. Each milestone brings new joy, curiosity, and questions — especially when it comes to your baby’s health and development.",
    },
    {
      id: 4,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/98519b5a09c91a6747521018bef3984e26c398b0-1920x1080.png",
      title: "Anomaly Scan",
      link: "/anomaly-scan-in-bangalore",
      description:
        "Pregnancy is a magical journey, filled with excitement, curiosity, and sometimes, anxiety. Every expecting mother wants the best for her baby, and staying informed about fetal health is key.",
    },
    {
      id: 5,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/4b071c0179fd774d0e3cc48a7bb25a24cec8e7de-1920x1080.png",
      title: "3D & 4D Fetal Scan",
      link: "/3d-and-4d-fetal-scan-in-bangalore",
      description:
        "3D & 4D Fetal Scan in Bangalore provide lifelike images and real-time videos of your baby, giving you a unique bonding experience while keeping track of fetal health.",
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

export default PregnancyUltrasoundServices;
