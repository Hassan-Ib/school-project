import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./TipTapMenuBar";
import Placeholder from "@tiptap/extension-placeholder";

const Tiptap = ({ articleBody, setArticleBody }) => {
  console.log("TIPTAP RERENDERS");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: " Write your engaging article here ...",
      }),
    ],
    content: articleBody,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-slate sm:prose lg:prose-lg xl:prose-2xl focus:outline-none h-full ",
      },
    },
    onUpdate: ({ editor }) => {
      setArticleBody(editor.getHTML());
    },
  });

  return (
    <div className="flex-1 flex flex-col overflow-hidden border-2 border-slate-600">
      <MenuBar editor={editor} />
      <EditorContent
        className="flex-1 overflow-hidden overflow-y-auto p-2"
        editor={editor}
      />
    </div>
  );
};

export default Tiptap;
