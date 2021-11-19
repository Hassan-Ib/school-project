import HeadMeta from "../components/Meta";
import {
  Container,
  Articles,
  Section,
  Events,
  Navbar,
  Card,
  LatestArticle,
  Button,
  Footer,
} from "../components";
import Header from "../components/Header";

import { articles } from "../utils/articleData";
import cardImage from "../public/img/christina.jpg";
import DBConnect from "../utils/DBConnection";
import { default as ArticlesModel } from "../models/ArticleModel";

const Homepage = function ({ articles, events }) {
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
          <Articles articles={articles} />
          <div className="flex justify-end mt-8">
            <Button type="section">see all articles</Button>
          </div>
        </Section>
        <Section>
          <Events events={events} />
          <div className="flex justify-end mt-8">
            <Button type="section">see all Events</Button>
          </div>
        </Section>
      </main>
    </>
  );
};

// eslint-disable-next-line react/display-name
Homepage.getLayout = (page) => (
  <Container>
    <Navbar />
    {page}
    <Footer />
  </Container>
);

Homepage.displayName = "Homepage";

export default Homepage;

export const getStaticProps = async () => {
  // console.log("articles", articles);
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
