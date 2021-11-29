import { useRouter } from "next/router";
import PropTypes from "prop-types";

const LinkButton = ({ children, className, href }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className={`capitalize rounded px-4 py-1 text-base border-2 ${className} transition-all duration-300  `}>
      {children}
    </button>
  );
};

LinkButton.defaultProps = {
  className: "",
};

LinkButton.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const SectionButton = (props) => {
  return (
    <LinkButton
      href={props.href}
      className={`${props.className} border-blue-800 text-blue-800 rounded-lg  hover:text-white hover:bg-blue-800`}>
      {props.children}
    </LinkButton>
  );
};

export { LinkButton, SectionButton };
