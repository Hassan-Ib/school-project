import Article from "./Article";
const ArticleSection = ({ articles }) => {
  // console.log("articleLisr", articles);
  return (
    <>
      <ul className="flex flex-col  gap-4">
        {articles.map((article) => (
          <Article key={article.Id} {...article} />
        ))}
      </ul>
    </>
  );
};

export default ArticleSection;
export { default as EditArticleForm } from "./ArticleForm";
export { default as PreviewArticle } from "./PreviewArticle";
