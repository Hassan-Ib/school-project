import { useState, useEffect, useCallback, useMemo } from "react";
import LocalStorage from "../utils/localStorage";
import { uploadImg } from "../utils/uploadImage";

const intialData = { title: "", coverImage: null, body: "" };

export const useCreateArticle = () => {
  const [article, setArticle] = useState(
    // lazy load article from localStorage
    () => LocalStorage.getLocalData("articleData") ?? intialData
  );

  const [coverImageLoading, setCoverImageLoading] = useState(false);

  const [error, setError] = useState(null);

  // update article title
  const setArticleTitle = (e) => {
    setArticle((prevState) => ({ ...prevState, title: e.target.value }));
  };

  // update article body
  const setArticleBody = (editorState) => {
    setArticle((prevState) => ({ ...prevState, body: editorState }));
  };

  // update article cover image
  const setCoverImage = (e) => {
    setCoverImageLoading(true);
    const file = e.target;
    uploadImg(file, {
      onSuccess: (imageData) => {
        setArticle((prevState) => ({
          ...prevState,
          coverImage: imageData,
        }));
        setCoverImageLoading(false);
      },
      onError: (error) => {
        setError(error.message);
        setArticle((prevState) => ({ ...prevState, coverImage: null }));
        setCoverImageLoading(false);
        alert(error.message);
      },
    });
  };

  // remove cover image
  const removeCoverImage = (e) => {
    e.target.value = null;
    setArticle((prevState) => {
      return { ...prevState, coverImage: null };
    });
  };

  // update article in local storage
  useEffect(() => {
    LocalStorage.setLocalData("articleData", article);
  }, [article]);

  // returned values
  return {
    error,
    setError,
    coverImageLoading,
    article,
    setArticleTitle,
    setCoverImage,
    setArticleBody,
    removeCoverImage,
  };
};
