import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
const NavLink = ({ href, handleNavToggle, className, children }) => {
  const { asPath: path } = useRouter();
  return (
    <>
      <NextLink href={href} passHref>
        <a
          onClick={handleNavToggle}
          className={`navlink relative z-10 text-sm font-medium flex items-center capitalize tracking-widest opacity-100 ${className} group
          ${path === href ? "bg-twine-900 lg:bg-transparent " : ""} `}>
          {children}
        </a>
      </NextLink>
    </>
  );
};

NavLink.defaultProps = {
  className: "",
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  handleNavToggle: PropTypes.func,
  icon: PropTypes.element,
  children: PropTypes.string.isRequired,
};

export default NavLink;
