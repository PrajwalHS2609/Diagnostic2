import React from "react";
import "@/components/Style/style.css";
import Link from "next/link";
const PathologyCard = () => {
  const card = [
    {
      id: 1,
      img: "https://first-c9d21.web.app/assets/Hematology-CXT-8dRB.png",
      title: "Hematology",
      description:
        "Hematology is the branch of medicine that focuses on the study, diagnosis, and treatment of blood-related disorders. Our expert team ensures precise hematology services for comprehensive healthcare.",
      link: "/hematology-blood-tests-in-bangalore",
    },
    {
      id: 2,
      img: "https://first-c9d21.web.app/assets/Biochemistry-D8gE6T3D.png",
      title: "Biochemistry",
      description:
        "Biochemistry is the scientific study of chemical processes within and related to living organisms. Our advanced biochemistry services provide accurate insights for optimal health assessment and care.",

      link: "/biochemistry-blood-tests-in-bangalore",
    },
    {
      id: 3,
      img: "https://first-c9d21.web.app/assets/Hormonal%20Test-DUcwUY6o.png",
      title: "Hormonal Test",
      description:
        "Hormonal tests at  Diagnostics help assess and balance crucial hormones, providing valuable insights for personalized healthcare and maintaining overall well-being.",
      link: "/hormonal-blood-tests-in-bangalore/",
    },
    {
      id: 4,
      img: "https://first-c9d21.web.app/assets/Tumor%20Markers%20Test-B42h5fGC.png",
      title: "Tumor Markers Test",
      description:
        "Tumor marker tests at  Diagnostics aid in the early detection and monitoring of cancer, enabling proactive healthcare and personalized treatment strategies for optimal outcomes.",
      link: "/tumor-markers-blood-tests-in-bangalore",
    },
    {
      id: 5,
      img: "https://first-c9d21.web.app/assets/Microbiology-Ccev8DPM.png",
      title: "Micorbiology",
      description:
        "Microbiology at  Diagnostics employs advanced techniques to identify and analyze microorganisms, facilitating accurate diagnoses and tailored treatment plans for infectious diseases.",
      link: "/microbiology-blood-tests-in-bangalore",
    },
    {
      id: 6,
      img: "https://first-c9d21.web.app/assets/Serology-BuuqjARL.png",
      title: "Serology",
      description:
        "Serology at  Diagnostics investigates blood serum for antibodies, aiding in the diagnosis of various infections and autoimmune disorders with precision and comprehensive understanding.",
      link: "/serology-blood-tests-in-bangalore",
    },
    {
      id: 7,
      img: "https://first-c9d21.web.app/assets/Clinical%20Pathology-aTlqU5Sn.png",
      title: "Clinical Pathology",
      description:
        "Clinical Pathology at  Diagnostics focuses on analyzing bodily fluids and tissues, providing crucial insights for accurate disease diagnosis and optimal patient care.",
      link: "",
    },
    {
      id: 8,
      img: "https://first-c9d21.web.app/assets/Blood%20Tests%20at%20Home-CerjyAeO.png",
      title: "Book Blood Tests at Home",
      description:
        "Experience convenience with  Diagnostics – Blood Tests at Home. Book now for accurate and hassle-free healthcare services in the comfort of your space.",
      link: "",
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

export default PathologyCard;
