import ArticlesModel from "../models/ArticleModel";
import catchAsync from "../utils/apiHandler";
import { getSession } from "next-auth";

export const getAllArticles = catchAsync(async (req, res) => {
  // ArticlesModel.getConsole();
  const session = getSession();
  console.log(session);
  const query = await ArticlesModel.find();
  query.getConsoles();
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
    throw new Error(`No article of id ${id} found`);
  }
  await doc.save();
  return res.status(201).json({
    success: true,
    data: doc,
  });
});

export const getArticle = catchAsync(async (req, res) => {
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
