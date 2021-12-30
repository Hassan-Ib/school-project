import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { EditArticleForm, PreviewArticle } from "../../components";

const CreateArticle = () => {
  const [previewState, setPreview] = useState(false);

  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    setArticleData(
      window.localStorage.getItem("artileData") || {
        title: "",
        coverImage: "",
        markdown: "",
      }
    );
  }, []);

  const formRef = useRef(null);

  const publishArticle = (e) => {
    const formData = new FormData(formRef.current);
    console.log("formData", formData);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);
  };

  useEffect(() => {
    console.log("articleDATA", articleData);
  });

  return (
    <main className="bg-gray-200 flex place-content-center  lg:place-content-center">
      <div className="capitalize px-1 w-full lg:w-3/4  lg:px-12 flex flex-col">
        {/*--- header ---*/}
        <section className="flex pt-4 pb-2">
          <p className="flex-1 font-semibold">create article</p>
          <div className="flex gap-4 capitalize">
            <button className=" border-b-2 border-blue-800 font-semibold capitalize hover:bg-blue-300 hover:bg-opacity-30 py-1 transition-all">
              edit
            </button>
            <button
              className="border-b border-transparent capitalize"
              onClick={() => {
                setPreview(!previewState);
              }}>
              preview
            </button>
          </div>
        </section>

        {/*--- form ---*/}
        {!previewState ? (
          <EditArticleForm ref={formRef} />
        ) : (
          <PreviewArticle htmlContent={articleData} />
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
