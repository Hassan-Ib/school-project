const ArticleEditorHeader = ({ setPreview, previewState }) => {
  return (
    <section className="flex pt-4 pb-2 capitalize">
      <p className="flex-1 font-semibold">create article</p>
      <div className="flex gap-4 capitalize">
        <button
          type="button"
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
          type="button"
          className={`relative z-10 border-b-2 border-blue-800 border-opacity-0 capitalize py-1 transition-all duration-300 hover:before:absolute hover:before:-z-10 hover:before:bg-blue-300 hover:before:bg-opacity-30 hover:before:w-full hover:before:h-[95%] hover:before:transform hover:before:scale-x-125
                  ${
                    previewState &&
                    "font-semibold border-opacity-100 hover:before:border-b-2 hover:before:border-blue-800 "
                  }`}
          onClick={() => {
            setPreview(true);
          }}>
          preview
        </button>
      </div>
    </section>
  );
};

export default ArticleEditorHeader;
