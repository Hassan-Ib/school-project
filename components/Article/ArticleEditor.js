import React, { useState, useRef, useEffect, forwardRef, useMemo } from "react";
import LocalStorage from "../../utils/localStorage";
import Image from "next/image";
import Editor from "./Editor";
import TipTapEditor from "./TipTapEditor";
import { useArticle } from "../../hooks/useArticle";

const EditArticleForm = forwardRef((_, ref) => {
  const { article, setArticleBody, setArticleTitle, setCoverImage } =
    useArticle();

  return (
    <section className="flex flex-1 overflow-hidden relative border border-blue-700">
      <form
        ref={ref}
        id="createArticleFrom"
        onClick={(e) => e.preventDefault()}
        className="h-full shadow-inner bg-white px-2 pt-6 md:px-6 md:pt-8 pb-4 rounded w-full flex flex-col">
        {/*--- cover image ---*/}

        <div className="relative flex items-center gap-4 mb-4 ">
          {article?.coverImage ? (
            <div className="relative w-60 h-32 inline-block overflow-hidden rounded-md">
              <Image src={article.coverImage} alt="hello" layout="fill" />
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
