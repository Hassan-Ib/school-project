import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { signIn, signOut, useSession } from "next-auth/react";

const LinkButton = ({ children, className, href }) => {
  const router = useRouter();
  return (
    <button onClick={() => router.push(href)} className={className}>
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
      className="font-medium tracking-widest underline underline-offset-4">
      {status === "authenticated" ? "sign Out" : "sign In"}
    </button>
  );
};

export { LinkButton, SignButton };
