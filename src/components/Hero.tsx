"use client";

import { motion } from "framer-motion";
import type { Translations } from "@/lib/translations";

export default function Hero({ t }: { t: Translations }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-mono font-bold leading-tight mb-6"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors text-lg"
          >
            {t.hero.cta}
          </a>
          <a
            href="#funkcje"
            className="inline-flex items-center justify-center px-8 py-4 border border-surface-light text-foreground font-semibold rounded-lg hover:bg-surface transition-colors text-lg"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
