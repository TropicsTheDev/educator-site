---
date: 2026-05-01
topic: fun-informative-enhancements
focus: fun while still being informative
mode: repo-grounded
---

# Ideation: Fun and Informative Enhancements

## Grounding Context

### Codebase Context
- **Stack:** Nuxt 4, Sanity Studio v3, PrimeVue (unstyled), Tailwind CSS 4.
- **Identity:** Coach teaching BJJ and Urban Kiz through Perceptual Control Theory (PCT) and the Constraints-Led Approach (CLA).
- **Strategy:** Discipline-centric navigation; theory as the "how" (UVP); conversion-focused (Calendly).
- **UI:** "Classy but Playful" (typography, color accents, micro-interactions).

### External Context
- **Gamification:** Skill Trees (8BitJJ), XP for training logs, "Character Sheets".
- **Interactivity:** Active Recall Quizzes (Submeta), Branching Video (Choose Your Own Adventure), Affordance Heatmaps.
- **CLA/PCT Patterns:** "Constraints Builders" (sliders for space/tempo), "Tracking Tasks" (PCT-based interactive demos), "Disturbance Sliders" (injecting noise into movement simulations).

## Ranked Ideas

### 1. The Perceptual Skill Tree (RPG Progression)
**Description:** A visual, interactive map that replaces the standard blog archive. Students "unlock" nodes based on perceptual mastery (e.g., "Connection Sensitivity", "Posture Maintenance") rather than just technique names.
**Warrant:** `external: 8BitJJ RPG-style skill trees; reasoned: PCT is about internal state control, making a "Character Sheet" more accurate than a "Technique Library".`
**Rationale:** Makes invisible progress visible and provides a gamified "Quest" for learning.
**Downsides:** Complexity in visual state management; requires clear dependency mapping for all content.
**Confidence:** 90%
**Complexity:** Medium
**Status:** Unexplored

### 2. The "Constraint Lab" Generator
**Description:** A mobile-optimized tool where users input their discipline, position, and goal. The engine generates a specific "Constraint-Led" game (e.g., "BJJ: Guard, Objective: Sweep, Constraint: No use of hands").
**Warrant:** `external: BJJ Concepts "Mini-Games"; direct: CLA (Constraints-Led Approach) is the core pedagogy.`
**Rationale:** Moves the site from passive reading to active training utility, especially *on the mat*.
**Downsides:** Needs a robust logic engine to ensure games are safe and effective.
**Confidence:** 95%
**Complexity:** Medium
**Status:** Unexplored

### 3. The "Problem-First" Pathmaker (CYOA)
**Description:** A branching "Choose Your Own Adventure" entry point. Instead of "Browse BJJ", the user sees "What's going wrong?". Options like "I'm getting smashed" or "I feel heavy" lead to tailored theory and drills.
**Warrant:** `reasoned: Students start with pain, not theory. This mirrors a real coaching diagnostic.`
**Rationale:** Direct path to conversion; high relevance/utility.
**Downsides:** Risk of "dead ends" if the content library doesn't cover all pain points yet.
**Confidence:** 95%
**Complexity:** Low
**Status:** Unexplored

### 4. The "On-the-Mat" Minimalist HUD
**Description:** A dedicated "Training Mode" for the site. Large type, high contrast, zero-scroll, voice-activated "Next". Designed for a phone leaning against a gym wall.
**Warrant:** `reasoned: Most coaching sites are unusable during physical training.`
**Rationale:** Makes the site an indispensable part of the training habit.
**Downsides:** Mobile browser limitations (voice control, wake lock).
**Confidence:** 90%
**Complexity:** Low
**Status:** Unexplored

### 5. Affordance Heatmaps & Signal Gauges
**Description:** Interactive overlays on videos and images. "Affordance Heatmaps" highlight gaps or opportunities for movement. "Signal Gauges" use dials and bars to visualize abstract connection quality (tension/compression).
**Warrant:** `external: Submeta Active Recall; reasoned: Making invisible sensations visible is the primary challenge of movement pedagogy.`
**Rationale:** Makes the "informative" parts tactile and playful.
**Downsides:** Requires custom SVG/CSS work per-video/image; high authoring effort.
**Confidence:** 85%
**Complexity:** High
**Status:** Unexplored

### 6. The "Disturbance Slider" Content Mode
**Description:** A UI slider on lesson pages that toggles complexity level. At 0 (Laboratory), it shows isolated mechanics. At 10 (Chaos/Wild), it shows high-resistance footage and advice on managing disturbances.
**Warrant:** `external: Disturbance Sliders in PCT-Labs; reasoned: Teaches "Reorganization" (learning through error) by letting users see the same move under different stress levels.`
**Rationale:** One piece of content serves both beginners and advanced students; interactive "chaos" is fun.
**Downsides:** Requires capturing/editing multiple versions of footage for each technique.
**Confidence:** 80%
**Complexity:** Medium
**Status:** Unexplored

### 7. The "In-Ear" Proprioception Lab
**Description:** Audio-only guided drills designed for solo practice. Focuses on internal sensing (e.g., "Feel the weight shift in your heels") rather than watching a screen.
**Warrant:** `reasoned: PCT focuses on internal reference signals. Closing your eyes increases proprioceptive feedback.`
**Rationale:** Removes the "stuck to the screen" friction of online learning.
**Downsides:** Harder to market (no flashy video); requires high-quality audio scripts.
**Confidence:** 85%
**Complexity:** Low
**Status:** Unexplored

## Rejection Summary

| # | Idea | Reason Rejected |
|---|------|-----------------|
| 1 | Methodology-first IA | Visitors search for disciplines, not theoretical frameworks. |
| 2 | Complex "Error Signal" forms | Increases cognitive load and hurts conversion at the contact point. |
| 3 | Systems theory widgets | Rejection of "interactive control loops" as they are too academic for a coaching site. |
| 4 | 3D Model Pose Feedback | Too high complexity for MVP compared to SVG heatmaps. |
| 5 | Live Sparring Analysis | Better handled via 1-on-1 coaching; too expensive for a general feature. |
| 6 | Social distribution pipeline | Unrelated to "fun/informative" core; handled by external apps. |
