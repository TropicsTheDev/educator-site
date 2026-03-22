---
date: 2026-03-22
topic: educator-site-mvp
---

# Educator Site MVP

## Problem Frame

A coach who teaches BJJ and Urban Kiz through Perceptual Control Theory (PCT) and the Iterative Reorganization Method needs a personal brand website that converts visitors into coaching clients. The site also serves as a professional web development portfolio (at `/portfolio`). The current repo has a partially scaffolded Nuxt frontend and an empty Sanity Studio backend with several structural issues (double-nested directories, misplaced dependencies, no Tailwind, competing CMS systems).

The MVP should be a launch-ready site the coach can point people to — not just a scaffold.

## Requirements

### Foundation (Fix Before Building UI)

- R1. Flatten `backend/backend/` to `backend/` (or `studio/`) and remove the redundant nesting
- R2. Move PrimeVue dependencies from Sanity backend `package.json` to frontend `package.json`
- R3. Remove `@nuxt/content` module and its `content/` directory; consolidate on Sanity as the single CMS
- R4. Install and configure Tailwind CSS v4 using CSS-first `@theme` configuration (no `tailwind.config.js`). Define the tetradic color palette (royal purple `#7851A9`, gold `#F9ED6C`, green `#49AA83`, orange `#F9966C`) and the 1.333 typographic scale as CSS custom properties
- R5. Resolve PrimeVue unstyled mode compatibility with Tailwind v4 passthrough approach. Verify components render correctly before building any UI
- R6. Extract Sanity project ID and dataset to environment variables. Create `.env.example` with required vars. Add root `.gitignore`
- R7. Configure Sanity CORS origins for localhost dev and document the need to add production origin before deploy
- R8. Set up Sanity preview/draft mode composable so the coach can preview unpublished content
- R9. Use `-` prefixed directories (e.g., `pages/blog/-components/`) instead of `pages:extend` hook for excluding page-specific components from routing
- R10. Use standard lazy-loaded components (`<LazyComponentName>`) instead of island components

### Sanity Content Model

- R11. Define an `article` schema: title, slug, excerpt, body (Portable Text), category reference, published date, featured image, SEO fields (meta title, meta description, OG image)
- R12. Define a `category` schema: title, slug, description
- R13. Define a `teachingPage` schema: title, slug, discipline (BJJ or Urban Kiz), methodology description (Portable Text), benefits list, booking CTA text, SEO fields
- R14. Define a `testimonial` schema: student name, discipline, quote, transformation narrative (before/after), duration, optional photo
- R15. Define an `event` schema: title, date, location, discipline, description, booking/registration link, capacity
- R16. Add reference fields across schemas linking to discipline and PCT concepts where appropriate (e.g., articles can reference a discipline and related testimonials)

### Pages and Navigation

- R17. **Global layout:** Header with navigation, footer with contact info and social links. Navigation includes: Home, BJJ, Dance, Blog, About, Contact, Portfolio
- R18. **Home page:** Hero section communicating the coach's value proposition (PCT-based coaching for BJJ and Urban Kiz). Feature sections for each discipline with CTAs to their pages. Recent testimonials. Recent blog posts
- R19. **BJJ page (`/bjj`):** Explain the PCT-based approach to BJJ. Display testimonials filtered to BJJ. Embed Calendly booking widget for BJJ sessions
- R20. **Dance page (`/dance`):** Same structure as BJJ page but for Urban Kiz. Separate Calendly event type for Kiz sessions
- R21. **Blog index (`/blog`):** List articles from Sanity, reverse-chronological. Filter by category. Each article shows title, excerpt, date, category, featured image
- R22. **Blog post (`/blog/[slug]`):** Render article body from Sanity Portable Text. Show category, date, author. Display related posts by category
- R23. **About page (`/about`):** Coach bio, methodology explanation, credentials. Content managed in Sanity or as a static page with editable sections
- R24. **Contact page (`/contact`):** Contact form (name, email, message). Display location, email, social links
- R25. **Portfolio page (`/portfolio`):** Web development portfolio showcasing projects and professional credentials. This serves the coach's developer career, not coaching — it should feel like a distinct section while sharing the site's design system

### Conversion Features

- R26. Embed Calendly booking widget on BJJ and Dance pages. Each discipline should use its own Calendly event type
- R27. Display testimonials on discipline pages (filtered by discipline) and on the home page
- R28. Every discipline page should have a clear CTA path: learn about method → read testimonials → book a session

### Design System

- R29. Base font size 18px. Typography scale: body 18px, h4 24px, h3 32px, h2 43px, h1 57px (1.333 ratio)
- R30. Tetradic color palette as Tailwind v4 CSS custom properties. Validate WCAG AA contrast for all foreground/background combinations before building UI. Document which pairings pass and which don't
- R31. Support `prefers-reduced-motion` with a global CSS rule that disables animations and transitions
- R32. Visual personality: classy but playful with a touch of whimsy. This should come through typography choices, color accent usage, and micro-interactions — not novelty UI patterns

### SEO and Accessibility

- R33. JSON-LD structured data for `Person` (the coach), `LocalBusiness`, `Article` (blog posts), and `Event` (workshops/events) using Nuxt's `useHead` or a schema.org composable
- R34. Meta tags and Open Graph data on every page. For Sanity-driven pages, pull from the document's SEO fields
- R35. Semantic HTML throughout. All interactive elements keyboard-accessible (PrimeVue unstyled provides this)

## Success Criteria

- The coach can publish a blog post in Sanity Studio and see it rendered on the site without developer intervention
- A visitor landing on the BJJ or Dance page can understand the coaching methodology and book a session within two clicks
- The site scores 90+ on Lighthouse for Performance, Accessibility, and SEO
- The portfolio page functions as a standalone web dev portfolio that an employer could review

## Scope Boundaries

- **In scope:** All requirements above (R1-R35)
- **Out of scope for MVP:**
  - Quiz / self-assessment feature (fast-follow)
  - Email capture / newsletter signup (fast-follow)
  - Automated social media distribution
  - Interactive PCT explainer component
  - Video technique library
  - Progressive content depth / perceptual layers
  - Content calendar in Sanity Studio
  - Custom Portable Text block types beyond standard rich text
- **Explicitly deferred:** Deployment platform choice. The site should be deployable to Vercel, Netlify, or any Node-compatible host

## Key Decisions

- **Single CMS:** Sanity only. Remove Nuxt Content to avoid split-brain content management
- **No island components:** Standard lazy-loaded Vue components are sufficient for a content site
- **No `pages:extend` hook:** Use Nuxt's `-` prefix convention for page-specific component directories
- **Tailwind v4 CSS-first:** No `tailwind.config.js`. Colors and typography defined via `@theme` in CSS
- **Booking via Calendly:** Embed on discipline pages with separate event types per discipline
- **Portfolio is for web dev career:** The `/portfolio` route serves a separate purpose from the coaching content but shares the site's design system
- **Blog is traditional:** Dated articles with categories, reverse-chronological. Not a concept-tagged teaching feed

## Dependencies / Assumptions

- Coach has (or will create) a Calendly account with separate event types for BJJ and Urban Kiz
- Sanity project `h11qkpwx` with dataset `production` is ready to use
- Coach will provide testimonial content, bio copy, and methodology descriptions for initial population
- Portfolio content (web dev projects) will be provided by the user

## Outstanding Questions

### Resolve Before Planning

- None — all product decisions resolved

### Deferred to Planning

- [Affects R5][Needs research] Verify PrimeVue 4.x unstyled mode works with Tailwind v4's CSS-first approach. May need a compatibility spike
- [Affects R4][Needs research] Determine whether to use `@nuxtjs/tailwindcss` module or Tailwind v4's native Vite plugin directly with Nuxt 4
- [Affects R8][Technical] Determine the best Sanity preview integration approach for Nuxt 4 (presentation tool vs. custom composable)
- [Affects R24][Technical] Decide whether contact form submits to a Nuxt server route, an external form service (Formspree, etc.), or email API
- [Affects R25][Technical] Decide whether portfolio content lives in Sanity or is hardcoded in the Vue template (given it serves a different audience)
- [Affects R30][Needs research] Run the tetradic palette through a contrast checker to identify failing pairs — gold (#F9ED6C) on white is likely to fail AA

## Next Steps

→ `/ce:plan` for structured implementation planning
