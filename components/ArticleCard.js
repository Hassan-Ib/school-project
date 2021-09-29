import React from "react";
import Image from "next/image";
import cardImage from "./../public/img/christina-wocintechchat-com-fch6vkbouCc-unsplash.jpg";
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
      <div className="block">
        <Image
          src={cardImage}
          layout="responsive"
          alt="graduating student image"
        />
      </div>
      <article className="bg-gray-800 text-white px-6 py-8">
        <h2 className=" text-xl font-bold mb-2">
          Distruptive Technolgies, The demands on 21st century higher education
          institutions and professional practices.
        </h2>
        <p className=" mb-3 text-xs leading-relaxed">
          Our first faculty lecture series debuted in 2021
        </p>
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
