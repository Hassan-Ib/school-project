import React from "react";
import Image from "next/image";
import Paragraph from "./Typograhpy/Paragraph";
import H2 from "./Typograhpy/H2";
import { Button } from "./Link";
import cardImage2 from "../public/img/leon-wu-LLfRMRT-9AY-unsplash.jpg";

const Card = () => {
  return (
    <section
      className={
        "m-auto md:grid md:grid-cols-2 my-12 w-11/12  border-opacity-40 shadow-xl"
      }>
      <article className=" py-14 flex flex-col items-start justify-center px-8 relative">
        <H2 className="">Education and Responsibility</H2>
        <Paragraph>
          Our core philosophy is people over process. Our culture has been
          instrumental to our success and has helped us attract and produce
          Amazing students, making work here more satisfying.
        </Paragraph>
        <Button>read about our culture</Button>
        {/* <div className="absolute right-0  w-6  bg-twine-500 h-full"></div> */}
      </article>
      <div className=" hidden relative md:block">
        {/* <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          // layout="responsive"
          // width={300}
          // height={200}
        /> */}
        <image
          src={cardImage2}
          alt="article image of a confrence"
          className="block object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Card;
