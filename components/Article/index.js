import Article from "./Article";
const ArticleSection = ({ articles }) => {
  // console.log("articleLisr", articles);
  return (
    <section className="my-6">
      <ul className="flex flex-col lg:flex-row gap-4 ">
        {articles.map((article) => (
          <Article key={article.Id} {...article} />
        ))}
      </ul>
    </section>
  );
};

export default ArticleSection;
export { default as EditArticleForm } from "./ArticleForm";
export { default as PreviewArticle } from "./PreviewArticle";
