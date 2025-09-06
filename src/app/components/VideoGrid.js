"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

const getVideoIdFromUrl = (url) => {
  const match = url.match(/embed\/([^?&]+)/);
  return match ? match[1] : null;
};

export default function YouTubeVideoGrid() {
  const youtubeLinks = [
    {
      url: "https://www.youtube.com/embed/l8cMzzHomhc?si=BNpH_jTQOZH7FSf6",
      title: "Video 1",
    },
    {
      url: "https://www.youtube.com/embed/l8cMzzHomhc?si=BNpH_jTQOZH7FSf6",
      title: "Video 2",
    },
    {
      url: "https://www.youtube.com/embed/X3H5ywNrLhk?si=5lRmB2cDasptQdPg",
      title: "Video 3",
    },
    {
      url: "https://www.youtube.com/embed/X3H5ywNrLhk?si=5lRmB2cDasptQdPg",
      title: "Video 4",
    },
  ];

  const playerRefs = useRef([]);
  const [players, setPlayers] = useState([]);
  const [playingStatus, setPlayingStatus] = useState({});
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
            autoplay: 0, // ⬅ stop autoplay
            mute: 0, // ⬅ unmute by default
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
          },
          events: {
            onReady: () => {
              // ❌ removed auto play
              setPlayingStatus((prev) => ({ ...prev, [i]: false }));
            },
          },
        });
      });
      setPlayers(newPlayers);
    }
  }, []);
  const togglePlay = (index) => {
    const player = players[index];
    if (!player) return;

    const isPlaying = player.getPlayerState() === window.YT.PlayerState.PLAYING;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
    setPlayingStatus((prev) => ({ ...prev, [index]: !isPlaying }));
  };

  return (
    <section className="w-full px-4 py-12 bg-pink">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
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
            {hoveredIndex === index && !playingStatus[index] && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-black/50 p-3 rounded">
                {link.title}
              </div>
            )}
            <button
              onClick={() => togglePlay(index)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow-md"
            >
              {playingStatus[index] ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
