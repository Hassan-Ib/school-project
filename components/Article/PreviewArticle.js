import React from "react";

const PreviewArticle = ({ article }) => {
  return (
    <>
      <section className="text-center max-w-lg m-auto">
        <h1 className="font-semibold text-4xl md:text-5xl pb-2">
          {article?.title}
        </h1>
        <p className="py-2">Read in 4 minutes</p>
        <p className="py-3 ">{article?.title}</p>
        {/* <div className="flex place-content-center gap-3 py-3">
          <span className="rounded-full bg-blue-800 text-white p-3 text-lg flex justify-center items-center">
            <FaLinkedinIn />
          </span>
          <span className="rounded-full bg-blue-800 text-white p-3 text-lg flex justify-center items-center">
            <AiFillFacebook />
          </span>{" "}
          <span className="rounded-full bg-blue-800 text-white p-3 text-lg flex justify-center items-center">
            <AiOutlineTwitter />
          </span>
        </div> */}
      </section>
      <section className="relative my-10 h-56 md:h-64 overflow-hidden rounded-md">
        {/* <img
          src={`/img/${article.image}`}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          // placeholder="blur"
        /> */}
      </section>
      <section className="max-w-2xl m-auto">
        <section
          className=""
          dangerouslySetInnerHTML={{ __html: article?.markdown }}
        />
      </section>
    </>
  );
};

export default PreviewArticle;
