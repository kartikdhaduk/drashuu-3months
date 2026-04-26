"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";

const nicknames = ["Drashuuu", "Gattu", "Bubu", "Betu", "Bcha", "Jaan"];

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function FloatingChocolates() {
  const items = useMemo(() => {
    const rand = mulberry32(31);
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: rand() * 100,
      delay: rand() * 6,
      duration: 14 + rand() * 10,
      size: 18 + rand() * 16,
      kind: rand() > 0.5 ? "bar" : "square",
    }));
  }, []);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((c) => (
        <motion.div
          key={c.id}
          initial={{ y: "110%", rotate: -10 }}
          animate={{ y: "-20%", rotate: 20 }}
          transition={{
            delay: c.delay,
            duration: c.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{ left: `${c.left}%` }}
        >
          {c.kind === "bar" ? (
            <div
              className="rounded-md bg-gradient-to-br from-[#7a4a2a] to-[#3a1f10] shadow-lg"
              style={{ width: c.size * 1.6, height: c.size * 0.7 }}
            />
          ) : (
            <div
              className="rounded-sm bg-gradient-to-br from-[#5b2f15] to-[#2a1209] shadow-lg"
              style={{ width: c.size, height: c.size }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function NicknameCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % nicknames.length), 1800);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="h-24 md:h-32 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={nicknames[i]}
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          exit={{ opacity: 0, y: -24, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-script text-gradient-rose text-6xl md:text-8xl"
        >
          {nicknames[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function Chapter5() {
  return (
    <section className="relative min-h-[100svh] w-full bg-soft overflow-hidden py-32 px-6">
      <FloatingChocolates />

      <div className="relative z-10 max-w-4xl mx-auto">
        <ChapterLabel index="Ch. 06" title="The Little Things" />

        <Reveal>
          <h2 className="font-display text-balance text-3xl md:text-5xl font-light leading-[1.15] mb-6">
            I now know your priorities{"\u2026"}
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-pretty text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mb-16">
            Chocolates first. Then me. (I{"\u2019"}ve made my peace with it.)
          </p>
        </Reveal>

        {/* chocolate cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">
          <Reveal delay={0.2}>
            <div className="glass rounded-3xl p-7 hover:translate-y-[-4px] transition-transform duration-500 group">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, #6e1d3f 0%, #3a0f24 100%)",
                  }}
                />
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-rose-200/80">Cadbury</div>
                  <div className="font-display text-2xl">Dairy Milk Silk</div>
                  <div className="text-white/60 text-sm">Roasted Almond</div>
                </div>
              </div>
              <p className="text-white/65 text-sm leading-relaxed">
                The one you reach for when nothing else is enough.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="glass rounded-3xl p-7 hover:translate-y-[-4px] transition-transform duration-500 group">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-14 h-14 rounded-2xl shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, #2a1810 0%, #5a3522 100%)",
                  }}
                />
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-amber-glow/80">Lindt</div>
                  <div className="font-display text-2xl">Double Chocolate</div>
                  <div className="text-white/60 text-sm">smooth, deep, like you</div>
                </div>
              </div>
              <p className="text-white/65 text-sm leading-relaxed">
                The fancy one you{"\u2019"}d never admit you{"\u2019"}ve been craving all week.
              </p>
            </div>
          </Reveal>
        </div>

        {/* nickname carousel */}
        <Reveal delay={0.2}>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.4em] text-white/45 mb-6">
              and the names I call you
            </div>
            <NicknameCarousel />
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {nicknames.map((n) => (
                <span
                  key={n}
                  className="px-3 py-1.5 rounded-full text-xs uppercase tracking-widest border border-white/10 text-white/55"
                >
                  {n}
                </span>
              ))}
            </div>
            <p className="mt-10 max-w-xl mx-auto text-white/65">
              Six different names. All meaning the same thing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
