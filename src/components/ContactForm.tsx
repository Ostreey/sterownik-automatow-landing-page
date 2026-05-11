"use client";

import { useState } from "react";
import type { Translations } from "@/lib/translations";

export default function ContactForm({ t }: { t: Translations }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="py-20 bg-surface">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted text-lg">{t.contact.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t.contact.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t.contact.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              {t.contact.phone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 bg-background border border-surface-light rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full px-8 py-4 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50"
          >
            {status === "sending" ? "..." : t.contact.send}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-center">{t.contact.success}</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">{t.contact.error}</p>
          )}
        </form>

        <div className="mt-10 text-center space-y-3">
          <p className="text-muted">{t.contact.orCall}</p>
          <a
            href="tel:+48605048487"
            className="block text-accent text-xl font-mono font-bold hover:text-accent-hover transition-colors"
          >
            +48 605 048 487
          </a>
          <a
            href="mailto:davosmartsolutions@gmail.com"
            className="block text-muted hover:text-foreground transition-colors"
          >
            davosmartsolutions@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
