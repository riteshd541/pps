"use client";

import { useEffect, useRef, useState } from "react";

const getVideoIdFromUrl = (url) => {
  const match = url.match(/embed\/([^?&]+)/);
  return match ? match[1] : null;
};

export default function YouTubeVideoGrid() {
  const youtubeLinks = [
    {
      url: "https://www.youtube.com/embed/1pT57alMhF4?si=_MnrkkuPqnccERor",
      title: "Video 1",
    },
    {
      url: "https://www.youtube.com/embed/BPqpThBrNPs?si=RTumXvrmsGFO2apP",
      title: "Video 2",
    },
    {
      url: "https://www.youtube.com/embed/bXC1GkcOtJw?si=oRkzYzsBHZKjkyck",
      title: "Video 3",
    },
    {
      url: "https://www.youtube.com/embed/zY2L5QzAGuE?si=Qe5qfaBW73HeUvLg",
      title: "Video 4",
    },
  ];

  const playerRefs = useRef([]);
  const [players, setPlayers] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (window.YT) {
      loadPlayers();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
      window.onYouTubeIframeAPIReady = loadPlayers;
    }

    function loadPlayers() {
      const newPlayers = youtubeLinks.map((link, i) => {
        const videoId = getVideoIdFromUrl(link.url);
        return new window.YT.Player(`player-${i}`, {
          videoId,
          playerVars: {
            autoplay: 0,
            mute: 0,
            controls: 1, // ✅ YouTube controls visible
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
          },
        });
      });
      setPlayers(newPlayers);
    }
  }, []);

  return (
    <section className="w-full px-4 py-12 bg-pink">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
        {youtubeLinks.map((link, index) => (
          <div
            key={index}
            className="relative w-full pt-[56.25%] overflow-hidden rounded-lg shadow-lg bg-black"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              id={`player-${index}`}
              ref={(el) => (playerRefs.current[index] = el)}
              className="absolute top-0 left-0 w-full h-full"
            />
            {hoveredIndex === index && (
              <div className="absolute top-3 left-3 z-10 text-white bg-black/50 px-2 py-1 rounded">
                {link.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
