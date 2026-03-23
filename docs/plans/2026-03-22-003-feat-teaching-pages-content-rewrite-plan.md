---
title: "feat: Rewrite teaching pages with IRM content and remove events"
type: feat
status: active
date: 2026-03-22
origin: docs/brainstorms/2026-03-22-teaching-pages-rewrite-requirements.md
---

# feat: Rewrite Teaching Pages with IRM Content & Remove Events

## Overview

Replace the current Sanity-driven teaching page content with hardcoded first-person copy showcasing the Iterative Reorganization Method. Remove the event schema and component since events are not part of the teaching page content. Keep testimonials and booking CTAs as the only dynamic Sanity-driven elements.

## Acceptance Criteria

- [ ] R1. `/teach/bjj` displays the exact provided BJJ copy
- [ ] R2. `/teach/dance` displays the exact provided Urban Kiz copy
- [ ] R3. Testimonials section remains at bottom, hidden when empty
- [ ] R4. UpcomingEvents component removed
- [ ] R5. `event` schema removed from Sanity Studio
- [ ] R6. Event GROQ queries removed from teaching.queries.ts
- [ ] R7. "Book Your Session" uses UiCalendlyButton with URL from siteSettings
- [ ] R8. "Not sure yet?" links to /blog
- [ ] R9. Practical details hardcoded with placeholder venue names
- [ ] R10. 4-step IRM cycle as numbered cards
- [ ] R11. Comparison table as two-column layout
- [ ] R12. Responsive on all devices
- [ ] R13. MethodologySection and BenefitsList components removed (superseded)

## Implementation Units

- [ ] **Unit 1: Remove event schema and clean up**

  **Files:**
  - Delete: `studio/schemaTypes/event.ts`
  - Modify: `studio/schemaTypes/index.ts` — remove event import and registration
  - Delete: `frontend/app/pages/teach/-components/UpcomingEvents.vue`
  - Delete: `frontend/app/pages/teach/-components/MethodologySection.vue`
  - Delete: `frontend/app/pages/teach/-components/BenefitsList.vue`
  - Modify: `frontend/app/queries/teaching.queries.ts` — remove events from GROQ query

  **Approach:**
  - Remove the event import and array entry from `studio/schemaTypes/index.ts`
  - Delete the event schema file
  - Delete the three superseded components (UpcomingEvents, MethodologySection, BenefitsList)
  - Update `teachingPageQuery` to only fetch testimonials (no events)

---

- [ ] **Unit 2: Rewrite bjj.vue**

  **Dependencies:** Unit 1

  **Files:**
  - Modify: `frontend/app/pages/teach/bjj.vue` — full content rewrite

  **Approach:**
  - Remove imports for deleted components (MethodologySection, BenefitsList, UpcomingEvents)
  - Keep import for DisciplineTestimonials
  - Fetch testimonials via simplified teachingPageQuery and siteSettings for Calendly URL
  - Hardcode the exact BJJ copy in the template with these sections:
    1. Hero: "Feeling Stuck on the Mats?" headline, subhead copy, purple background
    2. "My Approach" prose section
    3. "How We Learn Together" — 4 numbered cards for the IRM cycle steps
    4. "Why This Method Works" — two-column comparison (green checkmarks vs crossed-out items)
    5. "Practical Details" — styled list with location placeholder, $45/hour, referral discount, group sessions, availability
    6. UiCalendlyButton "Book Your Session" + "Not sure yet?" link to /blog
    7. DisciplineTestimonials at the bottom

---

- [ ] **Unit 3: Rewrite dance.vue**

  **Dependencies:** Unit 1

  **Files:**
  - Modify: `frontend/app/pages/teach/dance.vue` — full content rewrite

  **Approach:**
  - Same structure as bjj.vue but with the dance-specific copy
  - Hero: "Feel the Music, Trust the Connection, Find Your Flow."
  - All IRM cycle steps use dance-specific language
  - Comparison table uses dance-specific outcomes
  - Practical details include "Perfect for couples or practice groups" note

## Sources

- **Origin document:** [docs/brainstorms/2026-03-22-teaching-pages-rewrite-requirements.md](docs/brainstorms/2026-03-22-teaching-pages-rewrite-requirements.md)
- Current teaching pages: `frontend/app/pages/teach/bjj.vue`, `frontend/app/pages/teach/dance.vue`
- Event schema: `studio/schemaTypes/event.ts`
- Teaching queries: `frontend/app/queries/teaching.queries.ts`
