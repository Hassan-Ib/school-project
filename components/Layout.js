import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const getLayoutWithNavAndFooter = (page) => (
  <>
    <Navbar />
    <Container>{page}</Container>
    <Footer />
  </>
);

export const getLayout = (page) => <Container>{page}</Container>;
