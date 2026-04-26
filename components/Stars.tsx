"use client";
import { useMemo } from "react";

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Stars({ count = 80, seed = 7 }: { count?: number; seed?: number }) {
  const stars = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: rand() * 100,
      left: rand() * 100,
      size: rand() * 2 + 0.5,
      delay: rand() * 4,
      duration: 2.5 + rand() * 3,
      opacity: 0.4 + rand() * 0.6,
    }));
  }, [count, seed]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            boxShadow: `0 0 ${s.size * 3}px rgba(255,255,255,0.6)`,
          }}
        />
      ))}
    </div>
  );
}
