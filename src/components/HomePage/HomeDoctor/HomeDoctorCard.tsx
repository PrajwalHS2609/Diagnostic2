import React from "react";
import "./HomeDoctor.css";

const HomeDoctorCard = () => {
  const doctor = [
    {
      id: 1,
      img: "https://medilo-html.netlify.app/assets/img/team_1.jpg",
      name: "John Doe",
      designation: "Pathologist",
    },
    {
      id: 2,
      img: "https://medilo-html.netlify.app/assets/img/team_3.jpg",
      name: "Smith",
      designation: "Cardiologist",
    },
    {
      id: 3,
      img: "https://medilo-html.netlify.app/assets/img/team_5.jpg",
      name: "Daisy",
      designation: "Radiologist",
    },
  ];
  return (
    <div className="homeDoctorCard-container">
      {doctor.map((doctor) => (
        <div className="homeDoctorCard-content" key={doctor.id}>
          <div className="homeDoctorCard-design"></div>
          <div className="homeDoctorCard-img">
            <img src={doctor.img} alt={doctor.name} />
          </div>
          <div className="homeDoctorCard-info">
            <h3>{doctor.name}</h3>
            <p>{doctor.designation}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeDoctorCard;
