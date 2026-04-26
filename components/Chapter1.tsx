"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Stars from "./Stars";
import Clouds from "./Clouds";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";

function Avatar() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const showImage = loaded && !errored;
  return (
    <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-amber-glow via-rose-400 to-plum-500 p-[2px] shrink-0">
      <div className="relative w-full h-full rounded-full bg-ink overflow-hidden">
        <div className="absolute inset-0 grid place-items-center font-display text-base tracking-wide text-white/90">
          DP
        </div>
        {!errored && (
          <img
            src="/images/drashti-avatar.png"
            alt="Drashti"
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: showImage ? 1 : 0 }}
          />
        )}
      </div>
    </div>
  );
}

export default function Chapter1() {
  return (
    <section className="relative min-h-[100svh] w-full bg-night overflow-hidden py-32 px-6">
      <Stars count={70} />
      <Clouds />

      <div className="relative z-10 max-w-3xl mx-auto">
        <ChapterLabel index="Ch. 01" title="The Beginning" />

        <Reveal>
          <h2 className="font-display text-balance text-3xl md:text-5xl font-light leading-[1.15] mb-10">
            Window seat. Engines humming. <br />
            Phone in airplane mode{" "}
            <span className="text-white/50">— almost.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-pretty text-lg md:text-xl text-white/75 leading-relaxed mb-6">
            One bar of signal, somewhere over the world.
            A notification slid in like it had always belonged.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-pretty text-lg md:text-xl text-white/75 leading-relaxed mb-12">
            A request from a stranger. Curiosity, then a question, then a reply{"\u2026"}
            and somewhere between takeoff and landing, something quietly began.
          </p>
        </Reveal>

        {/* Instagram request card */}
        <Reveal delay={0.5}>
          <div className="relative mx-auto max-w-md">
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass rounded-2xl p-5 flex items-center gap-4 shadow-[0_20px_60px_-20px_rgba(255,138,170,0.35)]"
            >
              <Avatar />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-white/95 truncate">Rx.Drashti Pansara</div>
                <p className="text-[11px] uppercase tracking-widest text-white/45 truncate">
                  requested to follow you
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 rounded-full text-xs bg-white/10 text-white/70">Decline</span>
                <span className="px-3 py-1.5 rounded-full text-xs bg-gradient-to-r from-rose-400 to-plum-500 text-white">
                  Accept
                </span>
              </div>
            </motion.div>
            {/* underline glow */}
            <div className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-rose-300/60 to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={0.8}>
          <p className="mt-16 text-center font-display italic text-xl md:text-2xl text-white/70">
            One tap. And the rest of this story.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
