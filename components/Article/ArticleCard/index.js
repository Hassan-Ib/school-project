import React from "react";
import { Link } from "../../Link";
import ArticleCover from "./ArticleCover";
import Author from "./Author";
import PropTypes from "prop-types";
import ArticleTitle from "./ArticleTitle";
const Article = ({ slug, title, coverImage, createdAt }) => {
  return (
    <Link href={"/articles/" + slug} className="mx-auto">
      <article className=" rounded-lg overflow-hidden bg-white max-w-lg ">
        <ArticleCover coverImage={coverImage} />
        <div className=" p-4  ">
          <Author authorAvatar={coverImage} createdAt={createdAt} />
          <ArticleTitle title={title} />
        </div>
      </article>
    </Link>
  );
};

Article.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  slug: PropTypes.string,
};
export default Article;
