import { articles } from "../utils/articleData";
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
        <section aria-label="introduction cards" className="py-10 ">
          <Card />
          <LatestArticle {...articles[0]} />
        </section>

        <section aria-label="latest from the faculty">
          <h2 className="text-2xl text-center font-semibold py-10 ">
            <span className="inline-block border-b-4 border-birch-600 pb-2">
              Latest From the Faculty
            </span>
          </h2>
          <section
            aria-label="article section"
            className="my-2 px-4 md:px-6 py-10  ">
            <h3 className="text-xl font-semibold mb-6 ">
              {" "}
              <span className="inline-block border-b-2 border-birch-500">
                Articles
              </span>
            </h3>

            <Articles articles={articles} />
          </section>
          <section
            aria-label="article section"
            className="my-2 px-4 md:px-6 py-10 ">
            <h3 className="text-xl font-semibold mb-6">
              <span className="inline-block border-b-2 border-birch-500">
                Events
              </span>
            </h3>
            <EventList events={events} />
          </section>
          <div className="flex justify-end mt-8 py-10">
            <LinkButton
              href="/articles"
              className="btn btn-sm border-birch-500  text-black hover:text-white hover:bg-birch-500">
              view faculty&apos;s latests
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
