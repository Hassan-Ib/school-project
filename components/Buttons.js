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

const CreateArticleButton = ({ className, children }) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/articles/create");
  };

  return (
    <button onClick={clickHandler} className={className}>
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
      className="btn-sm  rounded-sm hover:underline bg-twine-500 tracking-wider">
      {status === "authenticated" ? "Log out" : "Log in"}
    </button>
  );
};

export { LinkButton, SignButton, CreateArticleButton };
