import ArticleCard from "./ArticleCard";
const ArticleSection = ({ articles }) => {
  // console.log("articleLisr", articles);
  return (
    <section className="my-6">
      <ul className="flex flex-col lg:flex-row gap-4 ">
        {articles.map((article) => (
          <ArticleCard key={article.Id} {...article} />
        ))}
      </ul>
    </section>
  );
};

export default ArticleSection;
export { ArticleCard };
export { default as ArticleEditor } from "./ArticleEditor";
export { default as TipTapEditor } from "./TipTapEditor";
export { default as PreviewArticle } from "./PreviewArticle";
