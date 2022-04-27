import { RiMenuFoldLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import FlowButton from "../Buttons/FlowButton";
const MenuToggle = ({ showNav }) => {
  return (
    <FlowButton
      className="btn btn-sm btn-bg-flow lg:hidden justify-self-end"
      onClick={() => {
        showNav(true);
      }}
      flowDirection={"flow-l"}
      text={
        <>
          <span>menu</span> <RiMenuFoldLine className="text-2xl" />
        </>
      }
    />
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
