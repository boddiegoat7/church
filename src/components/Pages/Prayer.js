import React from "react";
import "../../App.css";
import Cards from "../Cards/PrayerCards";
import PrayerSection from "../PrayerSection/PrayerSection";
import Footer from "../Footer/Footer";

function Events() {
  return (
    <>
      <PrayerSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Events;
