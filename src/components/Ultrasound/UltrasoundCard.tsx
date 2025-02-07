import React from "react";
import "@/components/Style/style.css";

const UltrasoundCard = () => {
  const card = [
    {
      id: 1,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png",
      title: "Pregnancy Ultrasound",
      description:
        "Expecting mothers in  Bangalore can rely on our 3D and 4D Ultrasound Scans for routine pregnancy monitoring. These scans provide clear images of the baby, offering both emotional connection and vital insights into the pregnancy's progress.",
    },
    {
      id: 2,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png",
      title: "Abdominal Ultrasound",
      description:
        "Our abdominal Ultrasound Scan in  Bangalore helps in diagnosing conditions affecting the liver, kidneys, gallbladder, pancreas, and other internal organs. It is a vital tool for detecting abnormalities like gallstones, kidney stones, liver disease, and more.",
    },
    {
      id: 3,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png",
      title: "Pelvic Ultrasound",
      description:
        "For women, a pelvic ultrasound is often used to assess reproductive health and diagnose conditions such as ovarian cysts, fibroids, or other abnormalities. Our Ultrasound Scan in  Bangalore provides detailed images that help in identifying and managing these conditions effectively.",
    },
    {
      id: 4,
      img: "https://first-c9d21.web.app/assets/Tumor%20Markers%20Test-B42h5fGC.png",
      title: "Thyroid Ultrasound",
      description:
        "Thyroid issues are common, and our Ultrasound Scan in  Bangalore offers a non-invasive way to examine the thyroid gland. This scan can help in diagnosing conditions like thyroid nodules, goiters, or thyroid cancer.",
    },
    {
      id: 5,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png",
      title: "Vascular Ultrasound",
      description:
        "Blood flow abnormalities can be detected using our vascular Ultrasound Scan in  Bangalore. This type of ultrasound is critical for diagnosing conditions such as deep vein thrombosis (DVT) or peripheral artery disease (PAD).",
    },
    {
      id: 6,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-3D4D.png",
      title: "Breast Ultrasound",
      description:
        "For women who are undergoing breast cancer screenings or who have detected lumps, a breast ultrasound can provide important diagnostic insights. Our Ultrasound Scan in  Bangalore is part of our comprehensive women’s health services.",
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

export default UltrasoundCard;
