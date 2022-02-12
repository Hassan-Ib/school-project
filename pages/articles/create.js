import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ArticleEditor, PreviewArticle } from "../../components";
import LocalStorage from "../../utils/localStorage";
import { useSession, signIn } from "next-auth/react";

const CreateArticle = () => {
  const [previewState, setPreview] = useState(false);

  const { status } = useSession();

  const formRef = useRef(null);

  const publishArticle = async (e) => {
    const articleData = LocalStorage.getLocalData(
      LocalStorage.articleLocalStorageKey
    );
    console.log("local data ", articleData);
    try {
      const res = await fetch("/api/articles", {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(articleData),
      });
      console.log(res);
    } catch (error) {
      console.log("articleFetchError", error);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex w-full h-[100vh] items-center justify-center text-3xl capitalize font-bold">
        {" "}
        loading...
      </div>
    );
  }
  if (status !== "authenticated") {
    signIn();
    return null;
  }

  return (
    <main className="h-screen overflow-hidden bg-gray-200 flex place-content-center  lg:place-content-center">
      <div className="px-1 w-full lg:w-3/4  lg:px-12 flex flex-col flex-1">
        {/*--- header ---*/}
        <section className="flex pt-4 pb-2 capitalize">
          <p className="flex-1 font-semibold">create article</p>
          <div className="flex gap-4 capitalize">
            <button
              className={`relative z-10 border-b-2 border-blue-800 border-opacity-0 capitalize py-1 transition-all duration-300 hover:before:absolute hover:before:-z-10 hover:before:bg-blue-300 hover:before:bg-opacity-30 hover:before:w-full hover:before:h-[95%] hover:before:transform hover:before:scale-x-150
                    ${
                      !previewState &&
                      "font-semibold border-opacity-100 hover:before:border-b-2 hover:before:border-blue-800"
                    }`}
              onClick={() => {
                setPreview(false);
              }}>
              edit
            </button>
            <button
              className={`relative z-10 border-b-2 border-blue-800 border-opacity-0 capitalize py-1 transition-all duration-300 hover:before:absolute hover:before:-z-10 hover:before:bg-blue-300 hover:before:bg-opacity-30 hover:before:w-full hover:before:h-[95%] hover:before:transform hover:before:scale-x-125
                  ${
                    previewState &&
                    "font-semibold border-opacity-100 hover:before:border-b-2 hover:before:border-blue-800 "
                  }`}
              onClick={() => {
                setPreview(true);
              }}>
              {" "}
              preview
            </button>
          </div>
        </section>

        {/*--- form ---*/}

        {!previewState ? <ArticleEditor ref={formRef} /> : <PreviewArticle />}

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

export default CreateArticle;
