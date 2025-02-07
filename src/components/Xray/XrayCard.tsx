import React from "react";
import "@/components/Style/style.css";

const XrayCard = () => {
  const card = [
    {
      id: 1,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png",
      title: "Chest X-Ray",
      description:
        "A chest X-Ray in Rajajinagar, Bangalore is one of the most common types of X-rays performed, helping to diagnose conditions such as pneumonia, tuberculosis, and lung cancer. It’s also used to evaluate the heart and blood vessels, making it a critical tool in assessing overall health.",
    },
    {
      id: 2,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png",
      title: "Bone X-Ray",
      description:
        "If you’ve suffered a fracture or are experiencing bone pain, our X-Ray in Rajajinagar, Bangalore offers detailed imaging of bones, helping doctors assess the extent of the injury and plan appropriate treatment. Bone X-rays are also used to diagnose conditions such as arthritis and osteoporosis.",
    },
    {
      id: 3,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png",
      title: "Abdominal X-Ray",
      description:
        "For those experiencing digestive issues, an abdominal X-Ray in Rajajinagar, Bangalore can help identify blockages, kidney stones, or other issues affecting the stomach, intestines, and other abdominal organs.",
    },
    {
      id: 4,
      img: "https://first-c9d21.web.app/assets/Tumor%20Markers%20Test-B42h5fGC.png",
      title: "Dental X-Ray",
      description:
        "Dental X-rays are essential for identifying cavities, tooth infections, and other oral health concerns. Our X-Ray in Rajajinagar, Bangalore services include specialized dental imaging to assist in comprehensive oral care.",
    },
    {
      id: 5,
      img: "https://first-c9d21.web.app/assets/Microbiology-Ccev8DPM.png",
      title: "Joint X-Ray",
      description:
        "Whether you’re dealing with a sports injury or chronic joint pain, a joint X-Ray in Rajajinagar, Bangalore provides detailed images that help diagnose conditions such as dislocations, arthritis, and ligament damage.",
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
            <h4>{x.title}</h4>
            <p>{x.description}</p>
            {/* <Link href="/">
            <button></button>
          </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default XrayCard;
