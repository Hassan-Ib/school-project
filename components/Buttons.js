import { useRouter } from "next/router";
import PropTypes from "prop-types";

const LinkButton = ({ children, className, href }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className={`capitalize px-4 py-1 font-medium border-2  transition-all duration-300 ${className} `}>
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

export { LinkButton };
