import ArticlesModel from "../models/ArticleModel";
import catchAsync from "../utils/catchAsync";
import AppError from "../utils/appError";
import { protect } from "./authController";

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
    count: data.length,
    success: true,
    data,
  });
});

export const createArticle = catchAsync(async (req, res) => {
  const user = await protect(req);
  // console.log("user form create", user);

  await ArticlesModel.create({
    ...req.body,
    authorId: req.user._id,
  });

  return res.status(201).json({
    success: true,
    data: null,
  });
});

export const updateArticle = catchAsync(async (req, res) => {
  const {
    query: { id },
    body,
  } = req;
  const doc = await ArticlesModel.getByIdAndUpdate(id, body);
  if (!doc) {
    throw new AppError(`No article of id ${id} found`, 401);
  }
  // await doc.save();
  return res.status(201).json({
    success: true,
    data: doc,
  });
});

export const getArticle = catchAsync(async (req, res) => {
  const {
    query: { slug },
  } = req;

  console.log(slug);

  const data = await ArticlesModel.findOne({ slug });

  console.log(data);

  if (!data)
    throw new AppError(
      `article of title ${slug} does not exist, supply a valid title`,
      400
    );

  return res.status(200).json({
    success: true,
    data,
  });
});

export const deleteArticle = catchAsync(async (req, res) => {});

export const uploadImage = catchAsync(async (req, res) => {});
