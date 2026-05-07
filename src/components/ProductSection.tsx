"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Translations } from "@/lib/translations";

const products = [
  {
    key: "controller" as const,
    image: "/images/sterownik-z-ethernet.jpg",
  },
  {
    key: "displayLed" as const,
    image: "/images/wyswietlacz-alfanumeryczny.jpg",
  },
  {
    key: "displayLcd" as const,
    image: "/images/wyswietlacz-lcd.png",
  },
];

export default function ProductSection({ t }: { t: Translations }) {
  return (
    <section id="produkty" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            {t.products.title}
          </h2>
          <p className="text-muted text-lg">{t.products.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, i) => {
            const data = t.products[product.key];
            return (
              <motion.div
                key={product.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="rounded-xl overflow-hidden bg-surface border border-surface-light hover:border-accent/30 transition-colors"
              >
                <div className="relative h-64 bg-surface-light">
                  <Image
                    src={product.image}
                    alt={data.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
