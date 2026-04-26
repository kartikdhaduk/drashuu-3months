"use client";
import { motion } from "framer-motion";

export default function ChapterLabel({ index, title }: { index: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8 }}
      className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-white/55"
    >
      <span className="text-amber-glow font-medium">{index}</span>
      <span className="h-px w-8 bg-white/20" />
      <span>{title}</span>
    </motion.div>
  );
}
