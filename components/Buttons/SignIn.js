import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const SignButton = () => {
  const { status } = useSession();
  const router = useRouter();
  const signHandler = () => {
    if (status !== "authenticated") {
      return router.push("/auth/log-in");
    }
    return signOut();
  };

  return (
    <button
      onClick={signHandler}
      className="btn-sm  rounded-sm hover:underline bg-twine-700 tracking-wider">
      {status === "authenticated" ? "Log out" : "Log in"}
    </button>
  );
};

export default SignButton;
