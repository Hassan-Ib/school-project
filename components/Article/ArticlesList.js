import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles }) => {
  // console.log("articleLisr", articles);
  return (
    <section className="my-6">
      <ul className="flex flex-col lg:flex-row gap-10 lg:gap-4 ">
        {articles.map((article) => (
          <ArticleCard key={article.Id} {...article} />
        ))}
      </ul>
    </section>
  );
};
export default ArticlesList;
