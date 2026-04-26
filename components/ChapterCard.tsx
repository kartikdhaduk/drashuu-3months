"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";

function Card() {
  // a stack of pages, top one is the cover
  const pages = [
    { rot: -10, x: -28, y: 22 },
    { rot: -4, x: -12, y: 12 },
    { rot: 5, x: 14, y: 6 },
    { rot: 0, x: 0, y: 0 },
  ];

  return (
    <div className="relative mx-auto w-[280px] md:w-[360px] aspect-[3/4]">
      {pages.map((p, i) => {
        const isCover = i === pages.length - 1;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80, rotate: 0, x: 0 }}
            whileInView={{ opacity: 1, y: p.y, rotate: p.rot, x: p.x }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              delay: 0.2 + i * 0.2,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 rounded-md border border-black/5"
            style={{
              background: isCover
                ? "linear-gradient(155deg, #fbf3e3 0%, #f5e8c8 100%)"
                : "linear-gradient(155deg, #f8edd2 0%, #ecdab2 100%)",
              boxShadow:
                "0 18px 40px -12px rgba(0,0,0,0.55), 0 4px 8px -2px rgba(0,0,0,0.25)",
            }}
          >
            {isCover ? (
              <div className="absolute inset-0 p-7 md:p-8 flex flex-col items-center justify-between text-[#3a2310]">
                <div className="self-end font-script text-xl text-[#c14a5a]" aria-hidden>
                  {"\u2665"}
                </div>
                <div className="text-center">
                  <div className="font-script text-3xl md:text-4xl leading-[1.05]">
                    for you,
                    <br />
                    my jaan
                  </div>
                  <div className="mt-3 font-script text-[#7a4a2a] text-base md:text-lg">
                    — with all my heart
                  </div>
                </div>
                {/* a tiny "AI photo of us" placeholder */}
                <div className="self-start flex items-end gap-2">
                  <div
                    className="w-12 h-14 rounded-sm border border-[#7a4a2a]/30"
                    style={{
                      background:
                        "linear-gradient(135deg, #f1c5b0 0%, #c69ad0 60%, #7a577d 100%)",
                      boxShadow: "inset 0 0 0 2px #faf3e3",
                    }}
                    aria-hidden
                  />
                  <div className="font-script text-xs text-[#7a4a2a] opacity-80 mb-1">
                    us {"\u2728"}
                  </div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 p-6 flex flex-col gap-2 overflow-hidden">
                {[0.78, 1, 0.86, 0.66, 0.92, 0.5, 0.8].map((w, idx) => (
                  <div
                    key={idx}
                    className="h-[2px] rounded-full"
                    style={{
                      width: `${w * 100}%`,
                      background:
                        "linear-gradient(90deg, rgba(122,74,42,0.45), rgba(122,74,42,0.15))",
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

const buildLines = [
  "Days. Nights. A pen. A blank page.",
  "Words written by hand. Pages that took hours.",
  "Pictures of us, dreamed up by AI \u2014 printed, placed, labelled by you.",
  "A whole little book of us.",
];

const revealLines = [
  "You couldn\u2019t send it across an ocean.",
  "So you opened it on a video call \u2014 and turned the pages, one by one.",
];

export default function ChapterCard() {
  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden py-32 px-6"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(255,210,155,0.2), transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(193,74,90,0.18), transparent 65%), linear-gradient(180deg, #1a0d18 0%, #240f1d 100%)",
      }}
    >
      {/* warm ambient glow */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-40 blur-3xl pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,210,155,0.55) 0%, rgba(255,138,110,0.18) 45%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <ChapterLabel index="Ch. 04" title="A Card, By Hand" />

        <Reveal>
          <h2 className="font-display text-balance text-3xl md:text-5xl font-light leading-[1.15] mb-14 text-center">
            You made me a card.
          </h2>
        </Reveal>

        <div className="my-12 md:my-16 flex justify-center">
          <Card />
        </div>

        <div className="mt-16 space-y-7 max-w-xl mx-auto text-center">
          {buildLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{
                delay: i * 0.45,
                duration: 1.0,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-pretty text-lg md:text-xl text-white/75 leading-relaxed"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="mt-20 space-y-6 max-w-xl mx-auto text-center">
          {revealLines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{
                delay: i * 0.6,
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-display italic text-xl md:text-2xl text-white/85 text-balance"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="mt-24 space-y-6 text-center">
          <Reveal delay={0.2}>
            <p className="font-display text-2xl md:text-4xl font-light text-balance">
              No one had ever done anything like this for me.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <p className="font-display italic text-xl md:text-2xl text-white/70">
              Not once.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 1.6 }}
            className="font-display text-2xl md:text-4xl text-balance"
          >
            That{"\u2019"}s when something{" "}
            <span className="text-gradient-warm">changed</span> in me.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
