"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 60 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 0.6,
        duration: 2.4 + Math.random() * 2,
        rotate: Math.random() * 360,
        color: ["#ffd29b", "#ff7a96", "#ffa1b6", "#a373b8", "#fff"][i % 5],
        size: 6 + Math.random() * 6,
      })),
    []
  );
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -40, x: `${p.x}vw`, opacity: 0, rotate: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: p.rotate }}
          transition={{ delay: p.delay, duration: p.duration, ease: "easeOut" }}
          className="absolute top-0 rounded-sm"
          style={{ width: p.size, height: p.size * 0.4, background: p.color }}
        />
      ))}
    </div>
  );
}

export default function Ending() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative min-h-[100svh] w-full bg-finale overflow-hidden py-24 px-6 flex items-center justify-center">
      <AnimatePresence>{revealed && <Confetti key="confetti" />}</AnimatePresence>

      <div className="relative z-10 max-w-2xl w-full mx-auto text-center">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="ask"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
            >
              <p className="font-display text-balance text-3xl md:text-5xl font-light leading-tight mb-12">
                Ready to create a lifetime of memories together?
              </p>
              <motion.button
                onClick={() => setRevealed(true)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-plum-500 text-white text-lg font-medium shadow-[0_20px_50px_-12px_rgba(255,138,170,0.6)] hover:shadow-[0_25px_60px_-12px_rgba(255,138,170,0.85)] transition-shadow"
              >
                <motion.span
                  aria-hidden
                  className="absolute inset-0 rounded-full bg-white/20"
                  animate={{ opacity: [0, 0.35, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="relative">Yes</span>
                <span className="relative" aria-hidden>{"\u2764\ufe0f"}</span>
              </motion.button>
              <p className="mt-6 text-white/55 text-sm">tap to answer</p>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="font-script text-rose-200/90 text-2xl md:text-3xl"
              >
                forever, then.
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                transition={{ duration: 1.4, delay: 0.6 }}
                className="font-display text-balance text-4xl md:text-6xl font-light leading-[1.05]"
              >
                Happy 3 months,{" "}
                <span className="text-gradient-rose font-script font-medium">
                  Drashuuu
                </span>{" "}
                <span aria-hidden>{"\u2764\ufe0f"}</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="text-white/70 max-w-md mx-auto"
              >
                Same time tomorrow? I{"\u2019"}ll be there. <br />
                — your jaan.
              </motion.p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.2 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xs uppercase tracking-[0.4em] text-white/55 hover:text-white transition-colors"
              >
                read it again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
