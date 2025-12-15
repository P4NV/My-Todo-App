import { useEffect, useState } from 'react';

import {
  natureVideos,
  cityVideos,
  pixelVideos,
  cinematicVideos,
} from '../video';

export default function Header() {
  /* =======================
      STATE
  ======================= */
  const [video, setVideo] = useState(null);

  /* =======================
      VIDEO SCHEDULE
  ======================= */
  const VIDEO_SCHEDULE = {
    morning: [
      natureVideos.autumnRiver,
      natureVideos.skyAndRiver,
    ],

    day: [
      cityVideos.futuristicCity,
      natureVideos.yellowstone,
    ],

    evening: [
      cityVideos.sunsetCity,
      pixelVideos.pixelLofiCafe,
    ],

    night: [
      cityVideos.cyberpunkCity,
      pixelVideos.eightBitWater,
      cinematicVideos.residentEvil,
    ],
  };

  /* =======================
      TIME DETECTOR
  ======================= */
  function getTimePeriod() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 10) return 'morning';
    if (hour >= 10 && hour < 17) return 'day';
    if (hour >= 17 && hour < 21) return 'evening';
    return 'night';
  }

  /* =======================
      RANDOM PICKER
  ======================= */
  function getRandomVideo(videos, current) {
    if (!videos || videos.length === 0) return null;
    if (videos.length === 1) return videos[0];

    let next;
    do {
      next = videos[Math.floor(Math.random() * videos.length)];
    } while (next === current);

    return next;
  }

  /* =======================
      EFFECT
  ======================= */
  useEffect(() => {
    const period = getTimePeriod();
    const pool = VIDEO_SCHEDULE[period];

    setVideo(getRandomVideo(pool));

    const interval = setInterval(() => {
      setVideo(prev => getRandomVideo(pool, prev));
    }, 1000 * 60 * 5); // every 5 minutes

    return () => clearInterval(interval);
  }, []);

  /* =======================
      RENDER
  ======================= */
  return (
    <div className="Header-Container">
      {video && (
        <video
          key={video}
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="Header-Video"
        />
      )}
    </div>
  );
}