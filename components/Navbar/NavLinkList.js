import { links } from "./navData";
import { NavLink } from "../Link";
import { useRouter } from "next/router";

function NavLinkList({ closeNav = () => {} }) {
  const { asPath: path } = useRouter();

  return (
    <ul className="text-white pt-12 tracking-widest capitalize lg:pt-0 lg:flex lg:items-center lg:text-white lg:gap-4 ">
      {links.map((link, key) => {
        return (
          <li
            key={key}
            onClick={() => {
              closeNav();
            }}
            className="relative group hover:bg-twine-700 hover:bg-opacity-70 ">
            <NavLink className="p-3 mb-1 lg:py-1 lg:px-2" href={link.href}>
              {link.text}
            </NavLink>
            {path === link.href ? (
              <span className="hidden cursor-default lg:block absolute border-l-[15px]  border-r-[15px] border-b-[15px] border-transparent border-b-white -bottom-7 left-1/2 right-1/2 -translate-x-1/2 " />
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
export default NavLinkList;
