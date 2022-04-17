import ArticleCard from "./ArticleCard";

const ArticlesList = ({ articles }) => {
  return (
    <section className="my-6">
      <ul className="grid lg:grid-cols-3 gap-10 lg:gap-4 ">
        {articles.map((article) => (
          <li key={article.slug} className=" shadow-lg max-w-2xl m-auto">
            <ArticleCard {...article} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default ArticlesList;
