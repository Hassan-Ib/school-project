import { articles } from "../utils/articleData";
import HeadMeta from "../components/Meta";
import ArticleList from "../components/Article/ArticleList";
import Header from "../components/Header";
import { Section } from "../components/Container";
import EventList from "../components/Event/EventList";
import Card from "../components/IntroCard";
import cardImage from "../public/img/christina.jpg";
import LatestArticle from "../components/LatestArticle";
import { Button } from "../components/Link";
import Footer from "../components/Footer";
import DBConnect from "../utils/DBConnection";
import Articles from "../models/ArticleModel";

export default function Homepage({ articles, events }) {
  const latesArticle = {
    image: {
      src: cardImage,
      alt: "article image of a lady coding",
    },
    btnText: "read article",
    title: `Distruptive Technolgies, The demands on 21st century higher education
        institutions and professional practices.`,
    desc: `Our first faculty lecture series debuted in 2021`,
  };

  return (
    <>
      <HeadMeta />
      <Header />
      <main>
        <Card />
        <LatestArticle {...latesArticle} />
        <h3 className=" text-center text-lg font-medium my-10">
          Latest From the Faculty
        </h3>
        <Section>
          <ArticleList articles={articles} />
          <div className="flex justify-end mt-8">
            <Button type="section">see all articles</Button>
          </div>
        </Section>
        <Section>
          <EventList events={events} />
          <div className="flex justify-end mt-8">
            <Button type="section">see all Events</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  // console.log("articles", articles);
  const fieldQuery = "title description image slug";
  await DBConnect();
  let query = Articles.find({}, { _id: 0 }).select(fieldQuery).limit(3);
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
