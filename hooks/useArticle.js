import React, { useState, useRef, useEffect, forwardRef, useMemo } from "react";
import LocalStorage from "../../utils/localStorage";
import { uploadImage } from "../utils/uploadImage";

export const useArticle = () => {
  const [articleData, setArticleData] = useState({
    title: "",
    coverImage: null,
    markdown: "",
  });
  const [articleTitle, setArticleTitle] = useState("");
  const [articleCoverImage, setArticleCoverImage] = useState(null);
  const [articleBody, setArticleBody] = useState("");

  const titleRef = useRef(null);
  const coverImageRef = useRef(null);
  let editorRef = useRef(null);
  console.log("editorRef", editorRef);

  const onEditorStateChange = (editorState) => {
    setArticleData((prevState) => {
      return { ...prevState, markdown: editorState };
    });
  };

  // uplaod cover image handler

  const uploadCoverImage = async (e) => {
    const { files } = e.target;
    const reader = new FileReader();
    reader.addEventListener("load", async () => {
      const blobUrl = reader.result;
      try {
        const imageCloudinaryUrl = await uploadImage(blobUrl);
        setArticleData((prevState) => {
          return { ...prevState, coverImage: blobUrl };
        });
      } catch (error) {
        console.log("api call upload error ", error, error.message);
      }
    });
    reader.readAsDataURL(files[0]);
  };

  // remove cover image handler
  const removeCoverImage = () => {
    coverImageRef.current.value = null;
    setArticleData((prevState) => {
      return { ...prevState, coverImage: null };
    });
  };

  // set article title
  const setTitle = () => {
    const title = titleRef.current.value;
    setArticleData((prevState) => {
      return { ...prevState, title };
    });
  };

  // Local data fetching effect

  useEffect(() => {
    titleRef.current.focus();
    const data = LocalStorage.getLocalData("articleData");
    if (!data) return;
    setArticleData(data);
  }, []);

  // Local data update effect

  useEffect(() => {
    LocalStorage.setLocalData("articleData", articleData);
  }, [articleData]);

  return {
    articleData,
    uploadImage,
    uploadCoverImage,
    removeCoverImage,
    setTitle,
    onEditorStateChange,
  };
};
