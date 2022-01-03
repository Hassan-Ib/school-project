import React from "react";
import Image from "next/image";

const PreviewArticle = ({ article }) => {
  return (
    <div className="bg-white overflow-auto max-w-3xl flex-1">
      {article.coverImage && (
        <section className="relative h-96 overflow-hidden">
          <Image src={article?.coverImage} alt={article?.title} layout="fill" />
        </section>
      )}
      <section className="m-auto overflow-auto pt-8 prose prose-slate">
        {article.title && <h1 className="">{article?.title}</h1>}
        {article.markdown && (
          <section className="">
            {/* <p className="">Read in 4 minutes</p> */}
            <section
              className=""
              dangerouslySetInnerHTML={{ __html: article?.markdown }}
            />
          </section>
        )}
      </section>
    </div>
  );
};
export default PreviewArticle;
