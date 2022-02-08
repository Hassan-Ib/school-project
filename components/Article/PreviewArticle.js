import React from "react";
import Image from "next/image";

const PreviewArticle = ({ article }) => {
  return (
    <div className="bg-white overflow-auto flex-1">
      {article.coverImage ? (
        <section className="relative h-96 overflow-hidden">
          <Image src={article?.coverImage} alt={article?.title} layout="fill" />
        </section>
      ) : null}
      <section className="m-auto overflow-auto pt-8 prose prose-slate">
        {article.title ? (
          <h1 className="capitalize">{article?.title}</h1>
        ) : null}
        {article.markdown ? (
          <section className="">
            {/* <p className="">Read in 4 minutes</p> */}
            <article
              className=""
              dangerouslySetInnerHTML={{ __html: article?.markdown }}
            />
          </section>
        ) : null}
      </section>
    </div>
  );
};
export default PreviewArticle;
