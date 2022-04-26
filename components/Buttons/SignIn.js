import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import FlowButton from "./FlowButton";
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
    <FlowButton
      onClick={signHandler}
      className="btn btn-sm border-0  hover:underline underline-offset-2"
      text={status === "authenticated" ? "Log out" : "Log in"}
    />
  );
};

export default SignButton;
