import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "An article must have a title"],
    trim: true,
  },
  authorId: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: [true, "An article must have body"],
    trim: true,
  },
  markDown: String,
  slug: String,
});

ArticleSchema.pre("save", function (next) {
  next();
});

const Article = mongoose.model("Article", ArticleSchema);
