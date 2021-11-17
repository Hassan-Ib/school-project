import React from "react";
import Image from "next/image";
import FooterLogo from "../public/Faculty-Logo.png";
import { Section } from "./Container";
import { Link, LinkBlue } from "./Link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const QuickLinks = [
    {
      href: "/about-us",
      text: "about us",
    },
    {
      href: "/articles",
      text: "see all articles",
    },
    {
      href: "/events",
      text: "see all Events",
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
    <footer className="overflow-hidden bg-birch-500 text-white">
      <Section className="border-black border-opacity-20 md:py-8 md:flex md:items-center md:justify-evenly">
        <Image alt=" school logo" src={FooterLogo} width={300} height={300} />
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
        <section className="mt-10">
          <h4 className=" font-semibold mb-6 md:text-lg">Social medias</h4>

          <SocialLinks
            color="twine-500"
            size="xl"
            className="border-black gap-2"
          />
        </section>
      </Section>
      <section className="opacity-80 text-xs md:text-sm px-4 pb-4 font-light tracking-wider flex flex-col md:flex-row gap-2 justify-center">
        <p>Privacy and Policy</p>
        <p>
          Design inspired by{" "}
          <Link href="https://mayashavin.com" className="underline">
            Maya shavin
          </Link>{" "}
          and Developed by{" "}
          <Link href="/hassan-Ibrahim" className="underline">
            Hassan Ibrahim
          </Link>
          . © 2021 Faculty of computing and informatics, LAUTECH. All Rights
          Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
