import { useState, useRef } from "react";
import { ArticleEditor, Loader } from "../../components";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import usePublishArticle from "../../hooks/usePublishArticle";
import SubmitButton from "../../components/Buttons/SubmitButton";
import ArticleEditorHeader from "../../components/Article/ArticleEditorHeader";

const DynamicPreviewArticle = dynamic(
  () => import("../../components/Article/PreviewArticle"),
  {
    loading: Loader,
  }
);

const CreateArticle = () => {
  const router = useRouter();
  const [previewState, setPreview] = useState(false);
  const { publishArticle, isLoading, error } = usePublishArticle();
  const formRef = useRef(null);

  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      router.replace("/auth/log-in");
    },
  });

  if (status === "loading") {
    return (
      <div className="flex w-full h-screen items-center justify-center text-3xl capitalize font-bold">
        {" "}
        loading...
      </div>
    );
  }

  return (
    <main className="absolute inset-0 overflow-hidden bg-gray-200 flex place-content-center  lg:place-content-center">
      <form
        onSubmit={publishArticle}
        className="px-1 w-full lg:w-3/4  lg:px-12 flex flex-col">
        {/*--- header ---*/}
        <ArticleEditorHeader
          setPreview={setPreview}
          previewState={previewState}
        />

        {/*--- form ---*/}

        {!previewState ? (
          <ArticleEditor ref={formRef} />
        ) : (
          <DynamicPreviewArticle />
        )}

        {/*--- footer ---*/}
        <footer className=" flex flex-wrap gap-3 md:gap-4 py-2 md:py-8 text-sm md:text-base md:tracking-wide">
          <SubmitButton text="Publish" loading={isLoading} />
          <button
            type="button"
            className="bg-gray-300 tracking-wide font-semibold capitalize px-4 py-2 rounded">
            save draft
          </button>
        </footer>
      </form>
    </main>
  );
};

export default CreateArticle;
