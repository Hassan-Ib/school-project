import { RiMenuFoldLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";

const MenuToggle = ({ showNav }) => {
  return (
    <button
      className="btn btn-sm btn-white flex gap-2 lg:hidden justify-self-end"
      onClick={() => {
        showNav(true);
      }}>
      <span>menu</span> <RiMenuFoldLine className="text-2xl" />
    </button>
  );
};

const MenuToggleClose = ({ closeNav }) => {
  return (
    <button
      aria-label="close navigaition button"
      onClick={closeNav}
      className="flex border-2 border-twine-400 rounded-full p-1 ">
      <VscChromeClose className="text-2xl opacity-90" />
    </button>
  );
};
export { MenuToggle, MenuToggleClose };
