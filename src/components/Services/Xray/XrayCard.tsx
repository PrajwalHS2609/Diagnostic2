import React from "react";
import "@/components/Style/style.css";
import Link from "next/link";
import Image from "next/image";
import chestXray from "@/Images/xray/Chest X-Ray in Bangalore.png";
import boneXray from "@/Images/xray/Bone X-Ray in Bangalore.png";
import abdominalXray from "@/Images/xray/Abdominal X-Ray in Bangalore.png";
import dentalXray from "@/Images/xray/Dental X-Ray in Bangalore.png";
import jointXray from "@/Images/xray/Joint X-Ray in Bangalore.png";

const XrayCard = () => {
  const card = [
    {
      id: 1,
      img: chestXray,
      title: "Chest X-Ray",
      link: "/chest-x-ray-in-bangalore",
      description:
        "A chest X-Ray in  Bangalore is one of the most common types of X-rays performed, helping to diagnose conditions such as pneumonia, tuberculosis, and lung cancer. It’s also used to evaluate the heart and blood vessels, making it a critical tool in assessing overall health.",
    },
    {
      id: 2,
      img: boneXray,
      title: "Bone X-Ray",
      link: "/bone-x-ray-in-bangalore",
      description:
        "If you’ve had a fracture or bone pain, our X-Ray in Bangalore provides detailed bone imaging to help doctors assess injuries and plan treatment. It also helps diagnose conditions like arthritis and osteoporosis.",
    },
    {
      id: 3,
      img: abdominalXray,
      title: "Abdominal X-Ray",
      link: "/abdominal-x-ray-in-bangalore",
      description:
        "For those experiencing digestive issues, an abdominal X-Ray in  Bangalore can help identify blockages, kidney stones, or other issues affecting the stomach, intestines, and other abdominal organs.",
    },
    {
      id: 4,
      img: dentalXray,
      title: "Dental X-Ray",
      link: "/dental-x-ray-in-bangalore",
      description:
        "Dental X-rays are essential for identifying cavities, tooth infections, and other oral health concerns. Our X-Ray in  Bangalore services include specialized dental imaging to assist in comprehensive oral care.",
    },
    {
      id: 5,
      img: jointXray,
      title: "Joint X-Ray",
      link: "/joint-x-ray-in-bangalore",
      description:
        "Whether you’re dealing with a sports injury or chronic joint pain, a joint X-Ray in  Bangalore provides detailed images that help diagnose conditions such as dislocations, arthritis, and ligament damage.",
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
            <h4>{x.title}</h4>
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

export default XrayCard;
