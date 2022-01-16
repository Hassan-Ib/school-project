import React from "react";
import Image from "next/image";
import FooterLogo from "../public/img/LAUTECH-Logo.png";
import { Section } from "./Container";
import { Link } from "./Link";
import SocialLinks from "./SocialLinks";
import Container from "./Container";

const Footer = () => {
  const QuickLinks = [
    {
      href: "/about-us",
      text: "about us",
    },
    {
      href: "/articles",
      text: "Articles / Events",
    },

    {
      href: "/contacts",
      text: "contacts",
    },
    {
      href: "/mail",
      text: "Email us",
    },
  ];
  return (
    <Container>
      <footer className="overflow-hidden bg-birch-500 text-white py-10">
        <Section className="border-black border-opacity-20 md:py-8 md:flex md:justify-evenly">
          <div className="mb-6">
            <Image
              alt="school logo"
              src={FooterLogo}
              width={200}
              height={200}
              className="mb-6"
            />
          </div>
          <section>
            <h4 className="font-semibold mb-6 md:text-lg">Quick Links</h4>
            <ul className="font-light  opacity-80 capitalize tracking-wider">
              {QuickLinks.map((link, key) => (
                <li key={key} className="mb-3">
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="">
            <h4 className=" font-semibold mb-6 md:text-lg">Social medias</h4>

            <SocialLinks
              color="twine-500"
              size="xl"
              className="border-black gap-2"
            />
          </section>
        </Section>
        <section className="opacity-80 text-xs md:text-sm px-4 pb-4 font-light tracking-wider flex flex-col md:flex-row gap-2 justify-center">
          <p>Privacy and Policy,</p>
          <p>
            Developed by{" "}
            <Link href="/hassan-Ibrahim" className="underline">
              Hassan Ibrahim
            </Link>
            . © 2021 Faculty of computing and informatics, LAUTECH. All Rights
            Reserved.
          </p>
        </section>
      </footer>
    </Container>
  );
};

export default Footer;
