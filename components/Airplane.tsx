"use client";
import { motion } from "framer-motion";

export default function Airplane() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute"
        style={{ top: "32%" }}
        initial={{ x: "-20vw" }}
        animate={{ x: "120vw" }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <div className="relative">
          {/* trailing line */}
          <div
            className="absolute right-full top-1/2 -translate-y-1/2 h-px w-[60vw]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.45) 95%, rgba(255,255,255,0.9) 100%)",
            }}
          />
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
            <path
              d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1L15 22v-1.5L13 19v-5.5z"
              fill="#fff"
              opacity="0.95"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
