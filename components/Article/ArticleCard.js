import React from "react";
import Image from "next/image";
import ArticleImage from "./../../public/img/mimi-thian-slWBjTGhREQ-unsplash.jpg";
import { Link } from "../Link";

const Article = ({ className }) => {
  return (
    <article className={"max-w-xs"}>
      <div className="block rounded-lg overflow-hidden">
        <Image src={ArticleImage} layout="responsive" alt="article image" />
      </div>
      <div className="mt-4">
        <h4 className=" text-xl font-medium text-blue-800">
          7 Big Myths About AI You Shouldn’t Believe
        </h4>
        <p className="text-blue-800 opacity-80 leading-relaxed text-sm">
          Some people still thinks AI will take over the world, but the truth is
          the likelyhood of that happening is pretty slim
        </p>
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
