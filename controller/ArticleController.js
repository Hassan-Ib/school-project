import ArticlesModel from "../models/ArticleModel";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";
// import { protect } from "./authController";
// import { getToken } from "next-auth/jwt";
// import querystring from "querystring";

export const getAllArticles = catchAsync(async (req, res) => {
  const { numericFields, limit, page, sort, fields, title } = req.query;

  let queryObj = { ...req.query };

  const sepcialQuerys = ["limit", "page", "sort", "fields", "numericFields"];

  sepcialQuerys.forEach((el) => delete queryObj[el]);

  console.log("queryObj", queryObj);

  if (title) {
    queryObj.title = { $regex: title, $options: "i" };
  }
  let queryResult = ArticlesModel.find(queryObj);

  if (numericFields) {
    const operatorMap = {
      "<": "lt",
      "<=": "lte",
      ">": "gt",
      ">=": "gte",
    };

    let fields = numericFields
      .replace(/\b(<|>=|>|<=)\b/g, (match) => `--$${operatorMap[match]}--`)
      .split(",");

    fields.forEach((el) => {
      let [key, operator, value] = el.split("--"); // createAt, <=, "value"
      queryObj[key] = { [operator]: value };
    });
    // console.log("numeric fields ", fields, " queryObj ", queryObj);

    queryResult.find(queryObj);
  }

  if (sort) {
    const sortStr = sort.split(",").join(" ");
    queryResult.sort(sortStr);
  } else {
    queryResult.sort("createdAt");
  }

  if (fields) {
    const fieldsStr = fields.split(",").join(" ");
    queryResult.select(fieldsStr);
  }

  if (limit || page) {
    const limitNum = Number(limit) ?? 10;
    const pageNum = Number(page) ?? 1;
    const skip = (pageNum - 1) * limitNum;
    queryResult.skip(skip).limit(limitNum);
  }

  const data = await queryResult;
  return res.status(200).json({
    success: true,
    data,
  });
});

export const createArticle = catchAsync(async (req, res) => {
  const { title, coverImage, body } = req.body;

  // if (!body || !title) throw new AppError("article must ha", 400);

  console.log(coverImage);

  // const gitMarkedData = await fetch("https://api.github.com/markdown", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ mode: "markdown", text: body }),
  // });
  // console.log(gitMarked);

  const data = await ArticlesModel.create(req.body);

  return res.status(201).json({
    success: true,
    data,
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

export const uploadImage = catchAsync(async (req, res) => {});
