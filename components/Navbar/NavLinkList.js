import { links } from "./navData";
import { NavLink } from "../Link";
import { useRouter } from "next/router";

function NavLinkList() {
  const { asPath: path } = useRouter();

  return (
    <ul className=" hidden lg:flex items-center text-white gap-6 ">
      {links.map((link, key) => {
        return (
          <li key={key} className="relative group hover:bg-birch-700 py-1 px-2">
            <NavLink className=" " href={link.href}>
              {link.text}
            </NavLink>
            {path === link.href ? (
              <span className="hidden cursor-default lg:block absolute w-[20px] h-[12px]  bg-white -bottom-7 left-1/2 right-1/2 -translate-x-1/2 " />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
export default NavLinkList;
