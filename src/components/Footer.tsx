import Link from "next/link";
import type { Translations } from "@/lib/translations";
import type { Locale } from "@/lib/translations";

export default function Footer({
  t,
  locale,
}: {
  t: Translations;
  locale: Locale;
}) {
  const prefix = locale === "en" ? "/en" : "";

  return (
    <footer className="bg-background border-t border-surface-light py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-mono text-lg font-bold text-accent mb-4">
              Sterowniki
            </div>
            <p className="text-muted text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.links}</h4>
            <ul className="space-y-2">
              <li>
                <a href={`${prefix}/#funkcje`} className="text-sm text-muted hover:text-foreground transition-colors">
                  {t.nav.features}
                </a>
              </li>
              <li>
                <a href={`${prefix}/#produkty`} className="text-sm text-muted hover:text-foreground transition-colors">
                  {t.nav.products}
                </a>
              </li>
              <li>
                <a href={`${prefix}/#cennik`} className="text-sm text-muted hover:text-foreground transition-colors">
                  {t.nav.pricing}
                </a>
              </li>
              <li>
                <Link href={`${prefix}/blog`} className="text-sm text-muted hover:text-foreground transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t.footer.contactTitle}</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <a href="tel:+48605048487" className="hover:text-foreground transition-colors">
                  +48 605 048 487
                </a>
              </li>
              <li>
                <a href="mailto:davosmartsolutions@gmail.com" className="hover:text-foreground transition-colors">
                  davosmartsolutions@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-surface-light text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Sterowniki do odkurzaczy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
