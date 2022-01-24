import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { signIn, signOut, useSession } from "next-auth/react";

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

const SignButton = () => {
  const { status } = useSession();

  const signHandler = () => {
    if (status !== "authenticated") {
      return signIn();
    }
    return signOut();
  };
  return (
    <button
      onClick={signHandler}
      className="font-medium capitalize tracking-wider  underline underline-offset-2">
      {status === "authenticated" ? "singOut" : "signIn"}
    </button>
  );
};

export { LinkButton, SignButton };
