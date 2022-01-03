import React, { useState, useRef, useEffect, forwardRef } from "react";
import { BsImage } from "react-icons/bs";
import dynamic from "next/dynamic";
import LocalStorage from "../../utils/localStorage";
import "react-quill/dist/quill.snow.css";
import { AiOutlineCode } from "react-icons/ai";
import Image from "next/image";
// dynamic import Editor;

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const icon = ReactQuill.Quill.import("ui/icons");
// icon["code-block"] = <AiOutlineCode />;

const EditorFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strick",
  "list",
  "bullet",
  "indent",
  "link",
  "align",
  "image",
  "blockquote",
  "code",
  "code-block",
];

// editor / form

const EditArticleForm = forwardRef((props, ref) => {
  const [articleData, setArticleData] = useState({
    title: "",
    coverImage: null,
    markdown: "",
  });

  const titleRef = useRef(null);

  const coverImageRef = useRef(null);

  const onEditorStateChange = (editorState) => {
    setArticleData((prevState) => {
      return { ...prevState, markdown: editorState };
    });
    console.log("articleData", articleData);
  };

  // uplaod cover image handler
  const uploadCoverImage = async (e) => {
    const reader = new FileReader();
    const { files } = e.target;
    let imageUrl;
    reader.addEventListener("load", () => {
      imageUrl = reader.result;
      setArticleData((prevState) => {
        return { ...prevState, coverImage: imageUrl };
      });
    });
    await reader.readAsDataURL(files[0]);
    console.log(files, imageUrl);
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

  // local data handler
  const localStorageUpdate = () => {
    LocalStorage.setLocalData("articleData", articleData);
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
    localStorageUpdate();
  });
  console.log("articlestate in the body", articleData);

  const EditorModule = React.memo({
    toolbar: [
      [{ header: [1, 2, , 3, 4, 5, 6, false] }],
      [
        "bold",
        "italic",
        "underline",
        //   "strike",
        "blockquote",
        "code",
        "code-block",
      ],
      [{ align: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    handlers: {
      image: uploadImage,
    },
  });
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
            className=" hidden"
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
        />

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
        <ReactQuill
          // ref={(ref) => ref}
          theme="snow"
          value={articleData.markdown}
          onChange={onEditorStateChange}
          className="flex-1"
          modules={EditorModule}
          formats={EditorFormats}
        />
      </form>
    </section>
  );
});

EditArticleForm.displayName = "EditArticleForm";

export default EditArticleForm;
