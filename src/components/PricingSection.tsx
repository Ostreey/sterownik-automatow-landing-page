"use client";

import { motion } from "framer-motion";
import type { Translations } from "@/lib/translations";

const pricingItems = [
  {
    name: { pl: "Sterownik do odkurzaczy (1-2 stanowiska)", en: "Vacuum Controller (1-2 stations)" },
    price: "—",
    features: {
      pl: ["2 wyjscia przekaznikowe 230V/6A", "3 wejscia platnosci", "Wyswietlacz TFT + WiFi", "OTA firmware updates", "Obudowa carbon fiber"],
      en: ["2 relay outputs 230V/6A", "3 payment inputs", "TFT display + WiFi", "OTA firmware updates", "Carbon fiber enclosure"],
    },
  },
  {
    name: { pl: "Wyswietlacz impulsow LED", en: "LED Pulse Display" },
    price: "—",
    features: {
      pl: ["Czerwone cyfry 7-segment 5x7 cm", "Modbus RTU", "Zasilanie 24V z sterownika", "Diody sygnalizacyjne"],
      en: ["Red 7-segment digits 5x7 cm", "Modbus RTU", "24V powered from controller", "Signal LEDs"],
    },
  },
  {
    name: { pl: "Wyswietlacz impulsow LCD", en: "LCD Pulse Display" },
    price: "—",
    features: {
      pl: ["Kolorowy ekran", "Impulsy + pogoda + zegar", "Modbus RTU", "Zasilanie 24V"],
      en: ["Color screen", "Pulses + weather + clock", "Modbus RTU", "24V power"],
    },
  },
];

export default function PricingSection({
  t,
  locale,
}: {
  t: Translations;
  locale: "pl" | "en";
}) {
  return (
    <section id="cennik" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-muted text-lg">{t.pricing.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="p-8 rounded-xl bg-background border border-surface-light hover:border-accent/30 transition-colors flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.name[locale]}
              </h3>
              <div className="text-3xl font-mono font-bold text-accent mb-6">
                {item.price}
              </div>
              <ul className="flex-1 space-y-3 mb-8">
                {item.features[locale].map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="block text-center px-6 py-3 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                {t.pricing.contact}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-muted text-sm mt-8">
          {t.pricing.customNote}
        </p>
      </div>
    </section>
  );
}
