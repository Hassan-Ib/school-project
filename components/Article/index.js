import React from "react";
import Image from "next/image";
import ArticleImage from "./../../public/img/mimi-thian-slWBjTGhREQ-unsplash.jpg";
import H2 from "../Typograhpy/H2";
import Paragraph from "../Typograhpy/Paragraph";
import { Link } from "../Link";

const Article = () => {
  return (
    <article className={" max-w-sm"}>
      <div className="block rounded-lg overflow-hidden">
        <Image src={ArticleImage} layout="responsive" alt="article image" />
      </div>
      <div className="mt-4">
        <H2 className=" text-xl font-medium text-blue-800">
          7 Big Myths About AI You Shouldn’t Believe
        </H2>
        <Paragraph className="text-blue-800 opacity-80 leading-relaxed text-sm">
          Some people still thinks AI will take over the world, but the truth is
          the likelyhood of that happening is pretty slim
        </Paragraph>
        <Link
          className="underline capitalize text-blue-800 opacity-90 text-sm"
          href="article">
          read in 4 minute
        </Link>
      </div>
    </article>
  );
};

export default Article;
