import DBConnect from "../utils/DBConnection";
import { default as ArticlesModel } from "../models/ArticleModel";
import { GrArticle } from "react-icons/gr";
import { MdEventAvailable } from "react-icons/md";
import {
  getLayoutWithNavAndFooter,
  ArticlesList,
  EventList,
  Card,
  LinkButton,
  Header,
  HeadMeta,
} from "../components";

const Homepage = function ({ articles, events }) {
  articles = JSON.parse(articles);
  console.log("rendering home page");
  return (
    <>
      <HeadMeta />
      <Header />
      <main>
        <section aria-label="introduction cards" className="pt-32">
          <Card />
          {/* <LatestArticle {...articles[0]} /> */}
        </section>

        <section aria-label="latest from the faculty" className="pt-32">
          <h2 className="text-2xl text-center font-semibold py-10 ">
            <span className="inline-block border-b-4 border-birch-600 pb-2">
              Latest From the Faculty
            </span>
          </h2>
          <section
            aria-label="article section"
            className="my-2 px-4 md:px-6 pb-32 ">
            <h3 className="text-xl font-semibold mb-6 ">
              <GrArticle />
              <span className="inline-block border-b-2 border-birch-500">
                Articles
              </span>
            </h3>

            <ArticlesList articles={articles.slice(1)} />
          </section>
          <section
            aria-label="article section"
            className="my-2 px-4 md:px-6 py-10 relative ">
            <h3 className="text-xl font-semibold mb-6">
              <span className="inline-block border-b-2 border-birch-500">
                <MdEventAvailable /> Events
              </span>
            </h3>
            <div className="mx-auto max-w-xl">
              <EventList events={events} />
            </div>
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
  const fieldQuery = "title coverImage slug createdAt";
  await DBConnect();
  let query = ArticlesModel.find({}, { _id: 0 })
    .select(fieldQuery)
    .sort("-createdAt")
    .limit(4);
  query = await query.lean();

  // console.log("db query ", query);

  return {
    props: {
      articles: JSON.stringify(query),
      events: [],
    },
    revalidate: 10,
  };
};
