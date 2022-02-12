import { forwardRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // eslint-disable-next-line react/display-name
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
    // eslint-disable-next-line react/display-name
    loading: () => <p>Loading ...</p>,
  }
);

const editorFormats = [
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

const Editor = forwardRef(({ editorState, setArticleData }, ref) => {
  const editorModules = {
    toolbar: [
      [{ header: [1, 2, , 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "blockquote", "code-block"],
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
    // handlers: {
    //   image: uploadImage,
    // },
  };

  const onEditorStateChange = (editorState) => {
    setArticleData((prevState) => {
      return { ...prevState, body: editorState };
    });
  };

  return (
    <ReactQuill
      forwardedRef={ref}
      theme="snow"
      value={editorState}
      onChange={onEditorStateChange}
      className="normal-case overflow-auto"
      modules={editorModules}
      formats={editorFormats}
    />
  );
});

Editor.displayName = "Editor";
export default Editor;
