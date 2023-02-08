import React from "react";
import "../../App.css";
import Cards from "../Cards/EventCards";
import EventSection from "../EventSection/EventSection";
import Footer from "../Footer/Footer";

function Events() {
  return (
    <>
      <EventSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Events;
