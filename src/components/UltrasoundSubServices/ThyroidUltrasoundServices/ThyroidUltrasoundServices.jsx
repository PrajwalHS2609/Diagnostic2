import React from "react";
import "@/components/Style/style.css";
import Link from "next/link";
const ThyroidUltrasoundServices = () => {
  const card = [
    {
      id: 1,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/16ba6d6df51b359e37639659c72f7a52c275d7aa-1920x1080.png",
      title: "Gray Scale Thyroid Ultrasound",
      link: "/gray-scale-thyroid-ultrasound-in-bangalore",
      description:
        "When it comes to understanding thyroid health, Gray-scale Thyroid Ultrasound in Bangalore stands as one of the most accurate and non-invasive diagnostic tools.",
    },
    {
      id: 2,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/d473b0acc34e035353635895adf7de31dac492c1-1920x1080.png",
      title: "Color Doppler Thyroid Ultrasound",
      link: "/color-doppler-thyroid-ultrasound-in-bangalore",
      description:
        "Color Doppler Thyroid Ultrasound in Bangalore is one of the most advanced diagnostic tools used by medical experts to assess blood flow, gland structure, and detect thyroid disorders with high accuracy.",
    },
    {
      id: 3,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/0bb8e062d8b08ee3dc734b4e8667ab8c9966ad17-1920x1080.png",
      title: "Elastography",
      link: "/elastography-in-bangalore",
      description:
        "In the modern era of medical diagnostics, Elastography in Bangalore is transforming how specialists assess tissue health, detect liver fibrosis, and evaluate organ stiffness.",
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

export default ThyroidUltrasoundServices;
