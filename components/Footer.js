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
      text: "facultyofcomputingandinformatics@gmail.com",
    },
  ];
  return (
    <footer className="overflow-hidden">
      <Section className="   pb-8 border-black border-opacity-20 md:py-10 md:flex md:items-center md:justify-evenly">
        <Image alt=" school logo" src={FooterLogo} width={300} height={300} />
        <section>
          <h4 className=" font-semibold mb-6 md:text-lg">Quick Links</h4>
          <ul>
            {QuickLinks.map((link, key) => (
              <li key={key} className="mb-3">
                <Link
                  href={link.href}
                  className=" opacity-60 capitalize text-sm font-medium ">
                  {link.text}
                </Link>
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
      <Section className="opacity-80 max-w-lg text-xs">
        <p>privacy policy</p>
        <p>
          Design inspired by{" "}
          <LinkBlue href="https://mayashavin.com">Maya shavin</LinkBlue> and
          Developed by{" "}
          <LinkBlue href="/hassan-Ibrahim">Hassan Ibrahim</LinkBlue>. © 2021
          Faculty of computing and informatics, LAUTECH. All Rights Reserved.
        </p>
      </Section>
    </footer>
  );
};

export default Footer;
