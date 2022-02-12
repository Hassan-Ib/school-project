import React, { useState } from "react";
import Image from "next/image";
import LocalStorage from "../../utils/localStorage";
import { useArticle } from "../../hooks/useArticle";
const PreviewArticle = () => {
  const { article } = useArticle();

  console.log("PREVIEW", article.body);

  return (
    <div className="bg-white overflow-auto flex-1">
      {article.coverImage ? (
        <section className="relative h-96 overflow-hidden">
          <Image src={article?.coverImage} alt={article?.title} layout="fill" />
        </section>
      ) : null}
      <section className="m-auto overflow-auto pt-8 prose prose-sm sm:prose lg:prose-lg ">
        {article.title ? (
          <h1 className="capitalize">{article?.title}</h1>
        ) : null}
        {article.body ? (
          <section className="">
            {/* <p className="">Read in 4 minutes</p> */}
            <article
              className=""
              dangerouslySetInnerHTML={{ __html: article?.body }}
            />
          </section>
        ) : null}
      </section>
    </div>
  );
};
export default PreviewArticle;
