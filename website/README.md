# Logical Nutrition Website

A premium, editorial static site for Logical Nutrition — a science-first supplement brand built on purity, evidence, and transparency.

## Tech Stack

- **Framework**: [Astro](https://astro.build/) — static site generator
- **Styling**: Pure CSS with a custom design-system (tokens in `src/styles/global.css`)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) + [Newsreader](https://fonts.google.com/specimen/Newsreader) via Google Fonts
- **Language**: Spanish content, English source code & documentation

## Project Structure

```
website/
├── public/                     # Static assets
│   ├── favicon.svg
│   ├── og-default.svg          # Placeholder Open Graph image
│   └── robots.txt
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Badge.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro        # Frosted header with scroll behavior
│   │   ├── Logo.astro
│   │   ├── Menu.astro          # Fullscreen overlay navigation
│   │   ├── Newsletter.astro
│   │   ├── ProductMockup.astro # CSS/SVG product jar mockups
│   │   ├── SearchBar.astro
│   │   ├── SectionHeader.astro
│   │   ├── SupplementCard.astro
│   │   ├── TagFilter.astro
│   │   ├── TestimonialCard.astro
│   │   ├── WhatsAppButton.astro
│   │   └── WhatsAppLink.astro
│   ├── content/
│   │   ├── config.ts           # Content collection schema
│   │   └── supplements/        # Markdown files for each product
│   │       ├── creatina-monohidratada.md
│   │       └── l-citrulina.md
│   ├── layouts/
│   │   ├── Layout.astro        # Base page layout + SEO + JSON-LD
│   │   └── PageShell.astro     # Standard header/footer wrapper
│   ├── pages/
│   │   ├── index.astro         # Home / landing page
│   │   ├── suplementos.astro   # Product catalog
│   │   ├── suplementos/
│   │   │   └── [id].astro      # Individual product detail pages
│   │   ├── nosotros.astro
│   │   ├── faq.astro
│   │   ├── envios.astro
│   │   ├── contacto.astro
│   │   ├── guia.astro          # Guides index
│   │   ├── guia/
│   │   │   ├── creatina-completa.astro
│   │   │   ├── citrulina-vs-arginina.astro
│   │   │   └── leer-etiquetas.astro
│   │   ├── terminos.astro
│   │   ├── privacidad.astro
│   │   ├── sitemap.xml.astro
│   │   └── rss.xml.astro
│   └── styles/
│       └── global.css          # Design tokens, utilities, animations
├── astro.config.mjs
├── package.json
└── README.md
```

## Design System

The site uses a premium black-and-white palette with a warm metallic accent:

- Background: `#000000`
- Surface: `#0a0a0a`
- Accent: `#c8a866` (warm gold)
- Text primary: `#ffffff`
- Text secondary: `rgba(255, 255, 255, 0.72)`
- Fonts: Inter (UI) + Newsreader (editorial accents)

All tokens are defined as CSS custom properties in `src/styles/global.css`.

## Adding or Editing Supplements

Each supplement is a Markdown file in `src/content/supplements/`:

```markdown
---
title: "Product Name"
description: "Short description for SEO and cards."
shortDescription: "Hook for product cards."
tags: ["strength", "endurance"]
badge: "Más vendido"
price: 99
currency: "PEN"
servingSize: "5g"
servingsPerContainer: 60
featured: true
order: 1
flavor: "Sin sabor"
ingredients: "100% ..."
allergens: "Sin gluten..."
warnings: "Consulta a..."
benefits:
  - "Beneficio uno"
  - "Beneficio dos"
howToUse: "Tomar 5g al día..."
scienceSummary: "Resumen científico..."
studies:
  - title: "Study title"
    journal: "Journal name"
    year: 2020
    url: "https://..."
faqs:
  - question: "¿Pregunta?"
    answer: "Respuesta."
---

## Body content

Markdown body appears in the **Descripción** tab of the product page.
```

Required fields: `title`, `description`, `tags`.

## WhatsApp Number

Edit the number in `src/data/contact.ts`:

```ts
export const WHATSAPP_NUMBER = '51912345678';
```

Use the full international format without `+`, spaces, or dashes. The number is used everywhere via `getWhatsAppUrl()`.

## OG / Social Images

A placeholder Open Graph image lives at `public/og-default.svg`. For production sharing on all platforms, replace it with a `1200×630` JPG or PNG and update the default in `src/layouts/Layout.astro`.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## SEO Features

- Canonical URLs, Open Graph, and Twitter Cards on every page
- JSON-LD structured data for Organization, Product, and FAQPage
- `/sitemap.xml` and `/rss.xml` feeds
- `robots.txt` with sitemap reference

## Design Principles

- **Pure black & white** palette with a single warm accent
- **Generous whitespace** and a strict 8px spacing grid
- **Large typography** with editorial serif accents
- **Scroll-triggered reveals** via IntersectionObserver
- **Frosted glass header** that appears on scroll
- **SVG product mockups** for a premium look without photography assets
