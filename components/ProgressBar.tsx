"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.5 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-50"
    >
      <div className="h-full w-full bg-gradient-to-r from-amber-glow via-rose-400 to-plum-400" />
    </motion.div>
  );
}
