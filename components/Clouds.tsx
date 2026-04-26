"use client";
import { motion } from "framer-motion";

export default function Clouds() {
  const cloud = (
    <svg viewBox="0 0 200 80" className="w-full h-full">
      <defs>
        <radialGradient id="cloud-grad" cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="50" rx="90" ry="22" fill="url(#cloud-grad)" />
    </svg>
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute"
        style={{ top: "18%", width: 420, height: 140, opacity: 0.35 }}
        initial={{ x: "-30%" }}
        animate={{ x: "120%" }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        {cloud}
      </motion.div>
      <motion.div
        className="absolute"
        style={{ top: "50%", width: 320, height: 100, opacity: 0.25 }}
        initial={{ x: "120%" }}
        animate={{ x: "-30%" }}
        transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
      >
        {cloud}
      </motion.div>
      <motion.div
        className="absolute"
        style={{ top: "72%", width: 500, height: 160, opacity: 0.2 }}
        initial={{ x: "-30%" }}
        animate={{ x: "120%" }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear", delay: 8 }}
      >
        {cloud}
      </motion.div>
    </div>
  );
}
