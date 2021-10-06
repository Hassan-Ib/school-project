import HeadMeta from "../components/Meta";
import ArticleList from "../components/Article/ArticleList";
import Header from "../components/Header";
import Container, { Section } from "../components/Container";
import EventList from "../components/Event/EventList";
import IntroCard, {
  IntroCardImage,
  IntroCardArticle,
  IntroCardButton,
} from "../components/IntroCard1";
import H2 from "../components/Typograhpy/H2";
import Paragraph from "../components/Typograhpy/Paragraph";
import cardImage from "../public/img/christina-wocintechchat-com-fch6vkbouCc-unsplash.jpg";
import { Button } from "../components/Link";
import Footer from "../components/Footer";

export default function Homepage({ articles, events }) {
  articles = [
    {
      key: 1,
    },
    {
      key: 2,
    },
    {
      key: 3,
    },
  ];
  return (
    <Container>
      <HeadMeta />
      <Header />
      <main>
        {/* <IntroCard>
          <IntroCardImage src={cardImage} alt="article image" />
          <IntroCardArticle>
            <H2 className="text-xl font-bold mb-2">
              Distruptive Technolgies, The demands on 21st century higher
              education institutions and professional practices.
            </H2>
            <Paragraph>
              Our first faculty lecture series debuted in 2021
            </Paragraph>
          </IntroCardArticle>
          <IntroCardButton className="capitalize">read article</IntroCardButton>
        </IntroCard> */}
        <IntroCard className="bg-gray-800 text-white">
          <IntroCardImage src={cardImage} alt="article image" />
          <IntroCardArticle className="px-4 py-8">
            <H2 className="text-xl font-bold mb-2">
              Distruptive Technolgies, The demands on 21st century higher
              education institutions and professional practices.
            </H2>
            <Paragraph>
              Our first faculty lecture series debuted in 2021
            </Paragraph>
            <IntroCardButton className="capitalize">
              read article
            </IntroCardButton>
          </IntroCardArticle>
        </IntroCard>

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
  return {
    props: { articles: [], events: [] },
  };
};
