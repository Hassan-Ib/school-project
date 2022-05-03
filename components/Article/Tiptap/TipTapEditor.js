import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./TipTapMenuBar";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import { useCreateArticle } from "../../../hooks/useCreateArticle";

const Tiptap = ({ setArticleBody }) => {
  console.log("TIPTAP RERENDERS");
  const {
    article: { body },
  } = useCreateArticle();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: " Write your engaging article here ...",
      }),
      Image,
    ],
    content: body,
    editorProps: {
      attributes: {
        class:
          "prose-slate prose lg:prose-lg xl:prose-xl focus:outline-none  min-w-full ",
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
      <EditorContent className="p-4 flex" editor={editor} />
    </div>
  );
};

export default Tiptap;
