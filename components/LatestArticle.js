import React from "react";
import Image from "next/image";
import Paragraph from "./Typograhpy/Paragraph";
import H2 from "./Typograhpy/H2";
import { Button } from "./Link";

const LatestArticle = ({ title, desc, image }) => {
  return (
    <article className="m-auto md:grid md:grid-cols-2 my-16 w-11/12">
      <div className="block h-60 md:h-auto relative">
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <section className="flex flex-col items-start justify-center px-8 py-10 md:px-12 text-white bg-birch-800">
        <H2 className="">{title}</H2>
        <Paragraph>{desc}</Paragraph>
        <Button className="border-white">read article</Button>
      </section>
    </article>
  );
};

export default LatestArticle;
