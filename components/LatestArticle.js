import React from "react";
import Image from "next/image";
import LinkButton from "./Buttons/Link";
const LatestArticle = ({ title, body, coverImage, slug }) => {
  return (
    <article
      className={
        coverImage?.url
          ? "md:grid md:grid-cols-2 w-11/12 mx-auto"
          : "mx-auto my-12  max-w-2xl"
      }>
      {coverImage?.url ? (
        <div className=" h-80 md:h-full relative">
          <Image
            src={coverImage.url}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority="true"
          />
        </div>
      ) : null}
      <section className="flex flex-col gap-3 items-start justify-center px-8 py-10 md:px-12 md:py-14 text-white bg-gradient-to-br from-birch-900 to-slate-800 bg-[#1c1901]">
        <h2 className="text-xl capitalize font-semibold mb-4">{title}</h2>
        {/* <p>{body}</p> */}
        <LinkButton
          href={`/articles/${slug}`}
          className="btn btn-sm hover:text-black hover:bg-white">
          read article
        </LinkButton>
      </section>
    </article>
  );
};

export default LatestArticle;
