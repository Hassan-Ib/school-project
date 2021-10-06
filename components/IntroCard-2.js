import React from "react";
import Image from "next/image";
import cardImage from "./../public/img/christina-wocintechchat-com-fch6vkbouCc-unsplash.jpg";
import Paragraph from "./Typograhpy/Paragraph";
import H2 from "./Typograhpy/H2";

const ArticleCard = () => {
  return (
    <section
      className=" 
            m-auto 
            px-2 py-8 
            md:grid md:grid-cols-2
            mt-4
            mb-4
             w-11/12
        ">
      <div className="block relative ">
        <Image
          src={cardImage}
          layout="responsive"
          alt="graduating student image"
          width={700}
          height={400}
        />
      </div>
      <article className="bg-gray-800 text-white px-6 py-8">
        <H2 className=" text-xl font-bold mb-2">
          Distruptive Technolgies, The demands on 21st century higher education
          institutions and professional practices.
        </H2>
        <Paragraph>Our first faculty lecture series debuted in 2021</Paragraph>
        <button
          className=" 
        rounded 
        px-4 py-2
         uppercase
          text-xs
          border-2
        ">
          Read Article
        </button>
      </article>
    </section>
  );
};

export default ArticleCard;
