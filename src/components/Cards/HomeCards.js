import React from "react";
import "./HomeCards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Come Join A Community Of Fellowship!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Weekly Services Upcoming Events"
              label="Events"
              path="/events"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Corporate Prayer & Fasting Guide"
              label="Prayer"
              path="/prayer"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Meet The Leaders Of The Congragation"
              label="Minestry"
              path="/minestry"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Our Community Vision"
              label="About Us"
              path="/about-us"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Contact Us"
              path="/contact-us"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
