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
    <footer className="overflow-hidden bg-birch-500 text-white px-4 py-10 lg:px-28">
      <Container>
        <div className="border-black border-opacity-20 md:py-8 md:flex md:justify-evenly items-center">
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
            <ul className=" text-sm  opacity-80 capitalize tracking-wider">
              {QuickLinks.map((link, key) => (
                <li key={key} className="mb-3">
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section className="">
            <h4 className=" font-semibold mb-6 md:text-lg">Social medias</h4>

            <SocialLinks color="text-white" size="xl" className=" gap-3 " />
          </section>
        </div>
      </Container>
      <section className="opacity-70 text-xs mt-10  px-4 pb-4 sm:text-center tracking-wider ">
        <p>Privacy and Policy,</p>
        <p>
          Developed by{" "}
          <Link
            href="https://hassan-ib.vercel.com"
            className="underline underline-offset-2">
            Hassan Ibrahim with love ❤
          </Link>
          . © 2021 Faculty of computing and informatics, LAUTECH. All Rights
          Reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
