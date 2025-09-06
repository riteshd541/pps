import React from "react";
import "./SoulCinemaSection.css";

export default function SoulCinemaSection() {
  return (
    <section className="soul-cinema-section">
      <div className="soul-cinema-video-wrapper">
        <video
          className="soul-cinema-video"
          src="/Teaser.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/video-poster.jpg"
        />
        <div className="soul-cinema-content">
          <h2>SOUL+CINEMA</h2>
          <p>
            Every wedding is unique and so are our films. Over the years HOTC
            has set new benchmarks of storytelling within wedding realm and we
            are fortunate to have experienced so unique cultures and traditions
            across 25 countries and document stories that continuously overwhelm
            us.
          </p>
        </div>
      </div>
    </section>
  );
}
