import React from "react";
import "../../App.css";
import Cards from "../Cards/HomeCards";
import HomeSection from "../HomeSection/HomeSection";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <HomeSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
