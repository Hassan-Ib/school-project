import Article from "./ArticleCard";
const ArticleSection = ({ articles }) => {
  return (
    <>
      <ul className="flex flex-col items-center gap-10 max-w-5xl mx-auto sm:px-10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((data) => (
          <Article key={data.key} />
        ))}
      </ul>
    </>
  );
};

export default ArticleSection;
