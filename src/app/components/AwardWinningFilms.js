import React from "react";

const AwardWinningFilms = () => {
  const films = [
    {
      title: "Zoya & Sahil",
      description:
        "What an unforgettable day capturing the wedding of Zoya and Sahil! From the joyful pre-wedding moments to the emotional vows, every second was filled with love and celebration. Joya looked absolutely stunning, and Sahil couldn’t stop smiling — the connection between them was beautiful to witness. The vibrant colors, heartfelt traditions, and energetic dances made the entire event magical. Family and friends brought so much warmth, laughter, and emotion. It was more than a wedding; it was a celebration of two hearts becoming one. I’m honored to have filmed such a special beginning to their forever journey",

      videoUrl: "https://www.youtube.com/embed/PCwOz-Ilq3c?si=5lEMDTdicYIowsZG",
    },
    {
      title: "Shanshank & Urvashi",
      description:
        "What an incredible journey it was capturing the beautiful wedding of Shashank and Urvashi! From the very first frame, their love radiated through every glance, every smile, and every moment shared. This wasn't just a wedding – it was a celebration of two souls coming together in the most magical way.",
      videoUrl: "https://www.youtube.com/embed/dlb3H8WQqNE?si=1z5_q5gAMbSB1t0i",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            STORIES BY PICTURE PERFECT
          </h2>
        </div>

        {/* Films Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {films.map((film, index) => (
            <div key={index} className="group">
              {/* Video Embed */}
              <div className="relative pb-[56.25%] overflow-hidden mb-6 rounded-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full group-hover:opacity-90 transition-opacity duration-300"
                  src={film.videoUrl}
                  title={film.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Film Info */}
              <div>
                <h3 className="text-3xl font-bold mb-4">{film.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {film.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <h3 className="text-2xl uppercase tracking-widest mb-8">
            With All Our Award Winning Films
          </h3>
          <p className="max-w-3xl mx-auto text-gray-300 mb-8 leading-relaxed">
            We at PPS celebrate the wild ones, the rule breakers, the
            travellers, the new age modern couple who are not afraid to
            experiment. We believe the ultimate goal of a wedding photographer
            is to justify the vibe of the wedding and the personalities of the
            couple.
          </p>
          <button
            type="button"
            className="border border-white px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300"
          >
            View Our Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardWinningFilms;
