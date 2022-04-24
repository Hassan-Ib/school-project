import React from "react";
import LocalStorage from "../utils/localStorage";
import { useRouter } from "next/router";

const usePublishArticle = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const router = useRouter();

  const publishArticle = async (e) => {
    e.preventDefault();
    const articleData = LocalStorage.getLocalData(
      LocalStorage.articleLocalStorageKey
    );
    try {
      setIsLoading(true);
      const res = await fetch("/api/articles", {
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(articleData),
      });
      console.log(res);
      const data = await res.json();
      console.log(res, data);
      if (!res.ok) {
        throw data.message;
      }
      LocalStorage.setLocalData(LocalStorage.articleLocalStorageKey, null);
      router.push("/profile");
    } catch (error) {
      // setError(error);
      alert(error.split(":")[2]);
      setIsLoading(false);
    }
  };

  return { publishArticle, isLoading, error };
};

export default usePublishArticle;
