import React from "react";
import cardImage from "./../public/img/caleb-woods-RIcMwDLk1wo-unsplash.jpg";
import Image from "next/image";
import Paragraph from "./Typograhpy/Paragraph";
import H2 from "./Typograhpy/H2";

const Card = () => {
  return (
    <section
      className=" 
    w-11/12 
    m-auto 
    md:grid md:grid-cols-2
     shadow-2xl
        mt-4
        mb-4
    ">
      <article
        className=" 
      px-4
      py-8">
        <H2 className="">Education and Responsibility</H2>
        <Paragraph>
          Our core philosophy is people over process. Our culture has been
          instrumental to our success and has helped us attract and produce
          Amazing students, making work here more satisfying.
        </Paragraph>
        <button
          className="
        bg-gray-800 
        text-white 
        rounded 
        px-4 py-3
         uppercase
          text-xs
        ">
          read about our culture
        </button>
      </article>
      <div className="hidden md:block">
        <Image
          src={cardImage}
          layout="responsive"
          alt="graduating student image"
          width={700}
          height={400}
        />
      </div>
    </section>
  );
};

export default Card;
