import React from "react";
import PropType from "prop-types";
import cardImage from "./../public/img/caleb-woods-RIcMwDLk1wo-unsplash.jpg";
import Image from "next/image";

const Card = () => {
  return (
    <section
      className=" 
    w-11/12 
    m-auto 
    px-4 py-8 
    md:grid md:grid-cols-2
     shadow-2xl
        mt-4
        mb-4
    ">
      <article>
        <h2 className=" text-xl font-bold mb-2">
          Education and Responsibility
        </h2>
        <p className=" mb-3 text-xs leading-relaxed">
          Our core philosophy is people over process. Our culture has been
          instrumental to our success and has helped us attract and produce
          Amazing students, making work here more satisfying.
        </p>
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
        <Image src={cardImage} alt="graduating student image" />
      </div>
    </section>
  );
};

// Card.PropType = {
//     imageData : PropType.object
// }

export default Card;
