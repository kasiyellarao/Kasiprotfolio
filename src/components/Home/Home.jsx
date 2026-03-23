import React from "react";
import "./Home.css";
import heroImg from "../../assets/kasi.png";
import kasi from "../../assets/CV_.pdf";

export default function Hero() {
  return (
    <section className="hero">

      {/* LEFT BACKGROUND CIRCLE */}
      <div className="circle left-circle"></div>

      {/* RIGHT CONCENTRIC BACKGROUND CIRCLES */}
      <div className="circle big-circle"></div>
      <div className="circle mid-circle"></div>
      <div className="circle small-circle"></div>

      <div className="hero-container">

        {/* TEXT */}
        <div className="hero-text">
          <span className="tagline">Hi, I'm Kasi Yella Rao</span>

          <h2>
            Full Stack Developer <br />
            React | Node.js | MongoDB.<br/>
          </h2>


       <a href= {kasi} target="_blank" rel="noopener noreferrer">
  <button className="hero-btn">
    Resume
  </button>
</a>

        </div>

        {/* IMAGE */}
        <div className="hero-image">
          <img src={heroImg} alt="Team" />
        </div>

      </div>
    </section>
  );
}
