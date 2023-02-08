import React from "react";
import "./EventCards.css";
import CardItem from "./CardItem";

function EventCards() {
  return (
    <div className="event">
      <h1>Below are up coming Community Events!</h1>
      <div className="event__container">
        <div className="event__wrapper">
          <ul className="event__items">
            <CardItem
              src="images/img-2.jpg"
              text="
              6 am Intercessory Prayer Call
              Tel: (571) 525-1291
              
              Access Code: 47-90-167
              11 a.m. Worship Service (Doors open at 10:45 a.m.)
              "
              label="Sunday and Thursday Events"
            />

            <CardItem
              src="images/img-3.jpg"
              text="
              9pm - Intercessory Prayer Call

              Tel: (571) 525-1291

              Access Code: 47-90-167
              "
              label="Tuesday Events"
            />

            <CardItem
              src="images/img-3.jpg"
              text="
              7:00pm - Bible Study

              Doors open at 6:45 p.m.
              "
              label="Wednesday Events"
            />
          </ul>
        </div>
      </div>

      <h1>Below Is the Montly Event Calender For 2023!</h1>
      <div className="event__container">
        <div className="event__wrapper"></div>

        <ul className="event__items">
          <CardItem
            src="images/img-2.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="January"
          />

          <CardItem
            src="images/img-3.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="Febuary"
          />
        </ul>

        <ul className="event__items">
          <CardItem
            src="images/img-4.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="March"
          />
          <CardItem
            src="images/img-8.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="April"
          />
        </ul>

        <ul className="event__items">
          <CardItem
            src="images/img-4.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="May"
          />
          <CardItem
            src="images/img-8.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="June"
          />
        </ul>

        <ul className="event__items">
          <CardItem
            src="images/img-4.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="July"
          />
          <CardItem
            src="images/img-8.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="August"
          />
        </ul>

        <ul className="event__items">
          <CardItem
            src="images/img-4.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="Septemebr"
          />
          <CardItem
            src="images/img-8.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="October"
          />
        </ul>

        <ul className="event__items">
          <CardItem
            src="images/img-4.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="November"
          />
          <CardItem
            src="images/img-8.jpg"
            text="COMEBACK FOR FUTURE ANOUNCEMENTS!"
            label="December"
          />
        </ul>
      </div>
    </div>
  );
}

export default EventCards;
