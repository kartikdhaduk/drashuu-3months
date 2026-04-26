"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";

function Watch() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.92, rotate: -6 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto"
    >
      <div className="absolute -inset-12 rounded-full bg-amber-glow/20 blur-3xl animate-pulseGlow" />
      <svg viewBox="0 0 240 320" className="relative w-44 md:w-56 drop-shadow-[0_25px_60px_rgba(255,174,110,0.35)]">
        <defs>
          <linearGradient id="strap" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#5a2333" />
            <stop offset="0.5" stopColor="#3d1422" />
            <stop offset="1" stopColor="#5a2333" />
          </linearGradient>
          <radialGradient id="dial" cx="50%" cy="40%" r="60%">
            <stop offset="0" stopColor="#fff5e0" />
            <stop offset="0.55" stopColor="#f6e1c0" />
            <stop offset="1" stopColor="#c9a36b" />
          </radialGradient>
          <linearGradient id="case" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#f5d28b" />
            <stop offset="0.5" stopColor="#caa050" />
            <stop offset="1" stopColor="#7c5a25" />
          </linearGradient>
        </defs>
        {/* upper strap */}
        <path d="M85 0 L155 0 L150 110 L90 110 Z" fill="url(#strap)" />
        {/* lower strap */}
        <path d="M90 210 L150 210 L155 320 L85 320 Z" fill="url(#strap)" />
        {/* case */}
        <circle cx="120" cy="160" r="68" fill="url(#case)" />
        <circle cx="120" cy="160" r="58" fill="url(#dial)" />
        {/* tiny diamonds round the dial */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const x = +(120 + Math.cos(a) * 62).toFixed(2);
          const y = +(160 + Math.sin(a) * 62).toFixed(2);
          return <circle key={i} cx={x} cy={y} r="1.6" fill="#fff" opacity="0.85" />;
        })}
        {/* hour marks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const x1 = +(120 + Math.cos(a) * 50).toFixed(2);
          const y1 = +(160 + Math.sin(a) * 50).toFixed(2);
          const x2 = +(120 + Math.cos(a) * 45).toFixed(2);
          const y2 = +(160 + Math.sin(a) * 45).toFixed(2);
          return (
            <line key={`m${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7a5a2a" strokeWidth="1" />
          );
        })}
        {/* hands */}
        <motion.line
          x1="120"
          y1="160"
          x2="120"
          y2="125"
          stroke="#3d2110"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ rotate: -30 }}
          animate={{ rotate: 330 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ originX: "120px", originY: "160px" }}
        />
        <motion.line
          x1="120"
          y1="160"
          x2="120"
          y2="115"
          stroke="#3d2110"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ originX: "120px", originY: "160px" }}
        />
        <circle cx="120" cy="160" r="3" fill="#3d2110" />
        {/* "Titan Raga" subtle text */}
        <text
          x="120"
          y="148"
          textAnchor="middle"
          fontSize="6"
          fill="#7a5a2a"
          fontFamily="serif"
          letterSpacing="2"
        >
          TITAN RAGA
        </text>
      </svg>
    </motion.div>
  );
}

const peakLines = [
  "It wasn\u2019t the gift.",
  "It was you.",
  "Your effort.",
  "Your heart.",
  "The way you cared about my family\u2026",
];

export default function Chapter4() {
  return (
    <section className="relative min-h-[100svh] w-full bg-warm overflow-hidden py-32 px-6">
      {/* sun glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,210,155,0.7) 0%, rgba(255,138,110,0.25) 40%, transparent 70%)",
        }}
      />
      {/* heat shimmer */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(255,210,155,0.05) 50%, transparent 100%)",
        }}
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <ChapterLabel index="Ch. 05" title="The Kind of Person You Are" />

        <Reveal>
          <h2 className="font-display text-balance text-3xl md:text-5xl font-light leading-[1.15] mb-12">
            My sister had a birthday.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-pretty text-lg md:text-xl text-white/75 leading-relaxed mb-6">
            You didn{"\u2019"}t have to do anything. Nobody asked you to.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-pretty text-lg md:text-xl text-white/75 leading-relaxed mb-6">
            But you decided, all on your own, that she should feel special.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <p className="text-pretty text-lg md:text-xl text-white/75 leading-relaxed mb-6">
            So you stepped out into the kind of Jamnagar afternoon
            people stay inside for.
          </p>
        </Reveal>

        <Reveal delay={0.8}>
          <p className="text-pretty text-lg md:text-xl text-white/75 leading-relaxed mb-16">
            Found a Titan Raga. Wrapped it. Couriered it to Surat.
            <br />
            <span className="text-white/55">Didn{"\u2019"}t make a thing of it.</span>
          </p>
        </Reveal>

        {/* watch reveal */}
        <div className="my-12 flex flex-col items-center">
          <Watch />
          <p className="mt-8 font-script text-rose-200/85 text-2xl md:text-3xl">
            for someone you{"\u2019"}d never even met.
          </p>
        </div>

        {/* paced peak lines */}
        <div className="mt-20 space-y-7 text-center">
          {peakLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                delay: i * 0.6,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display text-2xl md:text-4xl font-light text-balance"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* finale line for chapter */}
        <div className="mt-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.6, delay: 0.2 }}
            className="font-display italic text-xl md:text-2xl text-white/85 text-balance"
          >
            That{"\u2019"}s when I knew{"\u2026"} this is special.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
