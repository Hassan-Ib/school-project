import Article from "./Article";
const ArticleSection = ({ articles }) => {
  // console.log("articleLisr", articles);
  return (
    <>
      <ul className="article-grid">
        {articles.map((article) => (
          <Article key={article.Id} {...article} />
        ))}
      </ul>
    </>
  );
};

export default ArticleSection;
