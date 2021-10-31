import Article from "./index";
const ArticleSection = ({ articles }) => {
  // console.log("articleLisr", articles);
  return (
    <>
      <ul className="flex flex-col items-center gap-10 max-w-5xl mx-auto sm:px-10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Article key={article.key} {...article} />
        ))}
      </ul>
    </>
  );
};

export default ArticleSection;
