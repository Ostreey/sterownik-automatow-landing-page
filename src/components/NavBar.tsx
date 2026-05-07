"use client";

import { useState } from "react";
import Link from "next/link";
import type { Translations } from "@/lib/translations";
import type { Locale } from "@/lib/translations";

export default function NavBar({
  t,
  locale,
}: {
  t: Translations;
  locale: Locale;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefix = locale === "en" ? "/en" : "";

  const links = [
    { href: `${prefix}/#funkcje`, label: t.nav.features },
    { href: `${prefix}/#produkty`, label: t.nav.products },
    { href: `${prefix}/#cennik`, label: t.nav.pricing },
    { href: `${prefix}/#faq`, label: t.nav.faq },
    { href: `${prefix}/blog`, label: t.nav.blog },
    { href: `${prefix}/#kontakt`, label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface-light">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href={prefix || "/"} className="font-mono text-lg font-bold text-accent">
          Sterowniki
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href={locale === "en" ? "/" : "/en"}
            className="text-sm text-muted hover:text-accent transition-colors ml-2"
          >
            {locale === "en" ? "PL" : "EN"}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-b border-surface-light">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href={locale === "en" ? "/" : "/en"}
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              {locale === "en" ? "PL" : "EN"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
