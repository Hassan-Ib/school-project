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
import { uploadImage } from "../../utils/uploadImage";

const menuBarMarks = [
  {
    class: (editor) => (editor.isActive("bold") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleBold().run(),
    icon: <BiBold />,
  },
  {
    class: (editor) => (editor.isActive("italic") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleItalic().run(),
    icon: <GrItalic />,
  },
  {
    class: (editor) => (editor.isActive("strike") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleStrike().run(),
    icon: <AiOutlineStrikethrough />,
  },
  {
    class: (editor) => (editor.isActive("code") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleCode().run(),
    icon: <BsCode />,
  },
  {
    onClick: (editor) => () => editor.chain().focus().unsetAllMarks().run(),
    icon: <IoMdRemoveCircleOutline />,
  },
];

const menuBarNode = [
  {
    class: (editor) =>
      editor.isActive("heading", { level: 2 }) ? "is-active" : "",
    onClick: (editor) => () =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    icon: "H2",
  },
  {
    class: (editor) =>
      editor.isActive("heading", { level: 3 }) ? "is-active" : "",
    onClick: (editor) => () =>
      editor.chain().focus().toggleHeading({ level: 3 }).run(),
    icon: "H3",
  },
  {
    class: (editor) =>
      editor.isActive("heading", { level: 4 }) ? "is-active" : "",
    onClick: (editor) => () =>
      editor.chain().focus().toggleHeading({ level: 4 }).run(),
    icon: "H4",
  },
  {
    class: (editor) => (editor.isActive("paragraph") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().setParagraph().run(),
    icon: "P",
  },
  {
    class: (editor) => (editor.isActive("bulletList") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleBulletList().run(),
    icon: <AiOutlineUnorderedList />,
  },
  {
    class: (editor) => (editor.isActive("orderedList") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleOrderedList().run(),
    icon: <AiOutlineOrderedList />,
  },
  {
    class: (editor) => (editor.isActive("codeBlock") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleCodeBlock().run(),
    icon: <AiFillCode />,
  },
  {
    class: (editor) => (editor.isActive("blockquote") ? "is-active" : ""),
    onClick: (editor) => () => editor.chain().focus().toggleBlockquote().run(),
    icon: <ImQuotesLeft />,
  },
  {
    onClick: (editor) => () => {
      const file = document.createElement("input");
      file.type = "file";
      file.accept = "image/*";
      file.click();
      file.addEventListener("change", async () => {
        let selectedImageFile = file.files ? file.files[0] : null;
        if (!selectedImageFile) return null;
        const fileReader = new FileReader();
        fileReader.addEventListener("load", async () => {
          const blobUrl = fileReader.result;
          try {
            const res = await uploadImage(blobUrl);
            console.log(res);
            const {
              data: {
                imageData: { url },
              },
            } = res;
            if (url) {
              console.log("url", url);
              editor.chain().focus().setImage({ src: url }).run();
            }
          } catch (error) {
            console.log(error.message);
            alert(error.message);
          }
        });
        fileReader.readAsDataURL(selectedImageFile);
      });
    },
    icon: <BiImage />,
  },
  {
    onClick: (editor) => () => editor.chain().focus().setHorizontalRule().run(),
    icon: "horizontal line",
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
  },
  {
    onClick: (editor) => () => editor.chain().focus().redo().run(),
    icon: <BiRedo />,
  },
];

const MenuBar = ({ editor }) => {
  //   console.log("Button reRenders");
  if (!editor) {
    return null;
  }

  return (
    <div className="editor-menu-container p-2 flex gap-1 flex-wrap border-b-2 border-black">
      {menuBarMarks.map((el, index) => (
        <button
          key={index}
          onClick={el.onClick(editor)}
          className={el.class ? el.class(editor) : ""}>
          {el.icon}
        </button>
      ))}

      {menuBarNode.map((el, index) => (
        <button
          key={index}
          onClick={el.onClick(editor)}
          className={el.class ? el.class(editor) : ""}>
          {el.icon}
        </button>
      ))}
      {menuBarHistory.map((el, index) => (
        <button
          key={index}
          onClick={el.onClick(editor)}
          className={el.class ? el.class(editor) : ""}>
          {el.icon}
        </button>
      ))}
    </div>
  );
};
export default MenuBar;
