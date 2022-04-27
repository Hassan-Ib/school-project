const mongoose = require("mongoose");
const slugify = require("slugify");
const sanitizeHtml = require("sanitize-html");
const UserModel = require("./UserModel.js");
const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: [true, "An article must have a title"],
    trim: true,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: [true, "An article must have an author"],
  },
  body: {
    type: String,
    required: [true, "An article must have a body"],
    trim: true,
  },
  slug: { type: String, unique: true },
  coverImage: {
    url: String,
    height: Number,
    width: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

ArticleSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { trim: true, lower: true });
  next();
});
ArticleSchema.pre("save", function (next) {
  try {
    console.log("sanitizing");
    const sanitzedBody = sanitizeHtml(this.body);
    this.body = sanitzedBody;
  } catch (error) {
    throw error;
  }
  next();
});

////**
//  *
//  * @param {string} id mongodb id
//  * @param {object} ArticleData data from client side
//  * @returns  mongo doc || null
//  */

// ArticleSchema.statics.getByIdAndUpdate = async function (id, ArticleData) {
//   const [doc] = await this.find({ _id: id });
//   if (!doc) {
//     return null;
//   }
//   // matching article data with doc data and update
//   for (const [key, value] of Object.entries(ArticleData)) {
//     if (doc[key]) {
//       doc[key] = value;
//     }
//   }
//   return doc;
// };

// ArticleSchema.statics.getConsole = function () {
//   console.log("some weird shit going on here for static");
// };
// ArticleSchema.methods.getConsoles = function () {
//   console.log("some weird shit going on here for methods");
// };

const ArticlesModel =
  mongoose.models?.Article ?? mongoose.model("Article", ArticleSchema);

module.exports = ArticlesModel;
