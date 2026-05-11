"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Translations } from "@/lib/translations";

export default function Hero({ t }: { t: Translations }) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-mono font-bold leading-tight mb-6"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted mb-8"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-8 text-sm"
            >
              <span className="flex items-center gap-1.5 text-accent font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t.hero.trust1}
              </span>
              <span className="flex items-center gap-1.5 text-accent font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t.hero.trust2}
              </span>
              <span className="flex items-center gap-1.5 text-accent font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t.hero.trust3}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#cennik"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors text-lg"
              >
                {t.hero.cta}
              </a>
              <a
                href="tel:+48605048487"
                className="inline-flex items-center justify-center px-8 py-4 border border-surface-light text-foreground font-semibold rounded-lg hover:bg-surface transition-colors text-lg"
              >
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-surface-light shadow-2xl">
              <Image
                src="/images/sterownik-z-ethernet.jpg"
                alt="Sterownik do odkurzacza myjni bezdotykowej"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
