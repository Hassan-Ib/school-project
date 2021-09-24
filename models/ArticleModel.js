import mongoose from "mongoose";
import slugify from "slugify";
import safeMarked from "safe-marked";
const { Schema } = mongoose;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: [true, "An article must have a title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "An Article must have Description"],
    trim: true,
  },
  authorId: {
    type: String,
    required: true,
  },
  markdown: {
    type: String,
    required: [true, "An article must have body"],
    trim: true,
  },
  markDownHtml: String,
  slug: { type: String, unique: true },
  image: String,
});

ArticleSchema.pre("save", function (next) {
  console.log("saving");
  this.slug = slugify(this.title);
  this.markDownHtml = safeMarked(this.markdown);
  next();
});
export default mongoose.models.ArticleSchema ||
  mongoose.model("Article", ArticleSchema);
