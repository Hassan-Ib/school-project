import React from "react";
import Image from "next/image";
import Paragraph from "./Typograhpy/Paragraph";
import H2 from "./Typograhpy/H2";
import { Link, Button } from "./Link";

const LatestArticle = ({ title, body, image, Id }) => {
  return (
    <article className="m-auto md:grid md:grid-cols-2 my-16 w-11/12">
      <div className="h-full relative">
        <Image
          src={`/img/${image}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <section className="flex flex-col gap-3 items-start justify-center px-8 py-10 md:px-12 text-white bg-birch-800">
        <H2 className="">{title}</H2>
        <Paragraph>{body}</Paragraph>
        <Link
          href={`/articles/${Id}`}
          className="border px-3 py-1 text-sm  border-white rounded capitalize hover:text-gray-500 hover:bg-white">
          read article
        </Link>
      </section>
    </article>
  );
};

export default LatestArticle;
