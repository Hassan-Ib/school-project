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
        "m-auto md:grid md:grid-cols-2 my-12 w-11/12 max-w-4xl shadow-xl"
      }>
      <article className="py-8 md:py-14 items-start justify-center px-8">
        <H2 className="">Education and Responsibility</H2>
        <Paragraph>
          Our core philosophy is people over process. Our culture has been
          instrumental to our success and has helped us attract and produce
          Amazing students, making work here more satisfying.
        </Paragraph>
        <Button className="bg-black text-white">read about us</Button>
        {/* <div className="absolute right-0  w-6  bg-twine-500 h-full"></div> */}
      </article>
      <div className=" hidden relative md:block">
        <Image
          src={cardImage2}
          alt="article image of a confrence"
          layout="fill"
        />
      </div>
    </section>
  );
};

export default Card;
