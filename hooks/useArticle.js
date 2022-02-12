import React, { useState, useEffect } from "react";
import LocalStorage from "../utils/localStorage";
import { uploadImage } from "../utils/uploadImage";

const intialData = { title: "", coverImage: null, body: "hello hassan" };

export const useArticle = () => {
  const [article, setArticle] = useState(
    () => LocalStorage.getLocalData("articleData") ?? intialData
  );
  const [coverImageLoading, setCoverImageLoading] = useState(false);

  const setArticleTitle = (e) => {
    setArticle((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const setArticleBody = (editorState) => {
    setArticle((prevState) => ({ ...prevState, body: editorState }));
  };

  const setCoverImage = (e) => {
    setCoverImageLoading(true);
    const { files } = e.target;
    const reader = new FileReader();
    reader.addEventListener("load", async () => {
      const blobUrl = reader.result;
      try {
        const { data } = await uploadImage(blobUrl);
        console.log(data.imageData.url);
        setArticle((prevState) => ({
          ...prevState,
          coverImage: data.imageData,
        }));
        setCoverImageLoading(false);
      } catch (error) {
        console.log(error.message);
        setCoverImageLoading(false);
      }
    });
    reader.readAsDataURL(files[0]);
  };

  // remove cover image handler
  const removeCoverImage = (e) => {
    e.target.value = null;
    setArticle((prevState) => {
      return { ...prevState, coverImage: null };
    });
  };

  useEffect(() => {
    LocalStorage.setLocalData("articleData", article);
  }, [article]);

  return {
    coverImageLoading,
    article,
    setArticleTitle,
    setCoverImage,
    setArticleBody,
    removeCoverImage,
  };
};
