import Image from "next/image";
import HeadMeta from "../components/Meta";
import IntroCard from "../components/IntroCard";
import ArticleCard from "../components/ArticleCard";
import ArticleList from "../components/Article/ArticleList";
import Header from "../components/Header";
import Container from "../components/Container";
import Section from "../components/Section";
export default function Homepage({ articles, events }) {
  return (
    <Container>
      <HeadMeta />
      <Header />
      <main>
        <IntroCard />
        <ArticleCard />
        <h3 className=" text-center text-lg font-medium my-10">
          Latest From the Faculty
        </h3>
        <Section>
          <ArticleList />
        </Section>
      </main>
    </Container>
  );
}

export const getStaticProps = async () => {
  return {
    props: { articles: [], events: [] },
  };
};
