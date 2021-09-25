import mongoose from "mongoose";
import slugify from "slugify";
import { createMarkdown } from "safe-marked";
const markdown = createMarkdown();

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
    required: [true, "An article must have markdown"],
    trim: true,
  },
  markDownHtml: String,
  slug: { type: String, unique: true },
  image: [String],
});

ArticleSchema.statics.getByIdAndPopulate = async function (id, ArticleData) {
  try {
    // console.log("running get by id and populate");
    const [doc] = await this.find({ _id: id });

    for (const [key, value] of Object.entries(ArticleData)) {
      console.log(doc[key]);
      if (doc[key]) {
        doc[key] = value;
      }
    }
    return doc;
  } catch (error) {
    throw new Error({ ...error });
  }
};

ArticleSchema.pre("save", function (next) {
  console.log("saving");
  this.slug = slugify(this.title, { trim: true, lower: true });
  const marked = markdown(this.markdown);
  console.log(marked);
  this.markDownHtml = marked;
  next();
});

ArticleSchema.pre("update", function (next) {
  console.log("saving");
  this.slug = slugify(this.title, { trim: true, lower: true });
  const marked = markdown(this.markdown);
  console.log(marked);
  this.markDownHtml = marked;
  next();
});
console.log(mongoose.models);

const Articles =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);

export default Articles;
