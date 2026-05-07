# CLAUDE.md

This file provides guidance to Claude Code when working on the website.

## Project Overview

Landing page + blog for vacuum controller products. Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, deployed on **Vercel**.

Full product description: `../docs/internal/Onboarding_Sterowniki.md`

## Commands

```bash
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm start            # Start production server
```

## Architecture

### Routing & i18n
- App Router with file-based routing in `src/app/`
- Polish is the default locale at `/`, English at `/en`
- Custom i18n (no library): translations live in `src/lib/translations.ts`
- Blog: `/blog` (PL), `/en/blog` (EN)

### Key Files
- `src/lib/translations.ts` — all UI strings (PL + EN)
- `src/lib/blog.ts` — MDX blog post fetching
- `src/app/api/contact/route.ts` — contact form API (Resend)
- `src/content/blog/pl/` — Polish blog posts (.mdx)
- `src/content/blog/en/` — English blog posts (.mdx)

### Components
- `src/components/NavBar.tsx` — fixed navigation with mobile menu
- `src/components/Hero.tsx` — hero section with CTA
- `src/components/FeatureSection.tsx` — 6 feature cards with icons
- `src/components/ProductSection.tsx` — 3 product cards with images
- `src/components/PricingSection.tsx` — pricing cards
- `src/components/FAQ.tsx` — accordion FAQ
- `src/components/ContactForm.tsx` — contact form + phone/WhatsApp
- `src/components/Footer.tsx` — footer with links
- `src/components/blog/BlogCard.tsx` — blog post card
- `src/components/blog/MdxContent.tsx` — MDX renderer

### Styling
- Tailwind CSS v4 with `@theme inline` custom properties
- Dark theme: background #0a0a0a, accent amber (#f59e0b), surface grays
- Fonts: Inter (body), Chakra Petch (headings/mono)

### Environment Variables
- `RESEND_API_KEY` — Resend API key for contact form emails
- `CONTACT_EMAIL` — recipient email for contact form
- `NEXT_PUBLIC_BASE_URL` — site URL for sitemap generation

### Blog System
- MDX files with YAML frontmatter (title, description, date, keywords, category, slug)
- Located in `src/content/blog/pl/` and `src/content/blog/en/`
- Parsed by `src/lib/blog.ts` using gray-matter
- Rendered by `next-mdx-remote/rsc`
- Sitemap auto-generated from blog posts
