import { articles } from "../utils/articleData";
import HeadMeta from "../components/Meta";
import ArticleList from "../components/Article/ArticleList";
import Header from "../components/Header";
import Container, { Section } from "../components/Container";
import EventList from "../components/Event/EventList";
import Card from "../components/IntroCard";
import cardImage from "../public/img/christina.jpg";
import LatestArticle from "../components/LatestArticle";
import { Button } from "../components/Link";
import Footer from "../components/Footer";

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
    <Container>
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
    </Container>
  );
}

export const getStaticProps = async () => {
  // console.log("articles", articles);
  const articleData = articles.slice(0, 3);
  // console.log("articleData", articleData);

  return {
    props: {
      articles: articleData,
      events: [],
    },
  };
};
