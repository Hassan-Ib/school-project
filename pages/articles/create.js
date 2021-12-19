// import Image from "next/image";
// import { getLayout } from "../../components";
import Image from "next/image";
import { useState, useEffect, useRef, forwardRef } from "react";
import { BsImage } from "react-icons/bs";

const mockSideData = {
  title: {
    top: "30px",
    header: "Writing a Great Post",
    body: `
    Title Think of your post title as a super short (but compelling!)
    description — like an overview of the actual post in one short sentence.
    Use keywords where appropriate to help ensure people can find your post by
    search.`,
  },
  body: {
    top: "100px",
    header: "Editor Basics",
    body: `
      Use Markdown to write and format posts.
      Commonly used syntax
      You can use Liquid tags to add rich content such as Tweets, YouTube videos, etc.
      In addition to images for the post's content, you can also drag and drop a cover image`,
  },
};

const CreateArticle = () => {
  const formRef = useRef(null);
  const publishArticle = (e) => {
    // console.log(formRef.current);
    const formData = new FormData(formRef.current);
    console.log("formData", formData);
    const formValues = Object.fromEntries(formData.entries());
    const coverImage = formData.get("cover-image-input");
    console.log("coverImage", coverImage.file);
    console.log(formValues);
  };

  return (
    <main className="bg-gray-200 flex place-content-center h-screen overflow-hidden lg:place-content-start">
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
        <CreateArticleBody ref={formRef} />
        {/*--- foootet ---*/}
        <footer className=" flex flex-wrap gap-3 md:gap-4 py-2 md:py-8 text-sm md:text-base md:tracking-wide">
          <button
            onClick={publishArticle}
            className="bg-blue-700 text-white font-semibold capitalize px-4 py-2 rounded">
            publish
          </button>
          <button className="bg-gray-300 tracking-wide font-semibold capitalize px-4 py-2 rounded">
            {" "}
            save draft{" "}
          </button>
          <button className="revert underline"> Revert new changes </button>
          {/* hint goes below */}
        </footer>
      </div>
    </main>
  );
};

const CreateArticleBody = forwardRef((props, ref) => {
  const [sideData, setSideData] = useState({
    top: 0,
    header: "",
    body: "",
  });
  const [coverImage, setCoverImage] = useState(null);
  const ArticleHeaderTextareaRef = useRef(null);

  const uploadCoverImage = (e) => {
    console.log(e.target.files);
    const imageUrl = URL.createObjectURL(e.target.files[0]);
    console.log(imageUrl);
    setCoverImage(imageUrl);
    // URL.revokeObjectURL(imageUrl);
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
  }, []);
  return (
    <section className="flex flex-1 relative ">
      <div className="w-full flex flex-col flex-1 overflow-hidden border-2 border-black">
        <form
          // name="createArticleForm"
          ref={ref}
          id="createArticleFrom"
          action=""
          className="min-h-full shadow-inner border bg-white px-2 pt-6 md:px-6 md:pt-8 rounded w-full flex flex-col  overflow-y-auto">
          {/*--- cover image ---*/}
          <div className="relative flex items-center gap-4 border border-black mb-4 ">
            {coverImage && (
              <img
                src={coverImage}
                onLoad={revokeBlobOnCoverImageLoad}
                width="150"
                height="50"
                alt="hello"
              />
            )}

            <label
              className="cursor-pointer border-2 border-gray-400 px-4 py-2 rounded-sm font-medium capitalize"
              htmlFor="cover-image-input">
              {coverImage ? "change" : "Add a cover image"}
            </label>

            {coverImage && (
              <button
                className=" text-red-500 capitalize hover:underline"
                onClick={() => {
                  setCoverImage(null);
                }}>
                {" "}
                remove{" "}
              </button>
            )}

            <input
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
            onFocus={(e) => {
              setSideDataOnFocus(mockSideData.title);
            }}
            // rows="1"
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
            onFocus={() => {
              setSideDataOnFocus(mockSideData.body);
            }}
            name="article-body"
            id="article-body"
            className="block  p-1 w-full flex-1 resize-none outline-black text-lg"
            placeholder="Write your article content here . . ."
          />
        </form>
      </div>
      {/*--- explain ---*/}
      {sideData.top === 0 || (
        <div
          className="hidden md:block absolute bg-gray-200 shadow-md px-6 py-4 w-1/3  rounded"
          style={{ top: `${sideData.top}`, left: "100%" }}>
          <div>
            <h3 className="font-bold text-lg mb-4">{sideData.header}</h3>
            <p>{sideData.body}</p>
          </div>
        </div>
      )}
    </section>
  );
});

export default CreateArticle;

export const getServerSideProps = () => {
  return {
    props: {
      data: [],
    },
  };
};
