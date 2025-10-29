import React from "react";
import "@/components/Style/style.css";
import Link from "next/link";
const XraySubServices = () => {
  const card = [
    {
      id: 1,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/11cb073e221dbbee9efe836405bb5fb34d15a162-1920x1080.png",
      title: "Chest X-Ray ",
      link: "/chest-x-ray-in-bangalore",
      description:
        "A Chest X-Ray in Bangalore is one of the most commonly performed diagnostic imaging tests used to examine the lungs, heart, ribs, and chest cavity.",
    },
    {
      id: 2,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/838882c2cb770e3065d15827ccc587a3f0dc64c7-1920x1080.png",
      title: "Bone X-Ray",
      link: "/bone-x-ray-in-bangalore",
      description:
        "If you’ve been searching for a Bone X-Ray in Bangalore, you’re taking the right step toward ensuring your bone and joint health is accurately assessed. ",
    },
    {
      id: 3,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/3ccc51661f4ade48a90c2aabe612394d9b0ba61b-1920x1080.png",
      title: "Abdominal X-Ray",
      link: "/abdominal-x-ray-in-bangalore",
      description:
        "When you’re dealing with unexplained stomach pain, bloating, or digestive issues, getting an Abdominal X-Ray in Bangalore can be one of the most reliable first steps toward finding answers. ",
    },
    {
      id: 4,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/bf7c7ccc2661c51b924cc4139a5762fd71fdc7e7-1920x1080.png",
      title: "Dental X-Ray",
      link: "/dental-x-ray-in-bangalore",
      description:
        "When it comes to ensuring complete oral health, a Dental X-Ray in Bangalore is one of the most essential diagnostic tools.",
    },
    {
      id: 5,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/a01db0f1c8d7511a7c9f1ab9fb6eab39f8a7a8e6-1920x1080.png",
      title: "Joint X-Ray",
      link: "/joint-x-ray-in-bangalore",
      description:
        "When you experience stiffness, swelling, or pain in your joints, the first and most effective diagnostic step is a Joint X-Ray in Bangalore.",
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

export default XraySubServices;
