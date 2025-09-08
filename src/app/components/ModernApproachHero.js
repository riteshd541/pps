// components/ModernApproachHero.js
"use client";

import Image from "next/image";

export default function ModernApproachHero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-image hero-image-left">
          {/* Replace with your image */}
          <Image
            src="/feb.jpg"
            alt="Bride closeup"
            width={400}
            height={500}
            className="image"
            priority
          />
        </div>
        <div className="hero-text">
          <h1>
            <span style={{ color: "black" }} className="modern">
              Turning Emotions
            </span>
            <br />
            <span style={{ color: "black" }} className="age-old">
              {" "}
              Into Art
            </span>
          </h1>

          <p>
            At Picture Perfect Studio, every photograph is more than just an
            image—it’s a memory frozen in time, a piece of life’s most beautiful
            story. Founded in 2015 by the dynamic duo, Sulok Sharan and Alok
            Sharan, our studio is a creative space where passion meets
            precision, and moments are transformed into timeless works of art.
          </p>
          <p>
            We’re not just photographers—we’re storytellers. And each shot we
            take is carefully crafted to reflect the soul of the people and
            moments we’re capturing. With Picture Perfect Studio, you’re not
            just getting a photograph; you’re getting a piece of your story,
            told in the most beautiful way possible.
          </p>
          <div className="hero-logos">
            <img src="/feature.png" alt="Awards" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-section {
          background: #f5ede6;
          padding: 2rem 0;
        }
        .hero-content {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          max-width: 1200px;
          margin: 0 auto;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .hero-image {
          flex: 1 1 250px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-text {
          flex: 2 1 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        h1 {
          font-size: 2.5rem;
          font-family: "Playfair Display", serif;
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        .modern {
          letter-spacing: 0.1em;
        }
        .age-old {
          font-weight: 400;
          font-style: italic;
        }
        p {
          font-size: 1.1rem;
          color: #444;
          margin-bottom: 1rem;
          max-width: 600px;
          text-align: justify;
        }
        .hero-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 1.2rem;
          font-family: "Playfair Display", serif;
          color: #222;
          margin-top: 1.5rem;
        }
        @media (max-width: 900px) {
          .hero-content {
            flex-direction: column;
            align-items: center;
          }
          .hero-image {
            display: none;
          }
          .hero-image,
          .hero-text {
            flex: 1 1 100%;
            text-align: center;
            max-width: 100%;
          }
        }
        @media (max-width: 600px) {
          h1 {
            font-size: 1.5rem;
          }
          .hero-logos {
            font-size: 1rem;
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
