"use client";
import { motion, useReducedMotion } from "framer-motion";
import Stars from "./Stars";
import Clouds from "./Clouds";
import Airplane from "./Airplane";

export default function Opening() {
  const reduce = useReducedMotion();

  const lines = [
    "Some stories don\u2019t begin with a plan.",
    "Ours began somewhere above the clouds.",
  ];

  return (
    <section className="relative min-h-[100svh] w-full bg-night vignette overflow-hidden flex items-center justify-center px-6">
      <Stars count={120} />
      <Clouds />
      <Airplane />

      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="font-script text-rose-200/80 text-2xl md:text-3xl mb-6"
        >
          For my Drashuuu {"\u2665\ufe0f"}
        </motion.p>

        {lines.map((line, i) => (
          <motion.h1
            key={i}
            initial={{ opacity: 0, y: reduce ? 0 : 22, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.2 + i * 1.6, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-balance text-3xl md:text-5xl lg:text-6xl font-light leading-[1.15] mb-4"
          >
            {line}
          </motion.h1>
        ))}

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.6, duration: 1.4 }}
          className="mt-10 font-display text-xl md:text-2xl text-white/70 italic"
        >
          An Instagram request{"\u2026"} from someone named{" "}
          <span className="text-gradient-rose not-italic font-medium">Drashti.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 6.2, duration: 1.4 }}
          className="mt-16 flex flex-col items-center gap-3 text-white/55"
        >
          <span className="text-[11px] uppercase tracking-[0.5em]">scroll to begin</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="block w-[1px] h-10 bg-gradient-to-b from-white/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
