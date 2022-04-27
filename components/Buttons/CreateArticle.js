import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import FlowButton from "./FlowButton";
const CreateArticleButton = ({ text = "create article" }) => {
  const { status } = useSession();
  const router = useRouter();

  const clickHandler = () => {
    if (status === "authenticated") {
      router.push("/articles/create");
      return;
    }
    router.push("/auth/log-in");
  };

  return (
    <FlowButton
      onClick={clickHandler}
      className="btn btn-sm  lg:btn-bg-flow"
      text={text}
      flowDirection="flow-b"
    />
  );
};

export default CreateArticleButton;
