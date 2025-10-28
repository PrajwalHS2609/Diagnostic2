import React from 'react'
import "@/components/Style/style.css";
import Link from "next/link";
const VascularUltrasoundService = () => {
      const card = [
    {
      id: 1,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/4fd3e26e9f939dfa60beacbf2612332b8cfd9088-1920x1080.png",
      title: "Carotid Duplex Ultrasound ",
      link: "/carotid-duplex-ultrasound-in-bangalore  ",
      description:
        "Carotid duplex ultrasound in Bangalore has become a gold standard in non-invasive vascular imaging, enabling healthcare providers to evaluate blood flow, detect plaque, and assess stroke risk.",
    },
    {
      id: 2,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/4c19c7ca15c2136303d0025061ab64ad47975180-1920x1080.png",
      title: "Venous Duplex Ultrasound",
      link: "/venous-duplex-ultrasound-in-bangalore",
      description:
        "Venous Duplex Ultrasound in Bangalore highly accurate method for evaluating the veins in your legs, detecting blockages, valve problems, or conditions like Deep Vein Thrombosis (DVT).",
    },
    {
      id: 3,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/efda6b57084e731f9606c7857df06ac1d8141f02-1920x1080.png",
      title: "Arterial Duplex Ultrasound",
      link: "/arterial-duplex-ultrasound-in-bangalore",
      description:
        "Arterial Duplex Ultrasound in Bangalore is a non-invasive diagnostic test that helps evaluate the arteries and blood flow in the body.",
    },
    {
      id: 4,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/efb02e5498aa821a772d17baa467eda97fada293-1920x1080.png",
      title: "Aortic Ultrasound",
      link: "/aortic-ultrasound-in-bangalore",
      description:
        "When it comes to safeguarding your vascular health, early diagnosis can make all the difference. Aortic Ultrasound in Bangalore is one of the most effective, non-invasive imaging tests used to evaluate the aorta — the body’s largest artery.",
    },
    {
      id: 5,
      img: "https://cdn.sanity.io/images/b9esbgnl/production/441db26e7729af926ecb198fbca8d240957aee35-1920x1080.png",
      title: "Renal Artery Duplex Ultrasound",
      link: "/renal-artery-duplex-ultrasound-in-bangalore",
      description:
        "Renal Artery Duplex Ultrasound in Bangalore. This non-invasive imaging test helps doctors visualize the blood flow to your kidneys, detect blockages, and evaluate renal artery health with precision.",
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
  )
}

export default VascularUltrasoundService
