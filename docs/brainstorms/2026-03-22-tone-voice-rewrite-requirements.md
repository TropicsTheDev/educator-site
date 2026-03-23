---
date: 2026-03-22
topic: tone-voice-rewrite
---

# Home Page Tone & Voice Rewrite

## Problem Frame

The current site copy reads as if it's about the PCT approach itself rather than the coach as a person who uses that approach. The site needs a first-person voice ("I" and "my") that introduces the coach by name and tells their personal story of discovering IRM/PCT/CLA.

## Requirements

- R1. **First-person voice throughout:** Use "I" and "my" in all site copy. The coach introduces themselves by name (from Sanity `siteSettings.coachName`).

- R2. **Route change:** Rename teaching page routes from `/bjj` and `/dance` to `/teach/bjj` and `/teach/dance`. Update all internal links, navigation, routeRules, and DisciplineCTA references.

- R3. **Hero section rewrite:** Headline "Empowering Movement. Learning through Perception." Subhead introduces the coach by name and explains IRM/PCT/CLA. Include a coach photo placeholder (positioned right on desktop, below on mobile). CTAs: "Explore BJJ" → `/teach/bjj`, "Explore Urban Kiz" → `/teach/dance`.

- R4. **Two Disciplines section:** Heading "Two Disciplines, One Framework" with subheading. Two cards with first-person descriptions:
  - BJJ: "I help practitioners break through plateaus by learning to perceive and manage forces — no more memorizing moves that vanish under pressure."
  - Urban Kiz: "I guide dancers to build authentic connection by understanding how perception shapes lead, follow, and musicality."

- R5. **Why PCT/IRM section (new):** Personal story about discovering PCT and how it changed the coaching approach. Copy: "I started teaching BJJ and dance the way I was taught — with techniques and patterns. But I saw students hit walls..." CTA: "Read the Blog" → `/blog`.

- R6. **Optional IRM teaser:** Between hero and disciplines, a short line: "It's a four-step cycle that helps you rewire your instincts — and we'll use it in every session." with subtle link to `/teach/bjj` or `/teach/dance`.

- R7. **Blog preview section:** Title "Recent Articles". Up to 3 posts. Empty state: "No posts yet. Check back soon!" Bottom button: "View All Posts" → `/blog`.

- R8. **Coach photo placeholder:** Add a placeholder image at `app/assets/images/coach-photo-placeholder.jpg` (or use a styled div placeholder) for the hero. The real photo will be added later.

## Success Criteria

- A visitor immediately understands this is a person's coaching practice, not a methodology documentation site
- The coach's name appears in the hero within 5 seconds of landing
- First-person "I/my" voice is used consistently across the home page
- All links to teaching pages use `/teach/bjj` and `/teach/dance`
- The "Why PCT?" section tells a personal story, not an academic explanation

## Scope Boundaries

- **In scope:** Home page rewrite, route rename, navigation updates, routeRules updates
- **Out of scope:** Teaching page content rewrites (those will be a separate pass), blog page changes, about/contact/portfolio changes

## Key Decisions

- **No island components:** Keep standard Vue components (per user preference)
- **Coach name from Sanity:** Pull from `siteSettings.coachName`, not hardcoded
- **IRM framing:** The Iterative Reorganization Method integrates PCT (theory) + CLA (game design). The copy should reference all three naturally
- **Routes:** `/teach/bjj` and `/teach/dance` (not `/bjj` and `/dance`) — these are booking/service pages

## Dependencies / Assumptions

- `siteSettings` Sanity schema already has `coachName` field
- Coach will provide a real photo later; placeholder for now

## Outstanding Questions

### Resolve Before Planning

- None

### Deferred to Planning

- [Affects R2][Technical] Update routeRules in nuxt.config.ts for new /teach/* paths
- [Affects R2][Technical] Ensure prerender rules still apply to new paths

## Next Steps

→ `/ce:plan` for structured implementation planning
