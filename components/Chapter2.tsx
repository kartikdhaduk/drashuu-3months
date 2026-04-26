"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import ChapterLabel from "./ChapterLabel";

const messages: { from: "her" | "me"; text: string }[] = [
  { from: "her", text: "Good morning Jaan \u2665\ufe0f\u26c5\ufe0f" },
  { from: "me", text: "Good morning bbu" },
  { from: "her", text: "Jamiu bcha?" },
  { from: "me", text: "Haa Parathaaaa" },
  { from: "her", text: "Vah vah" },
  { from: "her", text: "Tabyat thik chene bcha?" },
  { from: "me", text: "Haa bbu, ekdam mast che love" },
  { from: "her", text: "Love you so so so much bbu" },
  { from: "me", text: "Love you more bcha" },
];

function useCountUp(target: number, run: boolean, duration = 2200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let start: number | null = null;
    let raf = 0;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

export default function Chapter2() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: true });
  const days = useCountUp(90, inView);

  return (
    <section className="relative min-h-[100svh] w-full bg-soft overflow-hidden py-32 px-6">
      <div className="relative z-10 max-w-5xl mx-auto">
        <ChapterLabel index="Ch. 02" title="Every Single Day" />

        <Reveal>
          <h2 className="font-display text-balance text-3xl md:text-5xl font-light leading-[1.15] mb-6">
            We never skipped a day.
            <br />
            <span className="text-white/55">Not one.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-pretty text-lg md:text-xl text-white/70 leading-relaxed mb-16 max-w-2xl">
            Some days were quick. Some lasted till sunrise. But every single day,
            without trying — there you were, and here I was.
          </p>
        </Reveal>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          {/* chat */}
          <div className="space-y-3 max-w-md mx-auto md:mx-0 w-full">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  delay: i * 0.35,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-[15px] leading-snug shadow-md ${
                    m.from === "me"
                      ? "bg-gradient-to-br from-rose-400 to-plum-500 text-white rounded-br-sm"
                      : "bg-white/10 text-white/90 rounded-bl-sm border border-white/10"
                  }`}
                >
                  {m.text}
                </div>
              </motion.div>
            ))}
            {/* typing dots */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: messages.length * 0.35 + 0.2, duration: 0.6 }}
              className="flex justify-start"
            >
              <div className="bg-white/10 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex items-center gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-white/70"
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* day counter */}
          <Reveal delay={0.4}>
            <div className="text-center md:text-left">
              <div className="text-xs uppercase tracking-[0.4em] text-white/45 mb-3">
                days, in a row
              </div>
              <div className="font-display leading-none">
                <span className="text-gradient-rose text-7xl md:text-9xl font-light">
                  {String(days).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-4 flex md:justify-start justify-center gap-2 text-white/55 text-sm">
                {[1, 30, 60, 90].map((d, i) => (
                  <span key={d} className="flex items-center gap-2">
                    <span
                      className={
                        days >= d ? "text-amber-glow" : "text-white/40"
                      }
                    >
                      Day {d}
                    </span>
                    {i < 3 && <span className="text-white/30">{"\u2192"}</span>}
                  </span>
                ))}
              </div>
              <p className="mt-8 max-w-sm text-white/65 leading-relaxed">
                Three months of mornings and goodnights.
                Three months of <em className="text-rose-200">us</em>, becoming a habit
                neither of us wanted to break.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
