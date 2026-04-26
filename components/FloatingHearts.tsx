"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function FloatingHearts({ count = 14, seed = 19 }: { count?: number; seed?: number }) {
  const hearts = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: rand() * 100,
      size: 12 + rand() * 18,
      delay: rand() * 6,
      duration: 10 + rand() * 8,
      opacity: 0.25 + rand() * 0.35,
      repeatDelay: rand() * 3,
    }));
  }, [count, seed]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((h) => (
        <motion.svg
          key={h.id}
          viewBox="0 0 24 24"
          width={h.size}
          height={h.size}
          className="absolute"
          style={{ left: `${h.left}%`, bottom: -30, opacity: h.opacity }}
          initial={{ y: 0, rotate: -10 }}
          animate={{ y: -800, rotate: 10 }}
          transition={{
            delay: h.delay,
            duration: h.duration,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: h.repeatDelay,
          }}
        >
          <path
            d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z"
            fill="url(#heart-grad)"
          />
          <defs>
            <linearGradient id="heart-grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#ffd0dc" />
              <stop offset="1" stopColor="#ff7a96" />
            </linearGradient>
          </defs>
        </motion.svg>
      ))}
    </div>
  );
}
