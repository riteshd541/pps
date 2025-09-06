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
        <h1 className="text-5xl lg:text-6xl font-light italic leading-tight mb-6">
          FINE-ART CLASS
        </h1>
        <p className="text-sm lg:text-base text-gray-100 mb-6 leading-relaxed">
          Ibtida is our finest offering with fine-art editorial style
          photography led by Sidharth Sharma, the founder of House On The
          Clouds. The essence of Ibtida is to create photographs that stand the
          test of time. The classic, non-intrusive approach of documenting the
          most important day of your life with bright and airy images that take
          you back in time. This is an exclusive package which we offer to
          selected weddings only and we believe this deserves a website of its
          own.
        </p>
        <a
          href="https://ibtida.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#a28e64] text-white px-6 py-3 rounded-md font-medium hover:bg-[#8b7955] transition"
        >
          Visit Ibtida.Co
        </a>
      </div>
    </section>
  );
}
