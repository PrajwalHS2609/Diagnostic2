import React from "react";
import "./HomeBlog.css";
import HomeBlogHead from "./HomeBlogHead";
import HomeBlogCard from "./HomeBlogCard";
const HomeBlog = () => {
  return (
    <div className="homeBlog-container">
      <HomeBlogHead />
     <div className="homeBlog-content">
     <HomeBlogCard />
     </div>
    </div>
  );
};

export default HomeBlog;
