import React from "react";
import Image from "next/image";
import Paragraph from "./Typograhpy/Paragraph";
import H2 from "./Typograhpy/H2";
import { Button } from "./Link";

const LatestArticle = ({ title, desc, image }) => {
  return (
    <section className="m-auto md:grid md:grid-cols-2 my-16">
      <div className="block relative">
        <Image
          src={image.src}
          alt={image.alt}
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
      <article className="flex flex-col items-start justify-center p-8 md:px-12 text-white bg-black">
        <H2 className="">{title}</H2>
        <Paragraph>{desc}</Paragraph>
        <Button className="border-white">read article</Button>
      </article>
    </section>
  );
};

export default LatestArticle;
