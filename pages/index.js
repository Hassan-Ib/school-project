import Image from "next/image";
import Meta from "../components/Meta";
import Hero from "../components/Hero";
import { Link } from "../components/Link";
import Navbar from "../components/Navbar";
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
    </>
  );
}
