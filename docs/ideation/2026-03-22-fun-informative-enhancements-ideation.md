---
date: 2026-03-22
topic: fun-informative-enhancements
focus: enhancements to make it fun while still being informative
mode: repo-grounded
---

# Ideation: Fun and Informative Movement Enhancements

## Codebase Context
- **Stack:** Nuxt 4, Sanity Studio v3, PrimeVue (unstyled), Tailwind CSS 4.
- **Identity:** BJJ & Urban Kiz coach using Perceptual Control Theory (PCT) and Iterative Reorganization Method (IRM).
- **Strategy:** Discipline-centric navigation; "Theory as the how"; conversion-focused (Calendly).
- **UI:** "Classy but Playful" (dark theme, royal colors, glow effects).

## Grounding Summary
The site focuses on movement arts through a perceptual lens. The primary learner pains identified are memorization fatigue, the "seeing vs. feeling" gap, and the difficulty of translating abstract theory into live practice. These ideas aim to make the site "alive" and interactive while reinforcing the core methodology.

## Ranked Ideas

### 1. The Constraint Engine (Interactive Generator)
**Description:** A playful tool that generates random or curated "training games" (constraints). Users can select their discipline and level to get a focus for their next live session (e.g., "One-arm BJJ", "No-grip Kiz").
**Warrant:** `reasoned:` PCT and CLA (Ecological Dynamics) emphasize learning through constraints. Pain: Students often feel aimless in live training or fall back on "A-game" habits.
**Rationale:** Transforms a static teaching page into a "training partner" that provides immediate, actionable focus.
**Downsides:** Requires careful curation for safety and productivity.
**Confidence:** 90%
**Complexity:** Medium
**Status:** Unexplored

### 2. The Affordance Map (Heatmap Overlay)
**Description:** An interactive component for photos/videos. Hovering over specific points reveals "perceptual cues"—what the practitioner should be *feeling* or *looking for* in that moment.
**Warrant:** `direct:` Current teaching pages are text-heavy and fail to address the "I see it but I don't feel it" problem.
**Rationale:** Bridges the gap between external observation and internal perception, the core of the coach's strategy.
**Downsides:** Content-heavy; requires high-quality photography/video.
**Confidence:** 85%
**Complexity:** Medium
**Status:** Unexplored

### 3. The Plateau-Buster Quiz (Diagnostic Router)
**Description:** A 3-question playful quiz that identifies whether a student's friction is perceptual, control-based, or environmental, then routes them to a specific article or session type.
**Warrant:** `external:` 8BitJJ uses skill trees; this provides a "diagnostic" entry point to complex content.
**Rationale:** Acts as a fun, conversion-focused router that directs users to Calendly or the Blog.
**Downsides:** Risk of feeling gimmicky if results aren't insightful.
**Confidence:** 95%
**Complexity:** Low
**Status:** Unexplored

### 4. The "Find the Leak" Interactive Trainer
**Description:** A "spot the error" game. Users click on the "leak" in a pose (e.g., too much space in a choke). Correct answers provide immediate PCT-grounded feedback.
**Warrant:** `reasoned:` Perception is a trainable skill. Pain: Most online movement learning is passive consumption.
**Rationale:** Gamifies the learning process and directly builds the skill of perception.
**Downsides:** Requires a large library of examples.
**Confidence:** 85%
**Complexity:** Medium
**Status:** Unexplored

### 5. The Disturbance Slider (PCT Visualizer)
**Description:** An interactive animation showing a "Reference State." Users move a "Disturbance" slider to see how the practitioner graphic adapts to maintain balance/connection.
**Warrant:** `reasoned:` This is the literal definition of Perceptual Control. Pain: Explaining PCT is hard; seeing it is easy.
**Rationale:** Makes the abstract "how" of the site's strategy tangible and fun.
**Downsides:** High design effort to maintain the "Classy" aesthetic.
**Confidence:** 80%
**Complexity:** High
**Status:** Unexplored

### 6. The Perceptual Skill Tree (Visual IA)
**Description:** A visual, interactive map of perceptual skills (e.g., "Weight Sensing" -> "Balance Disruption") instead of a flat list of techniques.
**Warrant:** `external:` Submeta uses non-linear paths. Pain: Technique lists are overwhelming and obscure the shared roots of different disciplines.
**Rationale:** Fulfills the "Discipline-centric navigation" strategy with a "game-like" layer.
**Downsides:** High architectural complexity for Sanity and Nuxt.
**Confidence:** 75%
**Complexity:** High
**Status:** Unexplored

### 7. The "Theory Decoder" (Interactive Glossary)
**Description:** Subtle, playful tooltips on technical terms (PCT, IRM, Reference State) providing funny, plain-English explanations.
**Warrant:** `external:` "The Coding Train" uses playful sidebars for math concepts.
**Rationale:** Reduces the intimidation factor of a "Methodology-first" site.
**Downsides:** Can be annoying if overused.
**Confidence:** 100%
**Complexity:** Low
**Status:** Unexplored

## Rejection Summary

| # | Idea | Reason Rejected |
|---|------|-----------------|
| 1 | AI Pose Feedback | Too expensive and prone to "AI slop" errors; doesn't match the "Classy" vibe. |
| 2 | "Vibe" Booking Selector | Below ambition floor; better handled as a simple form field. |
| 3 | Disturbance Audio | Too annoying; audio-based "fun" is high-friction for web users. |
