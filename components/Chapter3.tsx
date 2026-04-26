"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";

function CallTile({
  src,
  fallback,
  tileGradient,
  location,
}: {
  src: string;
  fallback: string;
  tileGradient: string;
  location: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const showImage = loaded && !errored;
  const isHer = fallback === "Drashti";

  return (
    <div
      className={`relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br ${tileGradient}`}
    >
      {/* fallback layer — always present underneath */}
      <div
        className={`absolute inset-0 grid place-items-center ${
          isHer
            ? "text-white/70 font-display text-3xl"
            : "text-white/40 text-sm uppercase tracking-[0.3em]"
        }`}
      >
        {fallback}
      </div>

      {/* image — only painted when successfully loaded */}
      {!errored && (
        <img
          src={src}
          alt={fallback}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          style={{ opacity: showImage ? 1 : 0 }}
        />
      )}

      {/* soft bottom vignette so photos blend with the dark theme */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div className="absolute bottom-3 left-3 z-10 px-2 py-1 rounded-md bg-black/40 backdrop-blur-sm text-[10px] uppercase tracking-widest">
        {location}
      </div>
    </div>
  );
}

function Globe({ city, sub }: { city: string; sub: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-36 h-36 md:w-44 md:h-44 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), rgba(255,255,255,0) 60%), radial-gradient(circle at 50% 50%, rgba(124,79,150,0.5), rgba(26,10,46,0.95))",
          boxShadow:
            "0 0 60px rgba(255,138,170,0.25), inset -20px -25px 40px rgba(0,0,0,0.55)",
        }}
      >
        {/* meridian rings */}
        <div className="absolute inset-0 rounded-full border border-white/10" />
        <div className="absolute inset-3 rounded-full border border-white/5" />
        {/* pin */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="relative block w-3 h-3 rounded-full bg-rose-400 shadow-[0_0_20px_rgba(255,138,170,0.9)]">
            <span className="absolute inset-0 rounded-full bg-rose-300 animate-ping opacity-75" />
          </span>
        </div>
      </motion.div>
      <div className="text-center">
        <div className="font-display text-2xl md:text-3xl">{city}</div>
        <div className="text-xs uppercase tracking-[0.3em] text-white/45 mt-1">{sub}</div>
      </div>
    </div>
  );
}

export default function Chapter3() {
  return (
    <section className="relative min-h-[100svh] w-full bg-night overflow-hidden py-32 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <ChapterLabel index="Ch. 03" title="Distance, But Closer" />

        <Reveal>
          <h2 className="font-display text-balance text-3xl md:text-5xl font-light leading-[1.15] mb-6">
            We hadn{"\u2019"}t even seen each other yet.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-pretty text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-16">
            Two weeks in Surat. I couldn{"\u2019"}t even show you my home.
            No video calls, no faces — just words on a screen.
            And somehow, you still felt closer than people in the same room.
          </p>
        </Reveal>

        {/* split globes with arc */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-6 md:gap-12 items-center justify-items-center">
            <Globe city="Surat" sub="India" />
            <Globe city="Toronto" sub="Canada" />
          </div>

          {/* arc connector */}
          <svg
            viewBox="0 0 600 200"
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 mx-auto pointer-events-none w-[88%]"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="arc-grad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#ffae6e" />
                <stop offset="50%" stopColor="#ff7a96" />
                <stop offset="100%" stopColor="#a373b8" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 60 120 Q 300 -40 540 120"
              stroke="url(#arc-grad)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 8"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.85 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>
        </div>

        {/* transition */}
        <Reveal delay={0.3}>
          <p className="mt-24 text-center font-display italic text-2xl md:text-3xl text-white/80">
            And then{"\u2026"}
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="mt-3 text-center font-display text-3xl md:text-5xl leading-[1.15]">
            our first <span className="text-gradient-rose">video call.</span>
          </p>
        </Reveal>

        {/* video call frame */}
        <Reveal delay={0.9}>
          <div className="mt-14 mx-auto max-w-2xl">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-r from-amber-glow/30 via-rose-400/30 to-plum-400/30 blur-2xl animate-pulseGlow" />
              <div className="relative grid grid-cols-2 gap-3 p-3 rounded-[24px] glass">
                <CallTile src="/images/you.jpg" fallback="you" tileGradient="from-plum-700 to-ink" location="Toronto" />
                <CallTile src="/images/drashti.jpg" fallback="Drashti" tileGradient="from-rose-600 to-plum-600" location="Vibhapar" />
              </div>
            </div>
            <p className="mt-8 text-center text-white/70 text-pretty">
              The first time I saw you laugh. <br className="hidden md:block" />
              The first time my chest did that quiet little thing it does now,
              every time your name lights up my screen.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
