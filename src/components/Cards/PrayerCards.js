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
              text="
              1. Improves your ability to hear from God (Ezra 8:21)

2. Builds you up spiritually (Matthew 4:2, 23, 24)

3. Lifts oppression and breaks demonic powers ( Mark 9:29, Isaiah 58: 6-8)

4. Leads you into a time of humility and repentance (Psalm 109:22-26)

5. Causes health to spring forth speedily (Isaiah 58:8)"
              label="Events"
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
