import React from "react";
import "@/components/Style/style.css";

const DopplerCard = () => {
  const card = [
    {
      id: 1,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png",
      title: "Color Doppler Scan",
      description:
        "Pathacon Diagnostics in  Bangalore offers advanced Color Doppler scans, using the latest technology to visualize blood flow in the heart, brain, and other vital organs for accurate results.",
    },
    {
      id: 2,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png",
      title: "Power Doppler Scan",
      description:
        "The Power Doppler scan in  Bangalore is a more sensitive type of scan that provides detailed images of blood flow in vessels that may be difficult to detect using other techniques. It is especially useful for evaluating blood flow in smaller or deeper vessels.",
    },
    {
      id: 3,    
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png",
      title: "Duplex Doppler Scan",
      description:
        "This type of Doppler scan in  Bangalore combines traditional ultrasound imaging with Doppler technology, allowing for a more comprehensive view of the blood flow and structure of the vessels. It is often used to assess the health of veins and arteries in the arms, legs, and neck.",
    },
    {
      id: 4,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png",
      title: "Continuous Wave Doppler Scan",
      description:
        "A Continuous Wave Doppler scan in  Bangalore is typically used to measure very fast blood flow, particularly in the case of cardiac issues. It can help identify conditions like valve defects and heart murmurs.",
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

export default DopplerCard;
