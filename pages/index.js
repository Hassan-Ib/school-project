import Image from "next/image";
import Meta from "../components/Meta";
import Hero from "../components/Hero";
import { Link } from "../components/Link";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import ArticleCard from "../components/ArticleCard";
import ArticleSection from "../components/ArticleSection";
export default function Homepage() {
  return (
    <>
      <Meta />
      <header
        className="bg-hero-banner
       bg-cover
       bg-center
       bg-no-repeat
       ">
        <Navbar />
        <Hero />
      </header>
      <main>
        <Card />
        <ArticleCard />
        <h3 className=" text-center text-lg font-medium mt-4">
          Latest From the Faculty
        </h3>
        <ArticleSection />
      </main>
    </>
  );
}
