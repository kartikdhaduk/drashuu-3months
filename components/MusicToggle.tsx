"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Optional: drop a soft instrumental at /public/music/song.mp3 to enable.
const MUSIC_SRC = "/music/song.mp3";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const a = new Audio(MUSIC_SRC);
    a.loop = true;
    a.volume = 0.35;
    a.preload = "auto";
    a.addEventListener("error", () => setAvailable(false));
    audioRef.current = a;
    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (playing) {
        a.pause();
        setPlaying(false);
      } else {
        await a.play();
        setPlaying(true);
      }
    } catch {
      setAvailable(false);
    }
  };

  if (!available) return null;

  return (
    <motion.button
      aria-label={playing ? "Pause music" : "Play music"}
      onClick={toggle}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="fixed top-5 right-5 z-50 grid place-items-center w-11 h-11 rounded-full glass text-white/90 hover:text-white transition-colors"
    >
      {playing ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
      )}
      <span className="sr-only">music</span>
    </motion.button>
  );
}
