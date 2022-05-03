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
        <section aria-label="introduction cards" className="pt-20">
          <Card />
        </section>

        <section aria-label="latest from the faculty" className="py-16  ">
          <h2 className="relative text-2xl text-center font-semibold py-6 mb-32">
            <span className="relative">
              Latest From the Faculty
              <span className="absolute -bottom-3 bg-gradient-to-br from-pink-400 to-red-600 w-[30%] h-1 left-0"></span>
            </span>
          </h2>
          <section aria-label="article section" className="px-4 md:px-6 mb-32">
            <ArticlesList articles={articles.slice(0, 3)} />
          </section>
          <section aria-label="event section" className="px-4 md:px-6 ">
            <div className="mx-auto max-w-xl">
              <EventList events={events} />
            </div>
          </section>
          <div className="flex justify-end py-24">
            <LinkButton href="/articles" className="btn btn-sm btn-outline">
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
