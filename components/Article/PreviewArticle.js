import React from "react";
import Image from "next/image";

const PreviewArticle = ({ article }) => {
  const revokeBlobOnCoverImageLoad = () => {
    URL.revokeObjectURL(article.coverImage);
  };
  return (
    <div className="bg-white overflow-auto max-w-3xl">
      <section className="relative h-96 overflow-hidden">
        <Image src={article?.coverImage} alt={article?.title} layout="fill" />
      </section>

      <section className="m-auto overflow-auto pt-8 prose prose-slate">
        <h1 className="">{article?.title}</h1>
        <p className="">Read in 4 minutes</p>
        <section className="">
          <section
            className=""
            dangerouslySetInnerHTML={{ __html: article?.markdown }}
          />
        </section>
      </section>
    </div>
  );
};

export default PreviewArticle;
