import React, { useState, useRef, useEffect, forwardRef, useMemo } from "react";
import LocalStorage from "../../utils/localStorage";
import Image from "next/image";
import Editor from "./Editor";

const EditArticleForm = forwardRef((props, ref) => {
  // const [] = useState();
  const [articleData, setArticleData] = useState({
    title: "",
    coverImage: null,
    markdown: "",
  });

  const titleRef = useRef(null);
  const coverImageRef = useRef(null);
  let editorRef = useRef(null);
  console.log("editorRef", editorRef);

  const onEditorStateChange = (editorState) => {
    setArticleData((prevState) => {
      return { ...prevState, markdown: editorState };
    });
  };

  const uploadImage = () => {};

  // uplaod cover image handler

  const uploadCoverImage = async (e) => {
    const { files } = e.target;
    const reader = new FileReader();
    reader.addEventListener("load", async () => {
      const imageUrl = reader.result;
      try {
        const response = await fetch("/api/articles/upload-Image", {
          headers: {
            "Content-type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ imageUrl }),
        });

        const data = await response.json();
        console.log(data);
        if (!data.success) throw new Error("image upload error");
        setArticleData((prevState) => {
          return { ...prevState, coverImage: imageUrl };
        });
      } catch (error) {
        console.log("api call upload error ", error, error.message);
      }
    });
    reader.readAsDataURL(files[0]);
  };

  // remove cover image handler
  const removeCoverImage = () => {
    coverImageRef.current.value = null;
    setArticleData((prevState) => {
      return { ...prevState, coverImage: null };
    });
  };

  // set article title
  const setTitle = () => {
    const title = titleRef.current.value;
    setArticleData((prevState) => {
      return { ...prevState, title };
    });
  };

  // Local data fetching effect

  useEffect(() => {
    titleRef.current.focus();
    const data = LocalStorage.getLocalData("articleData");
    if (!data) return;
    setArticleData(data);
  }, []);

  // Local data update effect

  useEffect(() => {
    LocalStorage.setLocalData("articleData", articleData);
  }, [articleData]);

  // console.log("articlestate in the body", articleData);
  // presentation

  return (
    <section className="flex flex-1 overflow-hidden relative border border-blue-700">
      <form
        ref={ref}
        id="createArticleFrom"
        action=""
        className="h-full shadow-inner border bg-white px-2 pt-6 md:px-6 md:pt-8 pb-4 rounded w-full flex flex-col overflow-hidden overflow-y-auto">
        {/*--- cover image ---*/}
        <div className="relative flex items-center gap-4 mb-4 ">
          {articleData.coverImage && (
            <div className="relative w-60 h-32 inline-block overflow-hidden rounded-md">
              <Image src={articleData.coverImage} alt="hello" layout="fill" />
            </div>
          )}
          <label
            className="cursor-pointer border-2 border-gray-400 px-4 py-2 rounded-sm font-medium "
            htmlFor="cover-image-input">
            {articleData.coverImage ? "Change" : "Add a cover image"}
          </label>

          {articleData.coverImage && (
            <button
              className=" text-red-500 capitalize hover:underline"
              onClick={removeCoverImage}>
              remove
            </button>
          )}

          <input
            ref={coverImageRef}
            onChange={uploadCoverImage}
            name="cover-image-input"
            id="cover-image-input"
            type="file"
            accept="image/*"
            className="hidden"
            data-max-file-size-mb="25"
          />
        </div>

        {/*--- post title ---*/}

        {/* <ReactQuill /> */}

        <input
          autoFocus={true}
          type="text"
          ref={titleRef}
          onChange={setTitle}
          name="article-title"
          id="article-title"
          className=" text-3xl md:text-4xl lg:text-4xl capitalize font-extrabold resize-none outline-none mb-4"
          placeholder="new post title here..."
          value={articleData.title}
        />

        {/* --- article body ---*/}
        <Editor
          ref={editorRef}
          onEditorStateChange={onEditorStateChange}
          editorState={articleData.markdown}
        />
      </form>
    </section>
  );
});

EditArticleForm.displayName = "EditArticleForm";

export default EditArticleForm;
