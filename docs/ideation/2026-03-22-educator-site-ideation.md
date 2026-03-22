---
date: 2026-03-22
topic: educator-site-scaffolding
focus: Nuxt 4 + PrimeVue + Tailwind + Sanity site for BJJ/Kiz coach using PCT
---

# Ideation: Educator Site Scaffolding

## Codebase Context

- **Stack:** Nuxt 4 (from Content starter) + PrimeVue (unstyled, misconfigured) + Sanity Studio (empty schemas)
- **State:** Early scaffolding with structural issues: double-nested `backend/backend/`, PrimeVue deps in wrong package.json, Tailwind not installed, `@nuxt/content` and Sanity both present (competing CMS), no monorepo config
- **Identity:** Personal brand for a coach teaching BJJ and Urban Kiz through PCT methodology. Also serves as a web dev portfolio
- **Past learnings:** None (greenfield project, no `docs/solutions/` directory)

## Ranked Ideas

### 1. Fix the Scaffolding Foundation
**Description:** Flatten backend nesting, fix misplaced deps, consolidate on Sanity, set up Tailwind v4 CSS-first config, resolve PrimeVue+Tailwind v4 compatibility, extract env vars + preview mode
**Rationale:** Every minute of UI work on the broken foundation will be redone
**Downsides:** Delays visible features. PrimeVue+Tailwind v4 spike may reveal issues
**Confidence:** 95%
**Complexity:** Medium
**Status:** Explored (brainstormed 2026-03-22)

### 2. Structured PCT-Aware Sanity Schemas
**Description:** Design schemas with cross-referencing by discipline and PCT concept from day one
**Rationale:** Empty schemaTypes array is a once-in-a-project opportunity. Can't restructure after 50 posts
**Downsides:** Risk of over-engineering for content that never gets created
**Confidence:** 85%
**Complexity:** Medium
**Status:** Explored (brainstormed 2026-03-22)

### 3. Booking Integration (Calendly)
**Description:** Embed Calendly on discipline pages with separate event types per discipline
**Rationale:** A coaching site without booking is a brochure. #1 conversion priority
**Downsides:** Requires Calendly account setup. Embeds can be slow
**Confidence:** 95%
**Complexity:** Low
**Status:** Explored (brainstormed 2026-03-22)

### 4. Testimonial / Transformation Stories
**Description:** Structured narrative content type in Sanity (before/after, duration, discipline)
**Rationale:** Highest-ROI content for coaching conversion. Three good stories > 10 pages of methodology
**Downsides:** Requires actual testimonials from real students
**Confidence:** 90%
**Complexity:** Low
**Status:** Explored (brainstormed 2026-03-22)

### 5. Simplify Architecture Assumptions
**Description:** Use `-` prefix convention instead of pages:extend hook. Skip island components for lazy-loaded standard components
**Rationale:** Removes runtime complexity. Islands solve a problem this site doesn't have
**Downsides:** Loses spec's folder aesthetics. If site becomes highly dynamic, islands would need re-adding
**Confidence:** 85%
**Complexity:** Low
**Status:** Explored (brainstormed 2026-03-22)

### 6. Quiz-Driven Email Capture
**Description:** Short self-assessment quiz as lead magnet + email capture
**Rationale:** Quizzes convert. Segments list by discipline interest
**Downsides:** State management for multi-step forms. Content authoring required
**Confidence:** 70%
**Complexity:** Medium
**Status:** Unexplored (deferred to fast-follow)

### 7. SEO + Accessibility Foundation
**Description:** JSON-LD for key types, WCAG contrast pairs, reduced-motion, preview deploys
**Rationale:** SEO compounds. Accessibility is non-negotiable. Cheap at scaffolding time
**Downsides:** Gold (#F9ED6C) likely fails contrast on white
**Confidence:** 85%
**Complexity:** Low
**Status:** Explored (brainstormed 2026-03-22)

## Rejection Summary

| # | Idea | Reason Rejected |
|---|------|-----------------|
| 1 | Methodology-first IA | Visitors think in disciplines, not PCT theory |
| 2 | Drop PrimeVue entirely | Lose free accessibility (ARIA, keyboard nav) |
| 3 | Use Nuxt Content instead of Sanity | Two CMS = build everything twice |
| 4 | Turborepo + shared types package | Over-engineered for 2 packages |
| 5 | Custom Portable Text renderer | Premature; launch with standard rich text |
| 6 | Progressive depth / Perceptual Layers | Triples authoring burden per piece |
| 7 | Pattern Bridges (interactive cross-discipline) | Unbuildable before launch |
| 8 | Interactive PCT control loop | Nobody wants a systems theory widget |
| 9 | Video-annotated technique library | Content treadmill; undermines paid coaching |
| 10 | Reorganization design system | "Surprises" increase cognitive load on conversion site |
| 11 | Adaptive UI control system | Research project, not a website feature |
| 12 | Social distribution pipeline | Use Buffer/Typefully instead |
| 13 | Error Signal contact flow | Multi-step PCT quiz to send email; 3-field form converts better |
| 14 | Dissolve blog into teaching feed | Functionally identical to blog with categories |
| 15 | pnpm workspace root | Root package.json with filter scripts suffices |
| 16 | Nuxt Content → Sanity migration | Moot; consolidate on Sanity immediately |

## Session Log
- 2026-03-22: Initial ideation — ~37 candidates generated across 5 frames, 7 survived adversarial filtering
- 2026-03-22: Ideas 1-5, 7 explored via brainstorm. Idea 6 deferred to fast-follow. Requirements doc written
