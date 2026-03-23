---
title: "feat: Rewrite home page with first-person voice and rename teaching routes"
type: feat
status: active
date: 2026-03-22
origin: docs/brainstorms/2026-03-22-tone-voice-rewrite-requirements.md
---

# feat: Rewrite Home Page Voice & Rename Teaching Routes

## Overview

The site currently reads like documentation about PCT rather than a personal coaching practice. This rewrites the home page with first-person "I/my" voice, adds a personal origin story section, includes a coach photo placeholder, and renames teaching routes from `/bjj` and `/dance` to `/teach/bjj` and `/teach/dance`.

## Problem Statement

Visitors should immediately understand they're on a person's coaching site, not an approach's documentation site. The coach's name should appear in the hero, the copy should use "I" and "my", and the methodology should be framed as a personal story. (see origin: `docs/brainstorms/2026-03-22-tone-voice-rewrite-requirements.md`)

## Acceptance Criteria

- [ ] R1. First-person "I/my" voice throughout the home page. Coach name pulled from `siteSettings.coachName`
- [ ] R2. Teaching routes changed to `/teach/bjj` and `/teach/dance`. All internal links, nav, routeRules updated
- [ ] R3. Hero: "Empowering Movement. Learning through Perception." + personal subhead + coach photo placeholder + CTAs
- [ ] R4. Two Disciplines section with first-person card copy
- [ ] R5. "Why PCT?" section with personal origin story and "Read the Blog" CTA
- [ ] R6. IRM teaser line between hero and disciplines (optional but included)
- [ ] R7. Blog preview: "Recent Articles" title, empty state "No posts yet. Check back soon!", "View All Posts" button
- [ ] R8. Coach photo placeholder in hero (styled div, replaced with real photo later)
- [ ] All 6 main routes return HTTP 200
- [ ] Old `/bjj` and `/dance` paths no longer resolve (or redirect)

## Key Decisions

- No island components — standard Vue components (see origin)
- Coach name from Sanity `siteSettings.coachName` (see origin)
- IRM = PCT (theory) + CLA (game design). Copy references all three naturally (see origin)
- Routes: `/teach/bjj` and `/teach/dance` — these are booking/service pages (see origin)

## Implementation Units

- [ ] **Unit 1: Rename teaching routes**

  **Goal:** Move page files from `(teaching)/` to `teach/` and update all references.

  **Files:**
  - Move: `app/pages/(teaching)/bjj.vue` → `app/pages/teach/bjj.vue`
  - Move: `app/pages/(teaching)/dance.vue` → `app/pages/teach/dance.vue`
  - Move: `app/pages/(teaching)/-components/*` → `app/pages/teach/-components/*`
  - Delete: `app/pages/(teaching)/` (empty after move)
  - Modify: `nuxt.config.ts` — update routeRules from `/bjj`, `/dance` to `/teach/bjj`, `/teach/dance`
  - Modify: `app/components/global/AppHeader.vue` — update navLinks array (2 entries)
  - Modify: `app/components/global/AppFooter.vue` — update 2 NuxtLink `to` attrs
  - Modify: `app/components/ui/DisciplineCTA.vue` — update computed link paths
  - Modify: `app/error.vue` — update 2 NuxtLink `to` attrs

  **Approach:**
  - Move files first, then update all route references
  - In `bjj.vue` and `dance.vue`, update the relative imports for `-components/` (paths stay the same since the components move with the pages)
  - Add redirect rules in routeRules for old paths: `"/bjj": { redirect: "/teach/bjj" }`, `"/dance": { redirect: "/teach/dance" }`

  **Verification:**
  - `/teach/bjj` and `/teach/dance` return HTTP 200
  - `/bjj` and `/dance` redirect to new paths
  - Navigation links point to `/teach/*`

---

- [ ] **Unit 2: Rewrite home page content**

  **Goal:** Replace the current home page with first-person voice, specific copy from the spec, coach photo placeholder, and IRM origin story.

  **Dependencies:** Unit 1 (links must point to new routes)

  **Files:**
  - Modify: `app/pages/index.vue` — full content rewrite

  **Approach:**

  The page should have these sections in order:

  1. **Hero** — Purple background. Left: headline "Empowering Movement. Learning through Perception.", subhead introducing coach by name (from `siteSettings.coachName`) with IRM/PCT/CLA explanation, two CTAs. Right: coach photo placeholder (styled div with initials or silhouette icon). Responsive: photo stacks below text on mobile.

  2. **IRM teaser** (R6) — A single centered line: "It's a four-step cycle that helps you rewire your instincts — and we'll use it in every session." Subtle, smaller text. Optional link to `/teach/bjj`.

  3. **Two Disciplines, One Framework** (R4) — Same heading. Two cards with first-person copy:
     - BJJ: "I help practitioners break through plateaus by learning to perceive and manage forces — no more memorizing moves that vanish under pressure."
     - Kiz: "I guide dancers to build authentic connection by understanding how perception shapes lead, follow, and musicality."

  4. **Why PCT?** (R5) — Personal story section: "I started teaching BJJ and dance the way I was taught — with techniques and patterns. But I saw students hit walls. Their skills didn't transfer. Then I discovered Perceptual Control Theory. It changed everything. Now I coach by designing environments where you solve problems, not copy moves. It's the same framework for the mat and the dance floor — because at its heart, it's about human connection, perception, and creativity." CTA: "Read the Blog" → `/blog`.

  5. **Testimonials** — Same as current (featured testimonials from Sanity, hidden when empty).

  6. **Recent Articles** (R7) — Title "Recent Articles". Up to 3 posts from Sanity. Empty state: "No posts yet. Check back soon!" Bottom: "View All Posts" → `/blog`.

  **Data fetching:** Same `homePageQuery` + `useSiteSettings()` for coach name. The hero subhead uses `settings.coachName`.

  **SEO:** Update `useSeoMeta` title to "Empowering Movement. Learning through Perception."

  **Verification:**
  - Coach name appears in hero (or graceful fallback when siteSettings not populated)
  - All copy uses first-person voice
  - All links point to `/teach/*` routes
  - Empty states handled for testimonials and blog posts
  - Photo placeholder renders on desktop (right side) and mobile (below text)

## Scope Boundaries

- Teaching page content rewrites are out of scope (separate pass)
- Blog, about, contact, portfolio page changes are out of scope
- Real coach photo is deferred — placeholder only

## Sources & References

- **Origin document:** [docs/brainstorms/2026-03-22-tone-voice-rewrite-requirements.md](docs/brainstorms/2026-03-22-tone-voice-rewrite-requirements.md)
- Current home page: `frontend/app/pages/index.vue`
- Teaching pages: `frontend/app/pages/(teaching)/`
- Route references: AppHeader, AppFooter, DisciplineCTA, error.vue, nuxt.config.ts
