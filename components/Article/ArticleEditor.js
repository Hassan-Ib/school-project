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
    <section className="flex flex-1 overflow-hidden relative border border-blue-700">
      <form
        ref={ref}
        id="createArticleFrom"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="h-full shadow-inner bg-white px-2 pt-6 md:px-6 md:pt-8 pb-4 rounded w-full flex flex-col">
        {/*--- cover image ---*/}

        <div className="relative flex flex-col md:flex-row md:items-center gap-4 mb-4 ">
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
          <label
            className="cursor-pointer border-2 border-gray-400 px-4 py-2 rounded-sm font-medium"
            htmlFor="cover-image-input">
            {article.coverImage ? "Change" : "Add a cover image"}
          </label>

          {article.coverImage && (
            <button
              className=" text-red-500 capitalize hover:underline"
              onClick={removeCoverImage}>
              remove
            </button>
          )}

          <input
            onChange={setCoverImage}
            name="cover-image-input"
            id="cover-image-input"
            type="file"
            accept="image/*"
            className="hidden"
            data-max-file-size-mb="25"
          />
        </div>

        {/*--- post title ---*/}

        <input
          autoFocus={true}
          type="text"
          onChange={setArticleTitle}
          name="article title"
          className=" text-3xl md:text-4xl lg:text-4xl capitalize font-extrabold resize-none outline-none mb-4"
          placeholder="new post title here..."
          value={article.title}
        />

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
