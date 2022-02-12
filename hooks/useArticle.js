import React, { useState, useEffect } from "react";
import LocalStorage from "../utils/localStorage";
import { uploadImage } from "../utils/uploadImage";

const intialData = { title: "", coverImage: null, body: "hello hassan" };

export const useArticle = () => {
  const [article, setArticle] = useState(
    () => LocalStorage.getLocalData("articleData") ?? intialData
  );

  const setArticleTitle = (e) => {
    setArticle((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const setArticleBody = (editorState) => {
    setArticle((prevState) => ({ ...prevState, body: editorState }));
  };

  const setCoverImage = (e) => {
    const { files } = e.target;
    const reader = new FileReader();
    reader.addEventListener("load", async () => {
      const blobUrl = reader.result;
      try {
        const cloudinaryImageUrl = await uploadImage(blobUrl);
        setArticle((prevState) => ({
          ...prevState,
          coverImage: cloudinaryImageUrl,
        }));
      } catch (error) {
        console.log(error.message);
      }
    });
    reader.readAsDataURL(files[0]);
  };

  // remove cover image handler
  const removeCoverImage = (e) => {
    e.target.value = null;
    setArticleData((prevState) => {
      return { ...prevState, coverImage: null };
    });
  };

  // useEffect(() => {
  //   // titleRef.current.focus();
  //   const data = LocalStorage.getLocalData("articleData") || intialData;
  //   // if (!data) return;
  //   setArticle(data);
  // }, []);

  useEffect(() => {
    LocalStorage.setLocalData("articleData", article);
  }, [article]);

  return {
    article,
    setArticleTitle,
    setCoverImage,
    setArticleBody,
    removeCoverImage,
  };
};
