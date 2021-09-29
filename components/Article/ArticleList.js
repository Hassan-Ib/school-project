import React from "react";
import Title from "../Title";
import ArticleCard from "./ArticleCard";
const ArticleSection = ({ articles = [] }) => {
  return (
    <section>
      {/* {articles.length ? 
      (<ul className="">
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
      </ul>) : (<p>no articles posted yet :)!</p>)
      } */}
      <ul className=" flex flex-col items-center gap-10 max-w-5xl mx-auto sm:grid sm:grid-cols-2 lg:grid-cols-3">
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
        <li>
          <ArticleCard />
        </li>
      </ul>
    </section>
  );
};

export default ArticleSection;
