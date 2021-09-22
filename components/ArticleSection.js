import React from "react";
import Title from "./Title";
import Article from "./Article";
const ArticleSection = () => {
  return (
    <section>
      <Title text={"Articles"} />
      <ul className="">
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
        <li>
          <Article />
        </li>
      </ul>
    </section>
  );
};

export default ArticleSection;
