import ArticlesModel from "../models/ArticleModel";
import catchAsync from "../utils/catchAsync";
// import { getToken } from "next-auth/jwt";
// import querystring from "querystring";
import { URLSearchParams } from "url";

export const getAllArticles = catchAsync(async (req, res) => {
  // 1 - check for queries [limit, page, sort, field]

  const params = new URLSearchParams(req.url);
  console.log("params", params);

  const query = await ArticlesModel.find();

  return res.status(200).json({
    success: true,
    data: query,
  });
});

export const createArticle = catchAsync(async (req, res) => {
  const { body } = req;

  if (!body?.articlesData?.markdown) throw new Error("Article is required");

  console.log(body);
  // const gitMarkedData = await fetch("https://api.github.com/markdown", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ mode: "markdown", text: body }),
  // });
  // console.log(gitMarked);

  return res.status(201).json({
    success: true,
    data: htmlText,
  });
});

export const updateArticle = catchAsync(async (req, res) => {
  const {
    query: { id },
    body,
  } = req;
  const doc = await ArticlesModel.getByIdAndUpdate(id, body);
  if (!doc) {
    const error = new Error(`No article of id ${id} found`);
    error.statusCode = 401;
    throw error;
  }
  // await doc.save();
  return res.status(201).json({
    success: true,
    data: doc,
  });
});

export const getArticle = catchAsync(async (req, res) => {
  const paramsObj = req.query;
  console.log("query ", paramsObj);
  const {
    query: { id },
  } = req;
  const query = await ArticlesModel.findById(id);
  console.log(query);
  if (!query)
    throw new Error(`article of id ${id} does not exist, supply a valid id`);
  return res.status(200).json({
    success: true,
    data: query,
  });
});

const uploadImage = catchAsync(async (req, res) => {});
