import React from "react";
import "./HomeKey.css";
import { BsClipboard2Data } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrTrophy } from "react-icons/gr";

const HomeKey = () => {
  const keyPoints = [
    { id: 1, icon: <FaPeopleGroup />, head: "567+", para: "Active Clients" },
    { id: 2, icon: <TfiHeadphoneAlt />, head: "23+", para: "Team Support" },
    {
      id: 3,
      icon: <BsClipboard2Data />,
      head: "241+",
      para: "Projects Complite",
    },
    { id: 4, icon: <GrTrophy />, head: "16+", para: "Award winner" },
  ];
  return (
    <div className="homeKey-container">
      <div className="homeKey-content">
        {keyPoints.map((keyPoint) => (
          <div key={keyPoint.id} className="homeKey-item">
           <span className="keyPoint-icon"> {keyPoint.icon}</span>
            <h2>{keyPoint.head}</h2>
            <p>{keyPoint.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeKey;
