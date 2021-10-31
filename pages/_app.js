import React from "react";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Navbar />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
