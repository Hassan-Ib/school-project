import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { EditArticleForm, PreviewArticle } from "../../components";
import LocalStorage from "../../utils/localStorage";

const CreateArticle = () => {
  const [previewState, setPreview] = useState(false);
  const [article, setArticle] = useState({
    coverImage: "",
    title: "",
    markdown: "",
  });

  const formRef = useRef(null);

  const publishArticle = (e) => {
    // const formData = new FormData(formRef.current);
    // console.log("formData", formData);
    // const formValues = Object.fromEntries(formData.entries());
    // console.log(formValues);
  };

  const uploadImage = () => {};

  return (
    <main className="h-screen overflow-hidden bg-gray-200 flex place-content-center  lg:place-content-center">
      <div className="capitalize px-1 w-full lg:w-3/4  lg:px-12 flex flex-col flex-1">
        {/*--- header ---*/}
        <section className="flex pt-4 pb-2">
          <p className="flex-1 font-semibold">create article</p>
          <div className="flex gap-4 capitalize">
            <button
              onClick={() => {
                setPreview(false);
              }}
              className=" hover--btn border-b-2 border-blue-800 font-semibold capitalize hover:bg-blue-300 hover:bg-opacity-30 py-1 transition-all">
              edit
            </button>
            <button
              className=" hover--btn border-b border-transparent capitalize"
              onClick={() => {
                setPreview(true);
                const article = LocalStorage.getLocalData("articleData");
                setArticle(article);
              }}>
              preview
            </button>
          </div>
        </section>

        {/*--- form ---*/}
        {!previewState ? (
          <EditArticleForm ref={formRef} />
        ) : (
          <PreviewArticle article={article} />
        )}
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
