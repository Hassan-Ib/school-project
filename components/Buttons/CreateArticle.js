import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

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
    <button onClick={clickHandler} className="btn btn-sm btn-white">
      {text}
    </button>
  );
};

export default CreateArticleButton;
