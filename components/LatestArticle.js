import React from "react";
import Image from "next/image";
import Paragraph from "./Typograhpy/Paragraph";
import H2 from "./Typograhpy/H2";
import { LinkButton } from "./Buttons";
const LatestArticle = ({ title, body, image, Id }) => {
  return (
    <article className="m-auto md:grid md:grid-cols-2 my-12 w-11/12">
      <div className=" h-80 md:h-full relative">
        <Image
          src={`/img/${image}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          // placeholder="blur"
          priority="true"
        />
      </div>
      <section className="flex flex-col gap-3 items-start justify-center px-8 py-10 md:px-12 md:py-14 text-white bg-gradient-to-br from-birch-900 to-slate-800 bg-[#1c1901]">
        <H2 className="">{title}</H2>
        <Paragraph>{body}</Paragraph>
        <LinkButton
          href={`/articles/${Id}`}
          className="btn btn-sm hover:text-black hover:bg-white">
          read article
        </LinkButton>
      </section>
    </article>
  );
};

export default LatestArticle;
