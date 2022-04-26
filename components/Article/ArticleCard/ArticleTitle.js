import React from "react";

const ArticleTitle = ({ title }) => {
  return (
    <h3 className=" text-lg capitalize font-semibold hover:text-blue-800 transition-all duration-150">
      {title}
    </h3>
  );
};

export default ArticleTitle;
