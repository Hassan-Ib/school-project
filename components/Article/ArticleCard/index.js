import React from "react";
import { Link } from "../../Link";
import ArticleCover from "./ArticleCover";
import Author from "./Author";
import PropTypes from "prop-types";
import ArticleTitle from "./ArticleTitle";
import FlowButton from "../../Buttons/FlowButton";
import { BsArrowUpRight } from "react-icons/bs";

const Article = ({ slug, title, coverImage, createdAt }) => {
  return (
    <Link href={"/articles/" + slug} className="mx-auto max-w-md">
      <article className=" rounded-lg overflow-hidden bg-white max-w-md p-4 border border-birch-500">
        <ArticleCover coverImage={coverImage} />
        <div className=" p-4  ">
          <ArticleTitle title={title} />
          <Author authorAvatar={coverImage} createdAt={createdAt} />
          <FlowButton
            className="btn btn-xs btn-bg-flow mt-4"
            text={
              <>
                read more <BsArrowUpRight />
              </>
            }
            flowDirection="flow-r"
          ></FlowButton>
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
