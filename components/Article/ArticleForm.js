import React, { useState, useRef, useEffect, forwardRef } from "react";

import { BsImage } from "react-icons/bs";

const EditArticleForm = forwardRef((props, ref) => {
  const [article, setArticle] = useState({});
  const [coverImage, setCoverImage] = useState(null);

  const ArticleHeaderTextareaRef = useRef(null);

  const coverImageInputRef = useRef(null);

  const uploadCoverImage = (e) => {
    const { files } = e.target;
    console.log(typeof files);
    const imageUrl = URL.createObjectURL(files[0]);
    console.log(imageUrl);
    setCoverImage(imageUrl);
  };

  const revokeBlobOnCoverImageLoad = () => {
    URL.revokeObjectURL(coverImage);
  };

  const addImage = () => {};

  const setSideDataOnFocus = (data) => {
    setSideData({ ...data });
  };

  useEffect(() => {
    ArticleHeaderTextareaRef.current.focus();
    console.log(coverImageInputRef.current.files[0]);
  }, []);
  return (
    <section className="flex flex-1 relative border border-blue-700">
      <div className="w-full flex  flex-1">
        <form
          // name="createArticleForm"
          ref={ref}
          id="createArticleFrom"
          action=""
          className="flex-1 shadow-inner border bg-white px-2 pt-6 md:px-6 md:pt-8 rounded w-full flex flex-col overflow-hidden overflow-y-auto">
          {/*--- cover image ---*/}
          <div className="relative flex items-center gap-4 mb-4 ">
            {coverImage && (
              <div className=" w-60 h-32 inline-block overflow-hidden rounded-md">
                <img
                  src={coverImage}
                  onLoad={revokeBlobOnCoverImageLoad}
                  alt="hello"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}

            <label
              className="cursor-pointer border-2 border-gray-400 px-4 py-2 rounded-sm font-medium "
              htmlFor="cover-image-input">
              {coverImage ? "Change" : "Add a cover image"}
            </label>

            {coverImage && (
              <button
                className=" text-red-500 capitalize hover:underline"
                onClick={() => {
                  setCoverImage("");
                  coverImageInputRef.current.value = null;
                }}>
                {" "}
                remove{" "}
              </button>
            )}

            <input
              ref={coverImageInputRef}
              name="cover-image-input"
              id="cover-image-input"
              type="file"
              accept="image/*"
              className=" hidden"
              onChange={uploadCoverImage}
              data-max-file-size-mb="25"
            />
          </div>

          {/*--- post title ---*/}
          <textarea
            autoFocus={true}
            type="text"
            ref={ArticleHeaderTextareaRef}
            onBlur={setLocalTitle}
            name="article-title"
            id="article-title"
            style={{ minHeight: "content" }}
            className=" text-3xl md:text-4xl lg:text-4xl  capitalize font-extrabold  resize-none outline-none"
            placeholder="new post title here..."></textarea>

          {/*--- upload image ---*/}
          <div className="bg-gray-100 py-2 mb-6">
            <label
              htmlFor="upload-article-image"
              className="font-medium px-6 py-2  cursor-pointer inline-block">
              {" "}
              <BsImage className="inline-block mr-1" /> upload image
            </label>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              name="upload-article-image"
              id="upload-article-image"
            />
          </div>
          {/* --- article body ---*/}
          <textarea
            type="text"
            // onFocus={() => {
            //   setSideDataOnFocus(mockSideData.body);
            // }}
            onChange={setArticleBody}
            name="article-body"
            id="article-body"
            className="block  p-1 w-full h-96 resize-none outline-black text-lg"
            placeholder="Write your article content here . . ."
          />
        </form>
      </div>
      {/*--- explain ---*/}
      {/* {sideData.top === 0 || (
        <div
          className="hidden md:block absolute bg-gray-200 shadow-md px-6 py-4 w-1/3  rounded"
          style={{ top: `${sideData.top}`, left: "100%" }}>
          <div>
            <h3 className="font-bold text-lg mb-4">{sideData.header}</h3>
            <p className=" opacity-70">{sideData.body}</p>
          </div>
        </div>
      )} */}
    </section>
  );
});

EditArticleForm.displayName = "EditArticleForm";

export default EditArticleForm;
