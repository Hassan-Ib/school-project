import { forwardRef } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
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

const Editor = forwardRef(({ editorState, onEditorStateChange }, ref) => {
  const editorModules = {
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
    // handlers: {
    //   image: uploadImage,
    // },
  };

  return (
    <ReactQuill
      forwardedRef={ref}
      theme="snow"
      value={editorState}
      onChange={onEditorStateChange}
      className="flex-1 "
      modules={editorModules}
      formats={editorFormats}
    />
  );
});
Editor.displayName = "Editor";
export default Editor;
