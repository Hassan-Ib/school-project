import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./TipTapMenuBar";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";

const Tiptap = ({ articleBody, setArticleBody }) => {
  console.log("TIPTAP RERENDERS");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: " Write your engaging article here ...",
      }),
      Image,
    ],
    content: articleBody,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm prose-slate sm:prose lg:prose-lg xl:prose-2xl focus:outline-none h-full min-w-full",
      },
    },
    onUpdate: ({ editor }) => {
      console.log("updated");
      setArticleBody(editor.getHTML());
    },
  });

  return (
    <div className="flex-1 border border-slate-600 ">
      <MenuBar editor={editor} />
      <EditorContent className="p-4 " editor={editor} />
    </div>
  );
};

export default Tiptap;
