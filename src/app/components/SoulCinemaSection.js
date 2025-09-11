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
          <h2>ELEGANT & EMOTIONAL</h2>
          <p>
            Every wedding is a story waiting to be told, and our films bring
            those stories to life. Over the years, we’ve redefined wedding
            storytelling—capturing emotions, moments, and memories across 15
            states. Each culture, each couple, and each tradition has left an
            unforgettable mark on us.
          </p>
        </div>
      </div>
    </section>
  );
}
