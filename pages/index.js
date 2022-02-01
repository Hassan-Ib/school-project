import { articles } from "../utils/articleData";
import cardImage from "../public/img/christina.jpg";
import DBConnect from "../utils/DBConnection";
import { default as ArticlesModel } from "../models/ArticleModel";
import {
  getLayoutWithNavAndFooter,
  Articles,
  EventList,
  Card,
  LatestArticle,
  LinkButton,
  Header,
  HeadMeta,
} from "../components";

const Homepage = function ({ articles, events }) {
  return (
    <>
      <HeadMeta />
      <Header />
      <main>
        <Card />
        <LatestArticle {...articles[0]} />
        <h3 className="text-2xl text-center font-semibold my-12 ">
          <span className="inline-block border-b-4 border-birch-600 pb-2">
            Latest From the Faculty
          </span>
        </h3>
        <section className="my-2 px-4 md:px-6  relative before:absolute before:inset-0 before:h-full before:w-1 before:bg-birch-500 before:-ml-4">
          <p className="text-xl font-semibold mb-6 ">
            {" "}
            <span className="inline-block border-b-2 border-birch-500">
              Articles
            </span>
          </p>
          <div className="flex items-center justify-center md:max-w-">
            <Articles articles={articles} />
          </div>
          <p className="text-xl font-semibold mb-6">
            <span className="inline-block border-b-2 border-birch-500">
              Events
            </span>
          </p>
          <EventList events={events} />

          <div className="flex justify-end mt-8">
            <LinkButton
              href="/articles"
              className="btn btn-sm bg-birch-500 text-white hover:bg-birch-400">
              view more
            </LinkButton>
          </div>
        </section>
      </main>
    </>
  );
};

// eslint-disable-next-line react/display-name
Homepage.getLayout = getLayoutWithNavAndFooter;
Homepage.displayName = "Homepage";

export default Homepage;

export const getStaticProps = async () => {
  const fieldQuery = "title description image slug";
  await DBConnect();
  let query = ArticlesModel.find({}, { _id: 0 }).select(fieldQuery).limit(3);
  query = await query.lean();

  console.log("query", query);

  const articleData = articles.slice(0, 3);

  return {
    props: {
      realArticle: query,
      articles: articleData,
      events: [],
    },
  };
};
