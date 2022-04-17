import React from "react";
import { LinkButton } from "../components";

const Error404 = () => {
  return (
    <div className="h-[100vh] grid place-items-center place-content-center">
      <div>
        <h2 className="text-lg font-medium mb-8">404 - Page cannot be found</h2>

        <LinkButton href={"/"} className="btn btn-md border-red-500">
          back to home page
        </LinkButton>
      </div>
    </div>
  );
};

export default Error404;
