import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "../HomeSection/HomeSection.css";
import coverVideo from "../../assets/videos/main-1.mp4"

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={coverVideo} autoPlay loop muted  alt="cover" />
      <h1>THE DIVINE CHURCH</h1>
      <p>Building Strong Families in Christ</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Donate
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Service Times <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
