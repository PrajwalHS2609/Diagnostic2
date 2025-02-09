import React from 'react'
import "@/components/Style/style.css";

const CardiologyCard = () => {
    const card = [
        {
          id: 1,
          img: "https://first-c9d21.web.app/assets/ECG-BRcESnK4.png",
          title: "ECG",
          description:
            "An electrocardiogram, commonly referred to as an ECG, is one of the most fundamental cardiology tests in  Bangalore. This test records the electrical activity of your heart and helps identify any irregularities in your heartbeat, rhythm, or overall heart function. An ECG can detect conditions like arrhythmias, heart attacks, and other heart-related issues.",
        },
        {
          id: 2,
          img: "https://first-c9d21.web.app/assets/Echo-CZ41SA3E.png",
          title: "Echocardiogram",
          description:
            "An echocardiogram is a key diagnostic tool that uses ultrasound waves to create a detailed image of the heart. This cardiology test in  Bangalore allows your doctor to visualize the structure and function of your heart, assess the strength of heart muscle contractions, and identify conditions such as valve disorders, cardiomyopathy, and heart failure.",
        },
        {
          id: 3,
          img: "https://first-c9d21.web.app/assets/Stress%20Test-C7Ur_itU.png",
          title: "Stress Test",
          description:
            "Hormonal tests at  Diagnostics help assess and balance crucial hormones, providing valuable insights for personalized healthcare and maintaining overall well-being.",
        },
        {
          id: 4,
          img: "https://first-c9d21.web.app/assets/Holter%20Monitoring-IDqrMDof.png",
          title: "Holter Monitoring",
          description:
            "Holter monitoring is a cardiology test in  Bangalore, where a small portable device records heart activity for 24 to 48 hours. It helps detect irregular heartbeats, arrhythmias, and other issues not visible during a standard ECG.",
        },
        {
          id: 5,
          img: "https://first-c9d21.web.app/assets/CT%20Scan-CTlpeheU.png",
          title: "CT Scan",
          description:
            "A cardiac CT scan is a non-invasive cardiology test in  Bangalore that uses advanced imaging technology to create detailed 3D images of your heart and its blood vessels. This test is highly effective in detecting coronary artery disease, identifying blockages, and assessing the risk of a heart attack.",
        },
        {
          id: 6,
          img: "https://first-c9d21.web.app/assets/MRI%20Scan-S5gx-SGg.png",
          title: "MRI Scan",
          description:
            "A cardiac MRI is another sophisticated imaging test used to assess the structure and function of your heart. This cardiology test in  Bangalore provides detailed images of the heart’s tissues, allowing your doctor to diagnose conditions such as heart disease, inflammation, and congenital heart defects.",
        },
      ];
  return (
    <div className="subService-container">
    {card.map((x)=>(
        <div className="subService-content" key={x.id}>
        <div className="subService-item">
          <img
            src={x.img}
            alt={x.title}
          />
        </div>
        <div className="subService-item">
          <h4>{x.title}</h4>
          <p>
           {x.description}
          </p>
          {/* <Link href="/">
            <button></button>
          </Link> */}
        </div>
      </div>
    ))}
   </div>
  )
}

export default CardiologyCard
