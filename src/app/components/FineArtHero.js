"use client";

import Image from "next/image";

export default function FineArtHero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-between px-10 lg:px-24 py-10"
      style={{ backgroundImage: 'url("/main-2.jpg")' }}
    >
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Text Content */}
      <div className="relative z-10 w-full max-w-xl text-white">
        <h1 className="text-4xl lg:text-5xl font-light italic leading-tight mb-6">
          Fine Work at Picture Perfect Studio
        </h1>
        <p className="text-sm lg:text-base text-gray-100 mb-6 leading-relaxed">
          At Picture Perfect Studio, fine work is not just a standard—it’s our
          promise. Every photograph we capture is a testament to our commitment
          to quality, precision, and artistry. We believe in the power of
          details, whether it’s the perfect lighting, the right moment, or the
          subtle expression that makes a photograph unforgettable.
        </p>
      </div>
    </section>
  );
}
