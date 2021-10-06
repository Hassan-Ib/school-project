import React from "react";
import Image from "next/image";

const IntroCard = ({ children, className, view }) => {
  return (
    <section
      className={
        "m-auto md:flex md:grid-cols-2 mt-4 mb-4 w-11/12 " + className
      }>
      {children}
    </section>
  );
};

export const IntroCardImage = ({ src, alt }) => {
  return (
    <div className="block relative border-2 border-red-500">
      <Image src={src} alt={alt} layout="responsive" width={600} height={400} />
    </div>
  );
};

export const IntroCardButton = ({ children, className, width, height }) => {
  return (
    <button
      className={
        `rounded 
        px-4 py-2
          text-xs
          border-2
         ` + className
      }>
      {children}
    </button>
  );
};

export const IntroCardArticle = ({ children, className }) => {
  return <article className={" " + className}>{children}</article>;
};

export default IntroCard;
