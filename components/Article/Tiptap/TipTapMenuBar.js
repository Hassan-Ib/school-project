import React from "react";
import { BiBold, BiUndo, BiRedo, BiImage } from "react-icons/bi";
import { GrItalic } from "react-icons/gr";
import { BsCode } from "react-icons/bs";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import {
  AiOutlineStrikethrough,
  AiFillCode,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { ImQuotesLeft } from "react-icons/im";
import { uploadImg } from "../../../utils/uploadImage";

const menuBarMarks = [
  {
    class: (editor) => (editor.isActive("bold") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleBold().run(),
    icon: <BiBold />,
    name: "bold mark",
  },
  {
    class: (editor) => (editor.isActive("italic") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleItalic().run(),
    icon: <GrItalic />,
    name: "italic mark",
  },
  {
    class: (editor) => (editor.isActive("strike") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleStrike().run(),
    icon: <AiOutlineStrikethrough />,
    name: "strike through mark",
  },
  {
    class: (editor) => (editor.isActive("code") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleCode().run(),
    icon: <BsCode />,
    name: "code mark",
  },
  {
    onClick: (editor) => () => editor.chain().focus().unsetAllMarks().run(),
    icon: <IoMdRemoveCircleOutline />,
    name: "clear marks",
  },
];

const menuBarNode = [
  {
    class: (editor) =>
      editor.isActive("heading", { level: 2 }) ? "is-active" : "",
    onClick: (editor) => () =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    icon: "H2",
    name: "heading 2 node",
  },
  {
    class: (editor) =>
      editor.isActive("heading", { level: 3 }) ? "is-active" : "",
    onClick: (editor) => () =>
      editor.chain().focus().toggleHeading({ level: 3 }).run(),
    icon: "H3",
    name: "heading 3 node",
  },
  {
    class: (editor) =>
      editor.isActive("heading", { level: 4 }) ? "is-active" : "",
    onClick: (editor) => () =>
      editor.chain().focus().toggleHeading({ level: 4 }).run(),
    icon: "H4",
    name: "heading 4 node",
  },
  {
    class: (editor) => (editor.isActive("paragraph") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().setParagraph().run(),
    icon: "P",
    name: "paragraph node",
  },
  {
    class: (editor) => (editor.isActive("bulletList") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleBulletList().run(),
    icon: <AiOutlineUnorderedList />,
    name: "unordered list node",
  },
  {
    class: (editor) => (editor.isActive("orderedList") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleOrderedList().run(),
    icon: <AiOutlineOrderedList />,
    name: "ordered list node",
  },
  {
    class: (editor) => (editor.isActive("codeBlock") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleCodeBlock().run(),
    icon: <AiFillCode />,
    name: "code block node",
  },
  {
    class: (editor) => (editor.isActive("blockquote") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleBlockquote().run(),
    icon: <ImQuotesLeft />,
    name: "block quote node",
  },
  {
    onClick: (editor) => () => {
      const file = document.createElement("input");
      file.type = "file";
      file.accept = "image/*";
      file.click();
      file.addEventListener("change", async function () {
        uploadImg(file, {
          onSuccess: (imageData) => {
            if (imageData.url) {
              editor.chain().focus().setImage({ src: imageData.url }).run();
            }
          },
          onError: (error) => {
            console.log(error.message);
            alert(error.message);
          },
        });
      });
    },
    icon: <BiImage />,
    name: "add image block",
  },
  {
    onClick: (editor) => () => editor.chain().focus().setHorizontalRule().run(),
    icon: "horizontal line",
    name: "horizontal line node",
  },
  // {
  //   onClick: (editor) => () => editor.setHardBreak().run(),
  //   icon: <ImQuotesLeft />,
  // },
];

const menuBarHistory = [
  {
    onClick: (editor) => () => editor.chain().focus().undo().run(),
    icon: <BiUndo />,
    name: "undo recent changes",
  },
  {
    onClick: (editor) => () => editor.chain().focus().redo().run(),
    icon: <BiRedo />,
    name: "redo revent changes",
  },
];

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="editor-menu-container p-2 flex gap-1 md:gap-2 lg:gap-3 flex-wrap justify-center border-b border-black bg-white z-10 sticky top-0 ">
      {menuBarMarks.map((el, index) => (
        <button
          type="button"
          aria-label={el.name}
          key={index}
          onClick={el.onClick(editor)}
          className={el.class ? el.class(editor) : "bg-inherit"}
        >
          {el.icon}
        </button>
      ))}

      {menuBarNode.map((el, index) => (
        <button
          type="button"
          aria-label={el.name}
          key={index}
          onClick={el.onClick(editor)}
          className={el.class ? el.class(editor) : "bg-inherit"}
        >
          {el.icon}
        </button>
      ))}
      {menuBarHistory.map((el, index) => (
        <button
          type="button"
          aria-label={el.name}
          key={index}
          onClick={el.onClick(editor)}
          className={el.class ? el.class(editor) : "bg-inherit"}
        >
          {el.icon}
        </button>
      ))}
    </div>
  );
};
export default MenuBar;
