import React from "react";
import "@/components/Style/style.css";

const EchoCard = () => {
  const card = [
    {
      id: 1,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Dating-Scan.png",
      title: "Transthoracic Echocardiogram (TTE)",
      description:
        "This is the most common type of ECHO Test in  Bangalore. During the procedure, a transducer is placed on the chest, and ultrasound waves are used to create images of the heart. It is a painless and quick test that provides essential information about heart function, valve movement, and overall structure.",
    },
    {
      id: 2,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/NT-Scan-New.png",
      title: "Transesophageal Echocardiogram (TEE)",
      description:
        "In cases where more detailed images are required, a Transesophageal ECHO Test in  Bangalore may be performed. This involves passing a specialized probe down the esophagus to get closer to the heart, providing clearer and more precise images, especially of the heart’s back structures.",
    },
    {
      id: 3,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Anomaly-Scan.png",
      title: "Stress Echocardiogram",
      description:
        "A Stress ECHO Test in  Bangalore is performed to assess how well the heart functions under physical stress. The test is conducted both at rest and after exercise, allowing doctors to evaluate how the heart responds to increased demand.",
    },
    {
      id: 4,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Echo.png",
      title: "Doppler Echocardiogram",
      description:
        "A Doppler ECHO Test in  Bangalore focuses on evaluating blood flow through the heart and major blood vessels. It helps in detecting issues such as blood clots, poor blood flow, and valve leaks, which can contribute to heart disease.",
    },
    {
      id: 5,
      img: "https://nisargadiagnostics.com/wp-content/uploads/2023/12/Fetal-Well-being.png",
      title: "Fetal Echocardiogram",
      description:
        "For pregnant women, a Fetal ECHO Test in  Bangalore is performed to check the heart of the unborn baby. This test helps detect congenital heart defects and ensures that the baby’s heart is developing properly.",
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

export default EchoCard;
