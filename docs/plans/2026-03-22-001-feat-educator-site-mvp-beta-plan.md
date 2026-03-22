---
title: "feat: Educator Site MVP — Nuxt 4 + PrimeVue + Tailwind v4 + Sanity"
type: feat
status: active
date: 2026-03-22
origin: docs/brainstorms/2026-03-22-educator-site-mvp-requirements.md
deepened: 2026-03-22
---

# feat: Educator Site MVP

## Enhancement Summary

**Deepened on:** 2026-03-22
**Review agents used:** architecture-strategist, security-sentinel, performance-oracle, kieran-typescript-reviewer, julik-frontend-races-reviewer, spec-flow-analyzer, framework-docs-researcher, best-practices-researcher

### Key Improvements
1. **Replaced `nuxt-schema-org` with `@nuxtjs/seo`** — unified module bundling sitemap, robots, schema.org, OG images, and link checker
2. **Added hybrid rendering strategy** (`routeRules` with ISR + prerender) — eliminates TTFB latency and reduces Sanity API usage 10-25x
3. **Added `@nuxt/fonts` and `@nuxt/image`** — font self-hosting with fallback metrics + responsive Sanity images with WebP
4. **Fixed `tailwindcss-primeui` registration** — must use `@import` not `@plugin` in Tailwind v4
5. **Added `siteSettings` and `aboutPage` Sanity singletons** — global content (social links, contact info) editable without deploys
6. **Added security hardening** — rate limiting, CSRF enforcement, security headers, Zod max-length constraints, link href sanitization
7. **Added composables layer** — `useSeoFromSanity`, typed GROQ query modules, runtime config type augmentation
8. **Added missing UX elements** — `error.vue` (custom 404), blog post discipline CTA, CalendlyButton as progressive enhancement, default OG image, events rendering surface on discipline pages

### New Considerations Discovered
- `@nuxtjs/sanity` has known bugs: `useSanityQuery` may not react to parameter changes (#1234); scroll position resets (#1366). Use `useAsyncData` with `watch` as workaround
- `tailwindcss-primeui` v0.6.1 ships dual support: JS plugin for Tailwind v3, CSS utilities via `@import` for v4. Using `@plugin` in v4 will fail
- Resend requires a verified sending domain for production — `onboarding@resend.dev` only sends to the account owner's email
- Sanity project ID `h11qkpwx` is already in git history and cannot be scrubbed. Accept it as public (it would be exposed in frontend API calls anyway)

## Overview

Build a launch-ready personal brand website for a coach teaching BJJ and Urban Kiz through Perceptual Control Theory (PCT). The site also hosts a web development portfolio at `/portfolio`. The current repo has a partially scaffolded Nuxt 4 frontend and an empty Sanity Studio backend with several structural issues that must be fixed before any UI work begins.

## Problem Frame

A coach needs a website that converts visitors into coaching clients. The site must explain the PCT-based methodology for each discipline, display testimonials, embed Calendly booking, and host a traditional blog — all managed through Sanity Studio so the coach can publish content without developer intervention. The `/portfolio` route serves the coach's separate career as a web developer. (see origin: `docs/brainstorms/2026-03-22-educator-site-mvp-requirements.md`)

## Requirements Trace

### Foundation
- R1. Flatten `backend/backend/` to `studio/`
- R2. Move PrimeVue deps from backend to frontend `package.json`
- R3. Remove `@nuxt/content` and `content/` directory; consolidate on Sanity
- R4. Install Tailwind CSS v4 via `@tailwindcss/vite` with CSS-first `@theme` config
- R5. Configure PrimeVue unstyled mode with `tailwindcss-primeui`; verify components render
- R6. Extract Sanity credentials to env vars; create `.env.example` and root `.gitignore`
- R7. Configure Sanity CORS origins for localhost
- R8. Set up Sanity preview/draft mode via `@nuxtjs/sanity` visual editing
- R9. Use `-` prefixed directories to exclude page-specific components from routing
- R10. Use lazy-loaded components instead of island components

### Content Model
- R11. `article` schema (title, slug, excerpt, body, category ref, date, image, SEO)
- R12. `category` schema (title, slug, description)
- R13. `teachingPage` schema (title, slug, discipline, methodology, benefits, booking CTA, SEO)
- R14. `testimonial` schema (name, discipline, quote, transformation narrative, duration, photo)
- R15. `event` schema (title, date, location, discipline, description, booking link, capacity)
- R16. Cross-referencing via Sanity reference fields
- R16b. `project` schema for web dev portfolio (title, slug, description, image, tech stack, URL, source URL)
- R16c. `siteSettings` singleton (site title, coach name, email, phone, location, social links, Calendly URLs per discipline, default OG image)
- R16d. `aboutPage` singleton (bio, methodology, credentials — editable without code changes)

### Pages
- R17. Global layout with header nav and footer
- R18. Home page (hero, discipline features, testimonials, recent posts)
- R19. BJJ page with methodology, testimonials, upcoming events, Calendly embed
- R20. Dance page (same structure as BJJ for Urban Kiz)
- R21. Blog index (reverse-chronological, category filter, paginated)
- R22. Blog post `[slug]` with Portable Text rendering + discipline CTA
- R23. About page (bio, methodology, credentials — from Sanity `aboutPage` singleton)
- R24. Contact page with form (Nuxt server route + Resend)
- R25. Portfolio page (web dev projects from Sanity)
- R17b. Custom error page (`error.vue`) with navigation and helpful links

### Conversion
- R26. Calendly popup embed on discipline pages (progressive enhancement over plain link)
- R27. Testimonials on discipline pages and home page
- R28. CTA path: method → testimonials → book (on discipline pages AND blog posts)

### Design
- R29. 18px base, 1.333 typographic scale, self-hosted fonts via `@nuxt/fonts`
- R30. Tetradic palette with documented WCAG AA contrast pairs
- R31. `prefers-reduced-motion` support
- R32. Classy but playful personality via typography and color accents

### SEO / Accessibility
- R33. JSON-LD via `@nuxtjs/seo` (Person, LocalBusiness, Article, Event) + sitemap + robots.txt
- R34. Meta tags, Open Graph, and default OG image on every page
- R35. Semantic HTML, keyboard-accessible interactive elements
- R35b. Security headers (HSTS, X-Content-Type-Options, X-Frame-Options, CSP, Referrer-Policy)

## Scope Boundaries

- **Out of scope:** Quiz/self-assessment, email capture, social distribution, interactive PCT explainer, video library, progressive depth, custom Portable Text blocks, content calendar (see origin)
- **Deferred:** Deployment platform choice. Site should be deployable to Vercel, Netlify, or any Node host

## Context & Research

### Relevant Code and Patterns

- `frontend/nuxt.config.ts` — Current config references `@primevue/nuxt-module` (not installed in frontend) and `@nuxt/content` (to be removed)
- `frontend/app/pages/[...slug].vue` — Nuxt Content catch-all page (will be replaced). Has a bug: `useAsyncData` key is not reactive, causing stale content on client navigation
- `frontend/app/components/` — Two demo components from Nuxt Content starter (will be removed)
- `backend/backend/schemaTypes/index.ts` — Exports empty array; all schemas to be defined here
- `backend/backend/sanity.config.ts` — Hardcoded project ID `h11qkpwx`, dataset `production`
- Vue 3 Composition API with `<script setup lang="ts">` is the established component pattern
- pnpm is the package manager for both packages

### Institutional Learnings

No `docs/solutions/` directory exists. This is a greenfield project.

### External References

- **Tailwind v4 + Nuxt 4:** Use `@tailwindcss/vite` native Vite plugin. CSS-first config via `@theme` directive. Typography plugin registered via `@plugin "@tailwindcss/typography"` in CSS
- **CRITICAL — `tailwindcss-primeui` in Tailwind v4:** Must use `@import "tailwindcss-primeui"` NOT `@plugin`. The package ships dual support: JS plugin for v3, CSS utilities via `@import` for v4. Using `@plugin` will fail silently
- **PrimeVue + Tailwind v4:** Use `@primevue/nuxt-module` with `unstyled: true` and Tailwind classes via passthrough (PT) props. `tailwindcss-primeui` provides PrimeVue design token utilities (`bg-primary`, `text-primary-contrast`, `bg-surface-*`)
- **Sanity + Nuxt 4:** `@nuxtjs/sanity` v2.2.x provides `useSanityQuery()`, auto-imported `<SanityContent>` for Portable Text, and `visualEditing` config. Known issues: `useSanityQuery` may not react to parameter changes (#1234) — use `useAsyncData` with `watch` as workaround. Visual editing may require CSP/cookie configuration on some hosting platforms
- **WCAG contrast results:**
  - PASS AA normal: Purple on white (5.92:1), Purple↔Gold (4.89:1), Gold/Green/Orange on black
  - FAIL on white: Gold (1.21:1), Green (2.85:1), Orange (2.19:1)
  - Strategy: Purple as primary text on white; colored backgrounds with dark/black text; gold/green/orange as accents, borders, and backgrounds only
- **Calendly:** Popup with lazy script loading. Render CalendlyButton as a plain `<a>` link; intercept click to show popup when script loads. Preload Calendly CSS on hover for perceived instant popup
- **Contact form:** Nuxt server route + Resend API (3K/month free). Requires verified sending domain for production. `onboarding@resend.dev` sends only to account owner during dev
- **SEO:** `@nuxtjs/seo` bundles sitemap, robots, schema.org, og-image, link-checker in one module
- **Fonts:** `@nuxt/fonts` module self-hosts fonts, generates fallback metrics for zero CLS, preloads critical fonts
- **Images:** `@nuxt/image` with Sanity provider generates responsive `srcset` with WebP. `<SanityImage>` auto-delegates to `<NuxtImg>` when both modules are installed
- **Rendering:** Hybrid rendering via `routeRules` — prerender static pages, ISR for blog, SSR for contact form

## Key Technical Decisions

- **`@tailwindcss/vite` over `@nuxtjs/tailwindcss`:** The Nuxt Tailwind module does not support v4
- **PrimeVue unstyled + manual PT over Volt:** Volt vendors component code. Unstyled keeps PrimeVue as a dependency. `tailwindcss-primeui` provides the token bridge
- **`@nuxtjs/sanity` over raw `@sanity/client`:** Auto-imported composables, `<SanityContent>`, visual editing, `<SanityImage>` integration with `@nuxt/image`
- **`@nuxtjs/seo` over standalone `nuxt-schema-org`:** Unified module providing sitemap, robots, schema.org, OG images, and link checker. No need to install 6 separate packages
- **`@nuxt/fonts` for font loading:** Self-hosts fonts at build time, generates fallback metrics to eliminate CLS, preloads critical fonts. Directly impacts Lighthouse Performance
- **`@nuxt/image` with Sanity provider:** Responsive `srcset`, automatic WebP, crop/hotspot support. Eliminates oversized image delivery
- **Hybrid rendering via `routeRules`:** Prerender static pages (`/`, `/bjj`, `/dance`, `/about`, `/portfolio`), ISR for blog, SSR for contact. Reduces Sanity API usage 10-25x vs full SSR
- **Nuxt server route + Resend over external form service:** Server routes are available in SSR mode. Rate limiting, Zod validation, and CSRF enforcement on the server
- **Calendly popup as progressive enhancement:** Render as plain `<a href>` link, intercept click for popup. Works with JS disabled, ad blockers, or if Calendly is down
- **`studio/` directory name over `backend/`:** Clearer intent
- **Portfolio in Sanity:** `project` schema type
- **`siteSettings` singleton:** Global content (contact info, social links, Calendly URLs) editable in Sanity without code changes
- **`aboutPage` singleton:** Coach bio, methodology, credentials editable in Sanity. Satisfies success criterion: "coach can publish without developer intervention"
- **`<SanityContent>` over `@portabletext/vue`:** `@nuxtjs/sanity` auto-imports `<SanityContent>` which wraps `@portabletext/vue`. No need to install it separately
- **Composables for GROQ queries:** Extract queries into typed modules (`queries/article.queries.ts`) to avoid duplication and centralize error handling

## Open Questions

### Resolved During Planning

- **Tailwind v4 integration:** `@tailwindcss/vite` native plugin (R4)
- **PrimeVue + Tailwind v4:** Unstyled mode with PT props + `tailwindcss-primeui` via `@import` (R5)
- **Sanity preview:** `@nuxtjs/sanity` visual editing config (R8)
- **Contact form handler:** Nuxt server route + Resend API with rate limiting (R24)
- **Portfolio data source:** Sanity `project` schema (R25)
- **Contrast validation:** Full matrix computed (R30)
- **About page data source:** Sanity `aboutPage` singleton document (R23)
- **Events rendering surface:** Upcoming events section on discipline pages, filtered by discipline (R15, R19, R20)
- **Font loading:** `@nuxt/fonts` module with self-hosting, fallback metrics, preloading (R29)
- **Image optimization:** `@nuxt/image` with Sanity provider for responsive images (R18-R22)
- **Rendering strategy:** Hybrid with `routeRules` — prerender + ISR + SSR per route (performance)
- **SEO module:** `@nuxtjs/seo` unified module (R33, R34)

### Deferred to Implementation

- **Exact PrimeVue PT class definitions:** Will be determined component-by-component
- **Resend sending domain:** Requires DNS setup for production. Dev uses `onboarding@resend.dev`
- **Exact GROQ query shapes:** Co-locate with TypeScript result types in query modules
- **`sanity-typegen` compatibility:** Verify `sanity typegen generate` works with the project's schema definitions for shared types
- **Visual editing on target host:** Test preview cookie and iframe communication on the deployment platform

## High-Level Technical Design

> *This illustrates the intended approach and is directional guidance for review, not implementation specification. The implementing agent should treat it as context, not code to reproduce.*

```
┌─────────────────────────────────────────────────────────────┐
│                     Sanity Studio (studio/)                  │
│  Schemas: article, category, teachingPage, testimonial,     │
│           event, project, siteSettings*, aboutPage*          │
│  (* = singleton documents)                                   │
│  Plugins: structureTool, visionTool                         │
│  Visual Editing → @nuxtjs/sanity visualEditing config       │
└──────────────────────────┬──────────────────────────────────┘
                           │ GROQ queries via CDN API
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   Nuxt 4 Frontend (frontend/)                │
│                                                              │
│  nuxt.config.ts                                              │
│  ├── modules: @nuxtjs/sanity, @primevue/nuxt-module,        │
│  │            @nuxtjs/seo, @nuxt/fonts, @nuxt/image          │
│  ├── vite.plugins: @tailwindcss/vite                         │
│  ├── sanity: { projectId, dataset, visualEditing }           │
│  ├── routeRules: { prerender, isr, ssr per route }           │
│  └── runtimeConfig: {                                        │
│        resendApiKey (server-only),                            │
│        sanityApiReadToken (server-only),                      │
│        public: { sanityProjectId, sanityDataset, siteUrl }   │
│      }                                                       │
│                                                              │
│  app/assets/css/main.css                                     │
│  ├── @import "tailwindcss"                                   │
│  ├── @import "tailwindcss-primeui"  ← NOT @plugin!           │
│  ├── @plugin "@tailwindcss/typography"                       │
│  └── @theme { colors, typography, spacing }                  │
│                                                              │
│  app/composables/                                            │
│  ├── useSeoFromSanity.ts                                     │
│  └── useSiteSettings.ts                                      │
│                                                              │
│  app/queries/  (typed GROQ query modules)                    │
│  ├── article.queries.ts                                      │
│  ├── testimonial.queries.ts                                  │
│  └── teaching.queries.ts                                     │
│                                                              │
│  app/layouts/default.vue → AppHeader + AppFooter             │
│  app/error.vue → Custom 404 with nav + helpful links         │
│                                                              │
│  app/pages/                                                  │
│  ├── index.vue (home, prerendered)                           │
│  ├── (teaching)/ (prerendered)                               │
│  │   ├── bjj.vue, dance.vue                                  │
│  │   └── -components/                                        │
│  ├── (marketing)/ (prerendered / SSR for contact)            │
│  │   ├── about.vue, contact.vue, portfolio.vue               │
│  │   └── -components/                                        │
│  └── blog/ (ISR)                                             │
│      ├── index.vue, [slug].vue                               │
│      └── -components/                                        │
│                                                              │
│  server/api/contact.post.ts → Zod + rate limit + Resend     │
│  server/middleware/security-headers.ts                        │
│                                                              │
│  types/nuxt.d.ts → RuntimeConfig type augmentation           │
└─────────────────────────────────────────────────────────────┘
```

## Implementation Units

### Phase 1: Foundation

- [ ] **Unit 1: Repo cleanup and dependency installation**

  **Goal:** Fix structural issues, install all dependencies, configure modules, and establish security baseline. The root `.gitignore` MUST be created as the very first action before any other file operations.

  **Requirements:** R1, R2, R3, R6, R7, R33, R35b

  **Dependencies:** None

  **Files:**
  - Create: `.gitignore` (root) — **FIRST ACTION**
  - Move: `backend/backend/*` → `studio/` (flatten and rename)
  - Delete: `backend/` (empty after move)
  - Modify: `studio/package.json` (remove PrimeVue deps)
  - Modify: `studio/sanity.config.ts` (use env vars for projectId/dataset)
  - Modify: `studio/sanity.cli.ts` (use env vars)
  - Modify: `studio/.gitignore` (add `.env` coverage)
  - Modify: `frontend/package.json` (add all dependencies)
  - Modify: `frontend/nuxt.config.ts` (remove `@nuxt/content`, configure all modules)
  - Delete: `frontend/content.config.ts`, `frontend/content/`, demo components, catch-all page
  - Create: `.env.example` (root)
  - Create: `frontend/.env.example`
  - Create: `frontend/types/nuxt.d.ts` (RuntimeConfig type augmentation)
  - Create: `frontend/server/middleware/security-headers.ts`

  **Approach:**
  - **FIRST:** Create root `.gitignore` covering `.env`, `.env.*`, `node_modules`, `.nuxt`, `dist`, `.output`, `.DS_Store`. This prevents accidental secret commits
  - Flatten `backend/backend/` to `studio/` in one move operation. Add `.env` to `studio/.gitignore`
  - Remove PrimeVue deps from `studio/package.json`
  - In `frontend/`, install:
    - `primevue`, `@primevue/nuxt-module` — UI components
    - `tailwindcss`, `@tailwindcss/vite`, `tailwindcss-primeui`, `@tailwindcss/typography` — styling
    - `@nuxtjs/sanity` — CMS integration (includes `@portabletext/vue` transitively)
    - `@nuxtjs/seo` — SEO (bundles sitemap, robots, schema.org, og-image, link-checker)
    - `@nuxt/fonts` — font self-hosting with fallback metrics
    - `@nuxt/image` — responsive images with Sanity provider
    - `zod` — form validation
  - Do NOT install `@portabletext/vue` separately — `@nuxtjs/sanity` includes it
  - Remove `@nuxt/content` from frontend deps and modules array
  - Configure `nuxt.config.ts`:
    - Modules: `['@nuxtjs/sanity', '@primevue/nuxt-module', '@nuxtjs/seo', '@nuxt/fonts', '@nuxt/image']`
    - `sanity`: projectId, dataset, apiVersion from runtimeConfig
    - `site`: url, name, description (for `@nuxtjs/seo`)
    - `image.sanity`: projectId, dataset (for Sanity provider)
    - `fonts.families`: heading + body fonts with preload
    - `routeRules`: hybrid rendering (see performance section below)
    - `runtimeConfig`: server-only secrets + public config
    - `primevue.options.unstyled: true`
  - **Runtime config structure** (security-critical):
    ```
    runtimeConfig: {
      sanityApiReadToken: ''   // Server-only — NEVER in runtimeConfig.public
      resendApiKey: ''         // Server-only
      public: {
        sanityProjectId: ''    // Safe to expose
        sanityDataset: ''      // Safe to expose
        sanityApiVersion: ''
        siteUrl: ''
      }
    }
    ```
  - **Hybrid rendering via `routeRules`:**
    ```
    routeRules: {
      '/': { prerender: true }
      '/bjj': { prerender: true }
      '/dance': { prerender: true }
      '/about': { prerender: true }
      '/portfolio': { prerender: true }
      '/blog': { isr: 3600 }        // Revalidate hourly
      '/blog/**': { isr: true }     // Cache until redeploy
      '/contact': { ssr: true }     // Needs server route
      '/api/**': { cors: true }
    }
    ```
  - **Security headers middleware** (`server/middleware/security-headers.ts`):
    - `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`
    - CSP allowing `self`, Calendly (`assets.calendly.com`), Sanity CDN (`cdn.sanity.io`)
  - **Type augmentation** (`types/nuxt.d.ts`): Declare `RuntimeConfig` and `PublicRuntimeConfig` interfaces so `useRuntimeConfig()` is type-safe throughout
  - `.env.example` with clear comments distinguishing public vs secret values. Note that `SANITY_STUDIO_*` vars are automatically exposed to Studio's client bundle (by convention)
  - Note in `.env.example`: "Before production deploy, add your domain to Sanity CORS origins in manage.sanity.io"

  **Verification:**
  - `pnpm install` succeeds in both `frontend/` and `studio/`
  - `pnpm dev` starts Nuxt without module resolution errors
  - `pnpm dev` starts Sanity Studio without errors
  - No `backend/` directory exists; `studio/` contains all Sanity files
  - No `@nuxt/content` references remain in the frontend
  - `.gitignore` exists at root and covers `.env` files
  - Security headers appear in HTTP responses during dev

---

- [ ] **Unit 2: Tailwind v4 design system with PrimeVue unstyled**

  **Goal:** Establish the complete CSS foundation — Tailwind v4 with the tetradic palette, typography scale, font loading, PrimeVue unstyled integration, and accessibility baseline.

  **Requirements:** R4, R5, R29, R30, R31, R32

  **Dependencies:** Unit 1

  **Files:**
  - Create: `frontend/app/assets/css/main.css`
  - Modify: `frontend/nuxt.config.ts` (add `css`, `vite.plugins`, PrimeVue unstyled config, fonts config)

  **Approach:**
  - `main.css` structure:
    ```css
    @import "tailwindcss";
    @import "tailwindcss-primeui";          /* ← @import NOT @plugin for TW v4 */
    @plugin "@tailwindcss/typography";       /* ← @plugin is correct for this one */

    @theme {
      --color-royal-purple: #7851A9;
      --color-royal-gold: #F9ED6C;
      --color-royal-green: #49AA83;
      --color-royal-orange: #F9966C;
      /* Surface/text colors for contrast safety */
      --color-text-primary: #1A1A2E;        /* Near-black for body text */
      --color-surface-light: #FAFAF8;       /* Off-white background */

      --text-base: 18px;
      --text-lg: 24px;
      --text-xl: 32px;
      --text-2xl: 43px;
      --text-3xl: 57px;
      /* Font families set via @nuxt/fonts */
    }

    /* Accessibility: reduce motion */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        transition-duration: 0.01ms !important;
      }
    }

    /*
     * WCAG AA Contrast Reference:
     * PASS: royal-purple on white (5.92:1)
     * PASS: royal-purple on royal-gold (4.89:1)
     * PASS: text-primary on white (excellent)
     * PASS: gold/green/orange on black or text-primary background
     * FAIL: gold on white (1.21:1) — never use as text on light bg
     * FAIL: green on white (2.85:1) — never use as text on light bg
     * FAIL: orange on white (2.19:1) — never use as text on light bg
     * Use purple or text-primary for text on light backgrounds.
     * Use gold/green/orange for backgrounds, borders, accents only.
     */
    ```
  - **CRITICAL:** `tailwindcss-primeui` uses `@import` in Tailwind v4, NOT `@plugin`. The `@tailwindcss/typography` plugin uses `@plugin`. These are different mechanisms
  - `@nuxt/fonts` config in `nuxt.config.ts`: declare heading and body font families with `provider: 'google'` (or `'bunny'` for GDPR), `preload: true` for above-the-fold fonts, `subsets: ['latin']`
  - PrimeVue config: `primevue: { options: { unstyled: true }, autoImport: true }`
  - `vite.plugins`: register `@tailwindcss/vite`
  - `css`: `['~/assets/css/main.css']`

  **Patterns to follow:**
  - Tailwind v4 CSS-first `@theme` convention (no `tailwind.config.js`)
  - PrimeVue unstyled mode with PT props for accessibility

  **Test scenarios:**
  - Tailwind utility classes render correctly (`bg-royal-purple text-white`)
  - PrimeVue `<Button>` renders unstyled and accepts Tailwind classes via PT
  - Typography plugin generates `prose` classes
  - `prefers-reduced-motion` media query is present in built CSS
  - Fonts load without FOIT; fallback metrics prevent CLS
  - No `tailwind.config.js` exists

  **Verification:**
  - `pnpm dev` renders a page with Tailwind utilities applied
  - PrimeVue components are unstyled by default and styleable via Tailwind classes
  - Lighthouse Performance not degraded by font loading

---

### Phase 2: Content Model

- [ ] **Unit 3: Sanity schemas, composables, and preview**

  **Goal:** Define all content types in Sanity Studio, create typed GROQ query modules and composables in the frontend, and configure preview mode.

  **Requirements:** R8, R11, R12, R13, R14, R15, R16, R16b, R16c, R16d

  **Dependencies:** Unit 1

  **Files:**
  - Create: `studio/schemaTypes/article.ts`
  - Create: `studio/schemaTypes/category.ts`
  - Create: `studio/schemaTypes/teachingPage.ts`
  - Create: `studio/schemaTypes/testimonial.ts`
  - Create: `studio/schemaTypes/event.ts`
  - Create: `studio/schemaTypes/project.ts`
  - Create: `studio/schemaTypes/siteSettings.ts` (singleton)
  - Create: `studio/schemaTypes/aboutPage.ts` (singleton)
  - Create: `studio/schemaTypes/portableText.ts` (shared rich text object type)
  - Modify: `studio/schemaTypes/index.ts` (register all schema types)
  - Create: `frontend/app/queries/article.queries.ts`
  - Create: `frontend/app/queries/testimonial.queries.ts`
  - Create: `frontend/app/queries/teaching.queries.ts`
  - Create: `frontend/app/queries/site.queries.ts`
  - Create: `frontend/app/composables/useSeoFromSanity.ts`
  - Create: `frontend/app/composables/useSiteSettings.ts`
  - Modify: `frontend/nuxt.config.ts` (configure `@nuxtjs/sanity` visual editing)

  **Approach:**
  - Each schema uses `defineType` and `defineField` from `sanity`
  - **Schemas:**
    - `article`: title (required), slug (source: title), excerpt (text), body (portableText), category (ref → category), publishDate (datetime), featuredImage (image+hotspot+alt), seo object (metaTitle, metaDescription, ogImage)
    - `category`: title (required), slug, description
    - `teachingPage`: title, slug, discipline (string list: BJJ / Urban Kiz), methodology (portableText), benefits (array of strings), bookingCtaText, heroImage, seo object
    - `testimonial`: studentName, discipline, quote, transformationBefore, transformationAfter, duration, photo, featured (boolean)
    - `event`: title, slug, date, endDate, location (object: type, venue, address), discipline, description (portableText), bookingUrl, capacity
    - `project`: title, slug, description, body (portableText), featuredImage, techStack (array of strings), liveUrl, sourceUrl, featured (boolean)
    - `siteSettings` (singleton): siteTitle, coachName, email, phone, location, socialLinks (array of {platform, url}), calendlyBjjUrl, calendlyKizUrl, defaultOgImage
    - `aboutPage` (singleton): bio (portableText), methodologyDescription (portableText), credentials (array of strings), heroImage
    - `portableText` (shared object type): block with standard marks + link annotation (validate href against `http://`, `https://`, `mailto:`, `/` — reject `javascript:` and `data:` schemes) + internalLink references to article/teachingPage. Plus image with alt text
  - **Typed GROQ query modules:** Each query file exports GROQ strings and TypeScript result type interfaces. Example pattern:
    ```ts
    export const articleListQuery = groq`*[_type == "article"]...`
    export interface ArticleSummary { _id: string; title: string; slug: string; ... }
    ```
    Usage: `useSanityQuery<ArticleSummary[]>(articleListQuery)`
  - **Composables:**
    - `useSeoFromSanity(fields: MaybeRef<SanitySeoFields | null>)`: Maps Sanity SEO fields to `useSeoMeta()`. Accepts reactive refs. Handles ogImage via `@nuxt/image` Sanity provider
    - `useSiteSettings()`: Fetches `siteSettings` singleton once and caches. Used by layout for footer, nav, Calendly URLs, and JSON-LD identity
  - **Visual editing config:** `sanity.visualEditing` with studioUrl, token (from server-only runtimeConfig), stega
  - **Cross-referencing:** articles → categories, testimonials; teachingPages → testimonials, events, articles; events → teachingPage

  **Test scenarios:**
  - Sanity Studio starts and shows all document types in sidebar
  - Singleton documents (siteSettings, aboutPage) appear as single items in Structure
  - A test article can be created with all fields filled
  - Frontend `useSanityQuery` returns typed results
  - `useSeoFromSanity` sets correct meta tags
  - Visual editing preview shows draft content when token is configured

  **Verification:**
  - `sanity dev` shows all document types
  - Schema validations work (required fields, slug generation)
  - Frontend can fetch data from Sanity
  - No TypeScript errors in query modules

---

### Phase 3: Layout and Shared Components

- [ ] **Unit 4: Global layout, navigation, error page, and reusable components**

  **Goal:** Create the default layout with header/nav/footer, custom error page, and reusable UI components.

  **Requirements:** R17, R17b, R32, R35

  **Dependencies:** Units 2, 3

  **Files:**
  - Create: `frontend/app/layouts/default.vue`
  - Create: `frontend/app/error.vue`
  - Create: `frontend/app/components/global/AppHeader.vue`
  - Create: `frontend/app/components/global/AppFooter.vue`
  - Create: `frontend/app/components/global/AppNavigation.vue`
  - Create: `frontend/app/components/ui/SectionHeading.vue`
  - Create: `frontend/app/components/ui/TestimonialCard.vue`
  - Create: `frontend/app/components/ui/CalendlyButton.vue`
  - Create: `frontend/app/components/ui/DisciplineCTA.vue`
  - Create: `frontend/public/og-default.png` (placeholder — replace with real image)
  - Modify: `frontend/app/app.vue` (add `<NuxtLayout>` wrapper)

  **Approach:**
  - `default.vue`: Wraps `<slot>` with AppHeader and AppFooter. Semantic `<header>`, `<main>`, `<footer>`. Calls `useSiteSettings()` to fetch global data. Calls `useSchemaOrg([defineWebSite(), defineWebPage()])` for site-wide structured data
  - `error.vue`: Custom error page matching site design. Shows nav, helpful links ("Looking for coaching? Try /bjj or /dance"), and 404/500 messaging. Uses the same design system
  - `AppNavigation.vue`: Links to Home, BJJ, Dance, Blog, About, Contact, Portfolio. Mobile: PrimeVue `<Sidebar>` (slide-out drawer — better than Menubar for 7+ items). Close sidebar on route change via `router.afterEach(() => { sidebarVisible.value = false })`
  - **CalendlyButton.vue** (progressive enhancement):
    - Render as `<a :href="calendlyUrl" target="_blank" rel="noopener">` by default — works without JS
    - On click, intercept to load Calendly script and show popup instead
    - State machine to prevent double-click: IDLE → LOADING → READY → OPEN
    - Check if `<script>` with Calendly src already exists before appending
    - Preload Calendly CSS on `@mouseenter`/`@focusin` for perceived instant popup
    - `onUnmounted`: close popup and reset state to prevent ghost overlays on navigation
    - Accept `calendlyUrl` prop (typed as string — may come from siteSettings)
    - Show loading state (spinner/text) during first script load
  - **DisciplineCTA.vue**: Contextual CTA linking to a discipline page with booking nudge. Used at the bottom of blog posts to bridge from content to conversion. Accepts `discipline` prop, links to `/bjj` or `/dance`
  - **TestimonialCard.vue**: Name, discipline badge, quote, optional photo. Uses `<SanityImage>` for photo with responsive sizing
  - **Default OG image**: Place a placeholder at `public/og-default.png`. Configure in `nuxt.config.ts` via `app.head` or `@nuxtjs/seo` defaults. Sanity pages override with their document's ogImage

  **Patterns to follow:**
  - Nuxt auto-import for components in `app/components/`
  - `-components/` directories are NOT auto-imported — must use explicit imports
  - `<script setup lang="ts">` composition API
  - PrimeVue unstyled components with PT props for accessibility

  **Test scenarios:**
  - Navigation renders all 7 links and is keyboard-navigable
  - Mobile sidebar opens and closes; closes automatically on route change
  - CalendlyButton works as plain link when JS disabled; shows popup when JS available
  - CalendlyButton prevents double-click during script loading
  - Error page renders with navigation and helpful links for 404/500
  - Footer shows contact info and social links from siteSettings
  - Default OG image appears on pages without explicit OG image

  **Verification:**
  - Every page shows consistent header and footer
  - Navigation links route correctly
  - Error page renders for non-existent routes
  - CalendlyButton loads script only on click (no script in initial page source)

---

### Phase 4: Pages

- [ ] **Unit 5: Home page**

  **Goal:** Build the landing page that communicates the coach's value proposition and drives visitors to discipline pages.

  **Requirements:** R18, R27, R28

  **Dependencies:** Units 3, 4

  **Files:**
  - Create: `frontend/app/pages/index.vue`

  **Approach:**
  - Hero section: Headline, value prop, two CTAs to `/bjj` and `/dance`. Hero image with `fetchpriority="high"` and `loading="eager"` (LCP element)
  - Discipline feature sections with CTAs
  - Testimonials: Use `testimonialListQuery` from query module. Featured testimonials, mixed disciplines. **Hide entire section with `v-if` when empty** (launch-day concern)
  - Recent blog posts: Latest 3 articles. **Hide section when empty**
  - Use single batched GROQ query for all page data (one HTTP request):
    ```groq
    {
      "testimonials": *[_type == "testimonial" && featured == true][0..5],
      "recentPosts": *[_type == "article"] | order(publishDate desc)[0..2]{...}
    }
    ```
  - `useSeoFromSanity` for meta tags. `useSchemaOrg` with `definePerson()` for the coach
  - All images via `<SanityImage>` / `<NuxtImg>` with responsive `sizes` and `loading="lazy"` (except hero)

  **Test scenarios:**
  - Hero renders with CTAs to `/bjj` and `/dance`
  - Testimonials section hidden when empty, visible when populated
  - Blog section hidden when empty, visible when populated
  - Page has valid JSON-LD

  **Verification:**
  - Home page renders without errors
  - Only one GROQ API request for all data
  - LCP image has `fetchpriority="high"`

---

- [ ] **Unit 6: Teaching pages (BJJ + Dance)**

  **Goal:** Build the two discipline pages with methodology, testimonials, upcoming events, and booking.

  **Requirements:** R19, R20, R26, R27, R28, R15

  **Dependencies:** Units 3, 4

  **Files:**
  - Create: `frontend/app/pages/(teaching)/bjj.vue`
  - Create: `frontend/app/pages/(teaching)/dance.vue`
  - Create: `frontend/app/pages/(teaching)/-components/MethodologySection.vue`
  - Create: `frontend/app/pages/(teaching)/-components/BenefitsList.vue`
  - Create: `frontend/app/pages/(teaching)/-components/DisciplineTestimonials.vue`
  - Create: `frontend/app/pages/(teaching)/-components/UpcomingEvents.vue`

  **Approach:**
  - Both pages share structure, differentiated by discipline. Use single batched GROQ query per page:
    ```groq
    {
      "page": *[_type == "teachingPage" && discipline == $discipline][0]{...},
      "testimonials": *[_type == "testimonial" && discipline == $discipline],
      "events": *[_type == "event" && discipline == $discipline && date > now()] | order(date asc)[0..2]
    }
    ```
  - Page sections following CTA path (R28): Hero → MethodologySection (Portable Text via `<SanityContent>`) → BenefitsList → DisciplineTestimonials → UpcomingEvents (hide when empty) → CalendlyButton (Calendly URL from `siteSettings`)
  - `-components/` imported explicitly (not auto-imported)
  - `useSeoFromSanity` from teachingPage SEO fields
  - Route group `(teaching)` → URLs are `/bjj` and `/dance`

  **Test scenarios:**
  - `/bjj` and `/dance` render discipline-specific content
  - Testimonials filtered by discipline
  - Upcoming events shown when they exist, hidden when empty
  - CalendlyButton triggers popup with correct discipline-specific URL
  - URLs do not include `teaching` prefix

  **Verification:**
  - Both routes resolve correctly
  - Content from Sanity renders when documents exist
  - Calendly popup launches with correct URL

---

- [ ] **Unit 7: Blog (index + post)**

  **Goal:** Build blog listing and individual posts with Portable Text, category filtering, pagination, and discipline CTA.

  **Requirements:** R21, R22, R28

  **Dependencies:** Units 3, 4

  **Files:**
  - Create: `frontend/app/pages/blog/index.vue`
  - Create: `frontend/app/pages/blog/[slug].vue`
  - Create: `frontend/app/pages/blog/-components/BlogCard.vue`
  - Create: `frontend/app/pages/blog/-components/BlogHeader.vue`
  - Create: `frontend/app/pages/blog/-components/CategoryFilter.vue`
  - Create: `frontend/app/pages/blog/-components/RelatedPosts.vue`

  **Approach:**
  - `blog/index.vue`:
    - Fetch articles with pagination: `[($page * 12)...(($page + 1) * 12)]` limit
    - Category filter via query param. Use `useAsyncData` with `watch: [selectedCategory]` to cancel in-flight requests when filter changes (prevents stale data flash)
    - Dynamic `useAsyncData` key: `() => \`blog-${selectedCategory.value}-${page.value}\``
    - Handle empty state
  - `blog/[slug].vue`:
    - Fetch article + related posts in single GROQ query
    - Body rendered via `<SanityContent :value="article.body" />` wrapped in `<div class="prose">`
    - **DisciplineCTA component at bottom**: reads article's category/discipline reference, links to corresponding discipline page with booking nudge. This bridges the conversion funnel gap (blog → discipline page → booking)
    - `useSchemaOrg` with `defineArticle()` populated from Sanity
    - `useSeoFromSanity` from article's SEO fields
    - Link `href` values in Portable Text must be sanitized — `<SanityContent>` handles this by default, but if custom serializers are added, validate href schemes (allow `http://`, `https://`, `mailto:`, `/`; reject `javascript:`, `data:`)
    - Missing slug → `throw createError({ statusCode: 404 })`

  **Test scenarios:**
  - Blog index lists articles reverse-chronologically
  - Category filter narrows list; changing filter cancels previous request
  - Pagination works at 12+ articles
  - Individual post renders Portable Text with `prose` typography
  - DisciplineCTA appears at bottom of posts with correct discipline link
  - Missing slug returns 404 (handled by `error.vue`)
  - Related posts appear by shared category

  **Verification:**
  - `/blog` renders article list from Sanity
  - `/blog/[slug]` renders formatted body text
  - Blog post has JSON-LD Article structured data
  - No stale data flashes during category filter changes

---

- [ ] **Unit 8: About, Contact, and Portfolio pages**

  **Goal:** Build remaining pages: coach bio from Sanity singleton, contact form with security, and web dev portfolio.

  **Requirements:** R23, R24, R25, R16b, R16d

  **Dependencies:** Units 3, 4

  **Files:**
  - Create: `frontend/app/pages/(marketing)/about.vue`
  - Create: `frontend/app/pages/(marketing)/contact.vue`
  - Create: `frontend/app/pages/(marketing)/portfolio.vue`
  - Create: `frontend/app/pages/(marketing)/-components/ContactForm.vue`
  - Create: `frontend/app/pages/(marketing)/-components/ProjectCard.vue`
  - Create: `frontend/server/api/contact.post.ts`

  **Approach:**
  - `about.vue`:
    - Fetch from Sanity `aboutPage` singleton: `*[_type == "aboutPage"][0]`
    - Sections: Bio (Portable Text), methodology description, credentials list
    - `useSchemaOrg` with `definePerson()` for the coach
  - `contact.vue`:
    - `ContactForm`: Name, email, message fields. Client-side Zod validation for UX. Submits via `$fetch('/api/contact', { method: 'POST', body })` with `Content-Type: application/json`
    - **State machine for double-submit prevention:** IDLE → SUBMITTING → SUCCESS → ERROR. Disable submit button during SUBMITTING state. Do not rely solely on `disabled` attribute
    - Display contact info from `siteSettings`
  - `server/api/contact.post.ts`:
    - **Validate Content-Type is `application/json`** — reject non-JSON requests (CSRF mitigation)
    - Zod schema with `string.max()` constraints: name max 100, email, message min 10 max 2000
    - Use `safeParse` not `parse` for controlled error handling
    - **Rate limiting:** In-memory IP-based counter (5 submissions per IP per hour). Use a Map with timestamps. For production, use platform-level rate limiting
    - **Honeypot field:** Include a hidden field; reject if filled
    - Send via Resend API (`POST https://api.resend.com/emails`). Bearer token auth
    - **Do NOT send confirmation email to submitter's address** — prevents use as spam relay
    - Return generic error messages; never expose Resend API errors to client. Log full errors server-side
    - Export `ContactFormData` type (Zod inferred) for frontend type safety
    - **Idempotency-Key header** recommended for Resend API calls to prevent duplicate emails
  - `portfolio.vue`:
    - Fetch projects: `*[_type == "project"] | order(featured desc, _createdAt desc)`
    - Grid of `ProjectCard` components: title, description, image, tech stack tags, live/source links
    - Distinct section feel within shared design system
    - Handle empty state
  - Route group `(marketing)` → URLs: `/about`, `/contact`, `/portfolio`

  **Test scenarios:**
  - About page renders bio and methodology from Sanity singleton
  - Contact form validates inputs (empty name, invalid email, short message, message too long)
  - Contact form prevents double-submit
  - Server route returns 400 for invalid input, 415 for non-JSON Content-Type
  - Server route rate-limits to 5 per IP per hour
  - Honeypot field rejects bot submissions
  - Portfolio renders project cards from Sanity
  - All routes resolve without `marketing` prefix

  **Verification:**
  - `/about`, `/contact`, `/portfolio` render correctly
  - Contact form submission results in email received (dev: to account owner only)
  - Rate limiting prevents rapid-fire submissions
  - Portfolio shows Sanity data when documents exist

---

### Phase 5: SEO and Polish

- [ ] **Unit 9: SEO verification, accessibility audit, and final integration**

  **Goal:** Verify all SEO elements are wired correctly, run accessibility checks, and confirm Lighthouse targets.

  **Requirements:** R33, R34, R35

  **Dependencies:** Units 5-8

  **Files:**
  - Modify: Various pages if SEO/meta gaps are found during verification

  **Approach:**
  - `@nuxtjs/seo` module (registered in Unit 1) provides: sitemap at `/sitemap.xml` (auto-discovers routes), robots.txt, schema.org composables, OG image support
  - For dynamic routes (blog posts), configure sitemap data source in `server/api/__sitemap__/urls.ts` to pull slugs from Sanity
  - Verify every page has:
    - Correct `<title>` and `<meta name="description">`
    - OG tags (title, description, image — default or Sanity-specific)
    - JSON-LD structured data (validate with Google Rich Results Test)
  - Verify accessibility:
    - All interactive elements keyboard-navigable
    - No Lighthouse accessibility errors
    - `prefers-reduced-motion` is respected
    - Color contrast follows documented WCAG pairs
  - Run `npx nuxi analyze` to verify bundle sizes:
    - PrimeVue limited to Button, Sidebar (15-25KB gzipped)
    - No unexpected large dependencies
  - Run Lighthouse audit targeting 90+ for Performance, Accessibility, SEO

  **Verification:**
  - JSON-LD validates in Google Rich Results Test
  - Sitemap accessible at `/sitemap.xml` with all routes
  - robots.txt configured
  - Lighthouse scores: Performance 90+, Accessibility 90+, SEO 90+
  - All pages have proper `<title>` and meta description
  - Bundle size within acceptable range

---

## System-Wide Impact

- **Interaction graph:** Sanity content → GROQ CDN API → Nuxt SSR/ISR → rendered HTML. Visual editing enables live preview from Studio (requires server-side token). Contact form → Nuxt server route → Resend API. Calendly popup is entirely client-side, loaded on demand. `@nuxtjs/seo` generates sitemap/robots/JSON-LD at build/request time
- **Error propagation:** Sanity fetch failures → hide empty sections (`v-if`) on content pages, not error pages. Contact form errors → user-friendly messages via form state machine; never expose Resend internals. Calendly script failure → CalendlyButton degrades to plain link (progressive enhancement). 404s → custom `error.vue` with navigation
- **State lifecycle risks:** CalendlyButton script load state must be cleaned up on `onUnmounted`. Mobile sidebar visibility must reset on route change (`router.afterEach`). Contact form state machine prevents double-submit. Blog category filter uses `useAsyncData` with `watch` to cancel stale requests
- **API surface parity:** Portfolio shares the same Sanity → Nuxt pipeline as coaching content
- **Integration coverage:** End-to-end: Sanity Studio → publish → Sanity webhook → platform rebuild (prerendered pages) or ISR revalidation (blog) → fresh content visible. Contact form: user fills form → server validates → rate limit check → honeypot check → Resend sends email

## Risks & Dependencies

- **PrimeVue + Tailwind v4 passthrough:** Relatively new integration. Start with Button and Sidebar only; verify PT works before using more components. If Sidebar PT proves unwieldy, consider custom nav with semantic HTML + Tailwind
- **`@nuxtjs/sanity` reactivity bugs:** `useSanityQuery` may not react to parameter changes (#1234). Workaround: use `useAsyncData` with `watch` for reactive parameters. Test early
- **`tailwindcss-primeui` v0.6.1:** Peer dependency says `tailwindcss >=3.1.0` — technically covers v4 but is a yellow flag. Verify during Unit 2 spike
- **Sanity free tier:** 100K API requests/month. ISR reduces usage 10-25x vs full SSR, making the free tier viable for years. Monitor usage
- **Resend sending domain:** Production requires DNS verification (SPF + DKIM). Plan for propagation time. Dev uses `onboarding@resend.dev` (sends only to account owner)
- **Visual editing on hosting platform:** May require CSP `frame-ancestors` and cookie configuration depending on the deployment platform. Test early
- **Sanity preview token:** Must be in `runtimeConfig` (server-only), NEVER in `runtimeConfig.public`. Exposing it allows reading draft content. Verify built client bundle does not contain the token string

## Documentation / Operational Notes

- Create a `SETUP.md` covering: cloning, `pnpm install` in both directories, creating `.env` from `.env.example`, Sanity CORS origins, Resend API key + domain verification, Calendly URL configuration
- Before first deploy: add production domain to Sanity CORS origins in manage.sanity.io
- Before production email: verify sending domain in Resend dashboard (DNS records)
- Set up Sanity webhook → CI/CD trigger for prerendered page rebuilds on content publish
- Consider removing `localhost` from Sanity CORS origins before production

## Sources & References

- **Origin document:** [docs/brainstorms/2026-03-22-educator-site-mvp-requirements.md](docs/brainstorms/2026-03-22-educator-site-mvp-requirements.md)
- **Ideation:** [docs/ideation/2026-03-22-educator-site-ideation.md](docs/ideation/2026-03-22-educator-site-ideation.md)
- Tailwind v4 Nuxt guide: tailwindcss.com/docs/installation/framework-guides/nuxt
- PrimeVue unstyled: primevue.org/theming/unstyled/
- tailwindcss-primeui (v4 CSS mode): npmjs.com/package/tailwindcss-primeui
- @nuxtjs/sanity: sanity.nuxtjs.org
- @nuxtjs/seo: nuxtseo.com/docs/nuxt-seo
- @nuxt/fonts: nuxt.com/modules/fonts
- @nuxt/image Sanity provider: image.nuxt.com/providers/sanity
- Nuxt route groups: nuxt.com/docs/4.x/directory-structure/app/pages
- Resend API: resend.com/docs/api-reference/emails/send-email
