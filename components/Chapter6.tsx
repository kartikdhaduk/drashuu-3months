"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";

function Diya() {
  return (
    <div className="relative w-20 h-24 mx-auto">
      {/* glow halo */}
      <motion.div
        className="absolute -inset-10 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,210,155,0.7) 0%, rgba(255,138,110,0.2) 40%, transparent 70%)",
        }}
        animate={{ opacity: [0.55, 0.95, 0.55], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* flame */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-2 w-5 h-9 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, #fff5b0 0%, #ffd29b 35%, #ff7a44 75%, transparent 100%)",
        }}
        animate={{ scaleY: [1, 1.08, 0.95, 1.05, 1], scaleX: [1, 0.95, 1.05, 0.97, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* lamp body */}
      <svg viewBox="0 0 80 50" className="absolute bottom-0 left-0 w-full">
        <defs>
          <linearGradient id="lamp" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#caa050" />
            <stop offset="1" stopColor="#5e3a18" />
          </linearGradient>
        </defs>
        <path d="M5 12 Q40 -2 75 12 Q70 38 40 46 Q10 38 5 12 Z" fill="url(#lamp)" />
        <ellipse cx="40" cy="14" rx="34" ry="6" fill="#3d2110" />
      </svg>
    </div>
  );
}

export default function Chapter6() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden py-32 px-6"
      style={{
        background:
          "radial-gradient(ellipse at 50% 30%, rgba(255,210,155,0.18), transparent 60%), linear-gradient(180deg, #14081a 0%, #1f0c22 100%)",
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <ChapterLabel index="Ch. 07" title="You" />

        <Reveal>
          <h2 className="font-display text-balance text-3xl md:text-5xl font-light leading-[1.15] mb-12 text-center">
            There{"\u2019"}s a quiet to you, Drashti.
          </h2>
        </Reveal>

        <div className="my-10 md:my-14">
          <Diya />
        </div>

        <Reveal delay={0.15}>
          <p className="text-pretty text-lg md:text-xl text-white/75 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            The kind of quiet a person earns. Faith you don{"\u2019"}t advertise.
            A calm I notice even through a screen.
          </p>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="text-pretty text-lg md:text-xl text-white/70 leading-relaxed text-center max-w-2xl mx-auto mb-8">
            I love that you chant. I love that there{"\u2019"}s something in your day
            that{"\u2019"}s just yours — older than us, bigger than us.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <p className="text-pretty text-lg md:text-xl text-white/70 leading-relaxed text-center max-w-2xl mx-auto mb-12">
            Whatever calm you find in those moments — I feel a little of it
            in your voice afterwards. I never tell you. But I do.
          </p>
        </Reveal>

        <Reveal delay={0.75}>
          <p className="font-script text-rose-200/85 text-3xl md:text-4xl text-center">
            you, exactly the way you are.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
