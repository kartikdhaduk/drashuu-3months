"use client";
import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";

export default function FinalChapter() {
  return (
    <section className="relative min-h-[100svh] w-full bg-finale overflow-hidden py-32 px-6">
      <FloatingHearts count={18} />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ChapterLabel index="Ch. 08" title="This Is Just The Start" />

        <Reveal>
          <h2 className="font-display text-balance text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-10">
            These three months{"\u2026"}
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-display text-balance text-2xl md:text-4xl text-white/85 leading-tight max-w-2xl mx-auto mb-16">
            somehow became something I never expected.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4 }}
            className="font-display text-balance text-3xl md:text-5xl text-gradient-rose leading-tight mb-16"
          >
            and I{"\u2019"}m just getting started with you.
          </motion.p>
        </Reveal>

        <Reveal delay={0.9}>
          <p className="text-pretty text-lg text-white/75 leading-relaxed max-w-xl mx-auto">
            Soon I won{"\u2019"}t need a screen to see you.
            Soon it{"\u2019"}ll be your hand, not pixels.
            <br />
            <span className="text-rose-200">
              I{"\u2019"}m so looking forward to meeting you, jaan.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
