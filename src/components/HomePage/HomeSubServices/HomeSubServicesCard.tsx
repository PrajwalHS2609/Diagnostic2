import React from "react";
import "./HomeSubServices.css";
import Link from "next/link";
const HomeSubServicesCard = () => {
  const SubServices = [
    {
      id: 1,
      img: "https://medilo-html.netlify.app/assets/img/project_1.jpg",
      title: "Medical Of Working",
      description:
        "We businesss standard chunk of Ipsum used since is Agency & Star tup",
      link: "",
    },
    {
      id: 2,
      img: "https://medilo-html.netlify.app/assets/img/project_2.jpg",
      title: "Medical Of Working",
      description:
        "We businesss standard chunk of Ipsum used since is Agency & Star tup",
      link: "",
    },
    {
      id: 3,
      img: "https://medilo-html.netlify.app/assets/img/project_3.jpg",
      title: "Medical Of Working",
      description:
        "We businesss standard chunk of Ipsum used since is Agency & Star tup",
      link: "",
    },
  ];
  return (
    <>
      {SubServices.map((x) => (
        <div className="homeSubServiceCard-container" key={x.id}>
          <Link href={x.link}>
            <img src={x.img} alt={x.title} />
            <div className="homeSubServiceCard-content">
              <div className="homeSubServiceCard-item">
                <h5>{x.title}</h5>
                <p>{x.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default HomeSubServicesCard;
