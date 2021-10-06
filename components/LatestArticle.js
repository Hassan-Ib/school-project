import React from "react";
import Image from "next/image";
import Paragraph from "./Typograhpy/Paragraph";
import H2 from "./Typograhpy/H2";
import { Button } from "./Link";

const LatestArticle = ({ title, desc, image }) => {
  return (
    <section className="m-auto md:flex mt-4 mb-4 w-11/12 ">
      <div className="block relative md:w-4/5 ">
        <Image
          src={image.src}
          alt={image.alt}
          layout="responsive"
          width={600}
          height={400}
        />
      </div>
      <article className="flex flex-col items-start justify-center">
        <H2 className="">{title}</H2>
        <Paragraph>{desc}</Paragraph>
        <Button>read article</Button>
      </article>
    </section>
  );
};

export default LatestArticle;
