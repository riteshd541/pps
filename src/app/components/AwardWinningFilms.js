import React from "react";

const AwardWinningFilms = () => {
  const films = [
    {
      title: "Love In Second Innings",
      description:
        "Second marriage, for many, is still a taboo. And this story illustrates why it's not. It's a treatise on how the past doesn't come in the way of love and respect.",
      awards: [
        "WEDDING FILMMAKER OF THE YEAR 2012-2013, 2018",
        "PLATINUM FILM OF THE YEAR 2017",
      ],
      videoUrl: "https://www.youtube.com/embed/l8cMzzHomhc?si=BNpH_jTQOZH7FSf6",
    },
    {
      title: "Twenty Years in the Making",
      description:
        "This one is special, very special. Hiba and Akkar's story took us on a journey all the way from Hiba's childhood till their reception in Bhopal.",
      awards: ["WEDDING INFLUENCERS OF THE YEAR 2011"],
      videoUrl: "https://www.youtube.com/embed/X3H5ywNrLhk?si=5lRmB2cDasptQdPg",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-4">
            Award Winning Films
          </h2>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <span className="text-xl uppercase">Los Angeles</span>
            <span className="text-4xl font-bold">•</span>
            <span className="text-xl uppercase">Film Festival</span>
          </div>
          <div className="bg-white h-1 w-24 mx-auto mb-8"></div>
          <h3 className="text-2xl uppercase tracking-widest">
            Prawts Film Angeles 2020
          </h3>
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

                {/* Awards */}
                <div className="space-y-4">
                  {film.awards.map((award, i) => (
                    <div key={i} className="flex items-start">
                      <div className="bg-white w-3 h-3 mt-1 mr-3"></div>
                      <span className="text-sm uppercase tracking-wider">
                        {award}
                      </span>
                    </div>
                  ))}
                </div>
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
            We at HOTC celebrate the wild ones, the rule breakers, the
            travellers, the new age modern couple who are not afraid to
            experiment. We believe the ultimate goal of a wedding photographer
            is to justify the vibe of the wedding and the personalities of the
            couple.
          </p>
          <button className="border border-white px-8 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
            View All Films
          </button>
        </div>
      </div>
    </div>
  );
};

export default AwardWinningFilms;
