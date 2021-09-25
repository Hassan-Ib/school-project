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

ArticleSchema.pre("save", function (next) {
  console.log("saving");
  this.slug = slugify(this.title, { trim: true, lower: true });
  const marked = markdown(this.markdown);
  console.log(marked);
  this.markDownHtml = marked;
  next();
});

ArticleSchema.statics.getByIdAndPopulate = async function (id, ArticleData) {
  try {
    console.log("running the schema method");
    const [doc] = await this.find({ _id: id });

    if (!doc) throw new Error("Document does not exist");
    for (const [key, value] of Object.entries(ArticleData)) {
      if (doc[key]) {
        doc[key] = value;
      }
    }
    return doc;
  } catch (error) {
    console.log("schema error", error);
    throw new Error(`Document of id ${id} not does not exist`);
  }
};

const Articles =
  mongoose.models.Article || mongoose.model("Article", ArticleSchema);

export default Articles;
