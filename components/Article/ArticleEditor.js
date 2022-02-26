import React, { forwardRef } from "react";
import Image from "next/image";
import TipTapEditor from "./TipTapEditor";
import { useCreateArticle } from "../../hooks/useCreateArticle";
import spinner from "../../public/svg/spinner.gif";

const EditArticleForm = forwardRef((_, ref) => {
  const {
    article,
    coverImageLoading,
    setArticleBody,
    setArticleTitle,
    setCoverImage,
    removeCoverImage,
  } = useCreateArticle();

  // console.log("article editor commit");

  return (
    <section className="flex-1 flex overflow-hidden border border-blue-700 ">
      <form
        ref={ref}
        id="createArticleFrom"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="relative flex-1 overflow-auto shadow-inner bg-white px-2 pb-4 md:px-6  w-full flex flex-col">
        {/*--- cover image ---*/}

        <div className="relative flex flex-col md:flex-row md:items-center gap-4 mb-4 mt-4">
          {article?.coverImage ? (
            <div className="relative w-60 h-32 inline-block overflow-hidden rounded-md">
              <Image
                src={article.coverImage.url}
                height={article.coverImage.height}
                width={article.coverImage.width}
                alt="cover image"
              />
            </div>
          ) : null}
          {coverImageLoading ? (
            <div>
              <Image
                src={spinner}
                height="50px"
                width="50px"
                alt="image loading spinner"
              />
            </div>
          ) : null}
          {/* <button className="" onClick={setCoverImage}>
          {article.coverImage ? "Change" : "Add a cover image"}
          </button> */}
          <label
            className="relative  bg-white cursor-pointer border-2 border-gray-400 px-4 py-2 rounded-sm font-medium focus-within:border-2 focus-within:border-black"
            htmlFor="cover-image-input">
            {article.coverImage ? "Change" : "Add a cover image"}
            <input
              onChange={setCoverImage}
              name="cover image input"
              id="cover-image-input"
              type="file"
              accept="image/*"
              className="absolute w-[1px] h-[1px] overflow-hidden p-0 whitespace-nowrap "
              data-max-file-size-mb="25"
            />
          </label>

          {article.coverImage && (
            <button
              className=" text-red-500 capitalize hover:underline"
              onClick={removeCoverImage}>
              remove
            </button>
          )}
        </div>

        {/*--- post title ---*/}
        <div className="flex flex-col">
          <textarea
            autoFocus={true}
            type="text"
            onChange={setArticleTitle}
            name="article title"
            className="text-3xl h-fit md:text-4xl lg:text-4xl capitalize font-extrabold resize-none outline-none mb-4 border border-black"
            placeholder="new post title here..."
            value={article.title}
          />
          {/* description */}

          <textarea
            type="text"
            name="article short description"
            className=" text-xl md:text-2xl  font-bold resize-none outline-none mb-4"
            placeholder="article short description..."
          />
        </div>
        {/* --- article body ---*/}
        <TipTapEditor
          articleBody={article.body}
          setArticleBody={setArticleBody}
        />
      </form>
    </section>
  );
});

EditArticleForm.displayName = "EditArticleForm";

export default EditArticleForm;
