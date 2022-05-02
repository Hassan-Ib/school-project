import ArticleCard from "./ArticleCard";
import PropTypes from "prop-types";

const ArticlesList = ({ articles, mode = "grid" }) => {
  console.log(articles.map((article) => article.coverImage));
  return (
    <section className="my-6">
      <ul
        className={`${
          mode === "grid"
            ? "grid lg:grid-cols-3 gap-10 lg:gap-4"
            : "flex flex-col gap-8"
        } `}
      >
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

ArticlesList.defaultProps = {
  mode: "grid",
};
ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  mode: PropTypes.oneOf(["grid", "list"]).isRequired,
};
