import HeadMeta from "../components/Meta";
import {
  getLayoutWithNavAndFooter,
  Articles,
  Section,
  Events,
  Card,
  LatestArticle,
  SectionButton,
} from "../components";
import Header from "../components/Header";
import { articles } from "../utils/articleData";
import cardImage from "../public/img/christina.jpg";
import DBConnect from "../utils/DBConnection";
import { default as ArticlesModel } from "../models/ArticleModel";

const Homepage = function ({ articles, events }) {
  return (
    <>
      <HeadMeta />
      <Header />
      <main>
        <Card />
        <LatestArticle {...articles[0]} />
        <h3 className=" text-center text-lg font-medium my-10">
          Latest From the Faculty
        </h3>
        <Section>
          <Articles articles={articles} />
          <div className="flex justify-end mt-8">
            <SectionButton href="/articles">see all articles</SectionButton>
          </div>
        </Section>
        <Section>
          <Events events={events} />
          <div className="flex justify-end mt-8">
            <SectionButton href="/articles">see all Events</SectionButton>
          </div>
        </Section>
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
