import React from "react";
import "./Blog.css";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const BlogCard = () => {
  const card = [
    {
      id: 1,
      title: "Medical Of This Working Health Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates  praesentium, exercitationem quae commodi rem dicta culpa aut, minus qui in.",
      link: "/",
    },
    {
      id: 2,
      title: "Medical Of This Working Health Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates  praesentium, exercitationem quae commodi rem dicta culpa aut, minus qui in.",
      link: "/",
    },
    {
      id: 3,
      title: "Medical Of This Working Health Blog",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates  praesentium, exercitationem quae commodi rem dicta culpa aut, minus qui in.",
      link: "/",
    },
  ];
  return (
    <div className="blogCard-container">
      {card.map((x) => (
        <div className="blogCard-content" key={x.id}>
          <div className="blogCard-imgContent">
            <img
              src="https://medilo-html.netlify.app/assets/img/post_2.jpeg"
              alt=""
            />
          </div>
          <div className="blogCard-txtContent">
            <Link href={x.link}><h4>{x.title}</h4></Link>
            <p>
             {x.description}
            </p>
            <Link href={x.link}>
              <button>
                Read More <IoIosArrowForward className="blogCard-icon" />
              </button>
            </Link>
            <div className="blogCard-design">
              <div className="blogCard-innerDesign"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
