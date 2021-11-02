import React from "react";
import Image from "next/image";
import ArticleImage from "./../../public/img/mimi-thian-slWBjTGhREQ-unsplash.jpg";
import H2 from "../Typograhpy/H2";
import Paragraph from "../Typograhpy/Paragraph";
import { Link } from "../Link";
import PropType from "prop-types";

const Article = ({ Id, title, body, image }) => {
  // console.log(props);
  return (
    <article className={" max-w-sm"}>
      <div className="block rounded-lg overflow-hidden">
        <Image
          src={`/img/${image}`}
          layout="responsive"
          width={1000}
          height={600}
          priority
          alt="article image"
        />
      </div>
      <div className="mt-4">
        <H2 className=" text-xl font-medium text-blue-800">{title}</H2>
        <Paragraph className="text-blue-800 opacity-80 leading-relaxed text-sm">
          {body}
        </Paragraph>
        <Link
          className="underline capitalize text-blue-800 opacity-90 text-sm"
          href="/article">
          read in {Id} minute
        </Link>
      </div>
    </article>
  );
};
Article.PropType = {
  title: PropType.string,
  body: PropType.string,
  Id: PropType.number,
};
export default Article;
