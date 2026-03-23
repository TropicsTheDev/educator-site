---
date: 2026-03-22
topic: teaching-pages-rewrite
---

# Teaching Pages Content Rewrite

## Problem Frame

The teaching pages need to be rewritten with specific, provided copy that uses first-person voice and showcases the IRM coaching method. The pages should hardcode the content structure in the template while pulling dynamic data (testimonials, booking URLs) from Sanity. The event schema and UpcomingEvents component should be removed since they're not part of the teaching page content.

## Requirements

- R1. Rewrite `/teach/bjj` with the exact provided BJJ copy (hero, My Approach, 4-step IRM cycle, comparison table, practical details, CTAs)
- R2. Rewrite `/teach/dance` with the exact provided Urban Kiz copy (same structure, dance-specific content)
- R3. Keep DisciplineTestimonials section at the bottom of each teaching page (from Sanity)
- R4. Remove UpcomingEvents component from teaching pages
- R5. Remove the `event` schema from Sanity Studio entirely
- R6. Remove event-related GROQ queries from the teaching query module
- R7. "Book Your Session" button uses CalendlyButton with URL from siteSettings
- R8. "Not sure yet?" link points to /blog
- R9. Practical details (location, pricing, referral, group sessions, availability) hardcoded in template with placeholder venue names
- R10. 4-step IRM cycle presented as numbered cards or styled ordered list
- R11. "Why This Method Works" comparison styled as two-column layout

## Success Criteria

- Teaching pages use the exact provided copy
- First-person "I/my" voice throughout
- Testimonials still display from Sanity (hidden when empty)
- Booking CTA works via CalendlyButton
- No event-related code remains in the codebase
- Responsive on all devices

## Scope Boundaries

- **In scope:** teach/bjj.vue, teach/dance.vue rewrites, event removal, -components/ cleanup
- **Out of scope:** Home page changes, blog changes, Sanity teachingPage schema changes (the pages no longer pull page content from Sanity — just testimonials and siteSettings)

## Key Decisions

- Hardcode content structure in templates, Sanity for dynamic data only (testimonials, booking URLs)
- Remove events entirely (schema + component + queries)
- Keep testimonials on teaching pages
- The MethodologySection and BenefitsList components are superseded by the new hardcoded content

## Next Steps

→ `/ce:plan` for structured implementation planning
