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
            src="/assets/gallery1.jpg"
            alt="Bride closeup"
            width={400}
            height={500}
            className="image"
            priority
          />
        </div>
        <div className="hero-text">
          <h1>
            <span className="modern">A MODERN APPROACH</span>
            <br />
            <span className="age-old">to an AGE OLD TRADITION</span>
          </h1>
          <p>
            Considered to be the epitome of Modern Photography and Filmmaking,
            HOTC has transformed the Indian Wedding landscape on a regular
            basis. For almost a decade House On The Clouds has been creating
            photographs and films which are timeless and have been etched in
            memories of thousands of people forever.
          </p>
          <p>
            Awarded as the Wedding Filmmaker of the year for four consecutive
            years at the Weddingsutra awards along with numerous other awards
            HOTC is the only company listed on IMDB for its award winning films.
          </p>
          <div className="hero-logos">
            <span>VOGUE</span>
            <span>COSMOPOLITAN</span>
            <span>HELLO!</span>
            <span>BRIDES TODAY</span>
            <span>TRAVEL+LEISURE</span>
          </div>
        </div>
        <div className="hero-image hero-image-right">
          {/* Replace with your image */}
          <Image
            src="/assets/gallery2.jpg"
            alt="Bride with scenic background"
            width={400}
            height={500}
            className="image"
            priority
          />
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
          .hero-image,
          .hero-text {
            flex: 1 1 100%;
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
