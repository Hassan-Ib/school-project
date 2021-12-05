// import Image from "next/image";
import { getLayout } from "../../components";
import { useState, useEffect } from "react";
import { BsImage } from "react-icons/bs";

const mockSideData = {
  title: {
    header: "Writing a Great Post",
    body: `
    Title Think of your post title as a super short (but compelling!)
    description — like an overview of the actual post in one short sentence.
    Use keywords where appropriate to help ensure people can find your post by
    search.`,
  },
  body: {
    header: "Editor Basics",
    body: `
      Use Markdown to write and format posts.
      Commonly used syntax
      You can use Liquid tags to add rich content such as Tweets, YouTube videos, etc.
      In addition to images for the post's content, you can also drag and drop a cover image`,
  },
};

const CreateArticle = () => {
  return (
    <main className="bg-gray-200 flex place-content-center h-screen overflow-hidden">
      <div className="capitalize px-1 w-full lg:w-3/4 h-screen lg:px-12 flex flex-col">
        {/*--- header ---*/}
        <section className="flex pt-6 ">
          <p className="flex-1 font-semibold">create article</p>
          <div className="flex gap-4 capitalize">
            <button className=" border-b-2 border-blue-800 font-semibold capitalize hover:bg-blue-300 hover:bg-opacity-30 py-1 transition-all">
              edit
            </button>
            <button className="border-b border-transparent capitalize">
              preview
            </button>
          </div>
        </section>

        {/*--- form ---*/}
        <CreateArticleBody />
        {/*--- foootet ---*/}
        <CreateArticleFooter />
      </div>
    </main>
  );
};

const CreateArticleFooter = () => (
  <footer className=" flex flex-wrap gap-3 md:gap-4 py-2 md:py-8 text-sm md:text-base md:tracking-wide">
    <button className="bg-blue-700 text-white font-semibold capitalize px-4 py-2 rounded">
      publish
    </button>
    <button className="bg-gray-300 tracking-wide font-semibold capitalize px-4 py-2 rounded">
      {" "}
      save draft{" "}
    </button>
    <button className="revert underline"> Revert new changes </button>
    {/* hint goes below */}
  </footer>
);

const CreateArticleBody = () => {
  const [sideData, setSideData] = useState({
    top: 0,
    header: "",
    body: "",
  });

  const getSidePositonAndSet = (e, data) => {
    let { top, height } = e.target.getBoundingClientRect();
    top = top + height / 2;
    setSideData({ top, ...data });
  };

  // useEffect(() => {
  //   const titleInput = document.querySelector("#article-title");
  //   titleInput.focus();
  // }, []);
  return (
    <section className="flex flex-1 relative">
      <div className="w-full flex flex-col  ">
        <form
          action=""
          className="shadow-inner border bg-white px-2 md:px-12 py-6 md:py-12 rounded w-full flex flex-col flex-1">
          {/*--- cover image ---*/}
          <label
            className="self-start cursor-pointer normal-case border-2 border-gray-400 px-4 py-2 rounded-sm font-medium mb-8"
            htmlFor="cover-image-input">
            Add a cover image
          </label>
          <input
            name="cover-image-input"
            id="cover-image-input"
            type="file"
            accept="image/*"
            className=" hidden"
            data-max-file-size-mb="25"
          />
          {/*--- post title ---*/}
          <textarea
            onFocus={(e) => {
              getSidePositonAndSet(e, mockSideData.title);
            }}
            name="article-title"
            id="article-title"
            className="text-3xl md:text-4xl lg:text-5xl capitalize font-extrabold resize-none outline-none"
            placeholder="new post title here..."></textarea>

          {/*--- upload image ---*/}
          <div className="bg-gray-100 py-2 mb-8">
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
            onFocus={(e) => {
              getSidePositonAndSet(e, mockSideData.body);
            }}
            name="article-body"
            id="article-body"
            className="block flex-1 p-1 w-full resize-none  outline-none text-lg"
            placeholder="Write your article content here . . ."></textarea>
        </form>
      </div>
      {/*--- explain ---*/}
      <div
        className="absolute bg-gray-200 shadow-md px-6 py-4 w-1/2 md:w-1/4  rounded"
        style={{ top: `${sideData.top}px`, left: "45%" }}>
        <div>
          <h3 className="font-bold text-lg mb-4">{sideData.header}</h3>
          <p>{sideData.body}</p>
        </div>
      </div>
    </section>
  );
};

// CreateArticle.getLayout = getLayout;

export default CreateArticle;
