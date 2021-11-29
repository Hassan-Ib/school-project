import React from "react";
import { getLayoutWithNavAndFooter } from "../components";

const About = () => {
  return <div className="text-7xl capitalize font-bold">about page</div>;
};

About.getLayout = getLayoutWithNavAndFooter;

export default About;
