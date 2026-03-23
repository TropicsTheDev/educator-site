<script setup lang="ts">
import DisciplineTestimonials from './-components/DisciplineTestimonials.vue'
import IrmCycle from './-components/IrmCycle.vue'
import ComparisonList from './-components/ComparisonList.vue'
import { teachingTestimonialsQuery } from '~/queries/teaching.queries'

const { data: testimonials } = useSanityQuery(teachingTestimonialsQuery, { discipline: 'bjj' })
const { data: settings } = useSiteSettings()

const calendlyUrl = computed(() => settings.value?.calendlyBjjUrl || '')

const irmSteps = [
  {
    stepNumber: 1,
    title: 'We Start with a Task-Based Game',
    description: 'No lecture. No demonstration. We begin with a specific, live scenario — a game that highlights exactly where you feel stuck. Maybe it\'s maintaining guard while your partner tries to pass with a specific constraint. Maybe it\'s escaping a bad position with limited grips.',
    aside: 'This isn\'t about failure. It\'s about creating an honest starting point so we know precisely what we\'re solving together.',
  },
  {
    stepNumber: 2,
    title: 'We Explore Your Experience',
    description: 'We pause and reflect. I\'ll ask: What did you feel? What were you trying to do? What stopped you? This step builds awareness. It helps us move from "I got passed" to understanding the deeper cues and sensations that led there. And awareness, as you\'ll discover, is the first step to gaining control.',
  },
  {
    stepNumber: 3,
    title: 'We Introduce a Clear, Useful Tool',
    description: 'With the real problem identified, I offer a focused "anchor" — a principle, a detail, or a short sequence. This isn\'t a rigid rule to obey forever. It\'s a testable tool, a new option for your toolkit to try against the very problem you just faced.',
  },
  {
    stepNumber: 4,
    title: 'We Integrate and Rebuild Together',
    description: 'You immediately return to the task-based game, now with the new tool. The goal isn\'t perfection — it\'s discovery. Does this help you control the situation better? Does it create the feeling you were missing? We repeat this cycle, refining your skill in the context where it must work: under pressure.',
  },
]

const comparisonItems = [
  { positive: 'Real, transferable skill that works on any partner', negative: 'Techniques that only work in drilling' },
  { positive: 'The ability to coach yourself long after our sessions', negative: 'Dependence on someone else\'s instruction' },
  { positive: 'Clearer understanding of Jiu-Jitsu\'s underlying "feel"', negative: 'A collection of memorized steps' },
  { positive: 'Engagement and curiosity in every roll', negative: 'Frustration and stagnation' },
]

useSeoMeta({
  title: "BJJ Coaching — Feeling Stuck on the Mats? Let's Build Your Game Together.",
  description: 'I coach Brazilian Jiu-Jitsu using Perceptual Control Theory and the Iterative Reorganization Method. Break through plateaus by learning to solve problems, not memorize moves.',
  ogTitle: "BJJ Coaching — Let's Build Your Game Together",
  ogDescription: 'Break through plateaus with PCT-based BJJ coaching.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="hero-glow bg-gradient-to-br from-royal-green/15 via-surface-base to-surface-base text-text-on-dark py-24 md:py-32" style="--glow-color: rgba(73, 170, 131, 0.08)">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Feeling Stuck on the Mats?<br />Let's Build Your Game Together.
        </h1>
        <p class="text-lg text-text-on-dark-muted leading-relaxed max-w-3xl mx-auto">
          You're hitting the same plateaus. Techniques that work in drilling fall apart against resistance.
          You know what to do, but not how to make it work when it matters.
        </p>
      </div>
    </section>

    <!-- Intro — pull quote -->
    <section class="py-10 md:py-14">
      <div class="max-w-2xl mx-auto px-4 text-center">
        <div class="w-16 h-0.5 bg-royal-gold/40 rounded-full mx-auto mb-6" />
        <p class="text-lg md:text-xl text-text-on-dark italic leading-relaxed">
          You're not alone — and more important, you're not broken. Traditional Jiu-Jitsu teaching
          often leaves you collecting moves instead of developing real, adaptable skill. My coaching
          takes a different path.
        </p>
        <div class="w-16 h-0.5 bg-royal-gold/40 rounded-full mx-auto mt-6" />
      </div>
    </section>

    <!-- My Approach -->
    <section class="py-14 md:py-16 bg-surface-raised/30">
      <div class="max-w-3xl mx-auto px-4">
        <UiSectionHeading
          title="My Approach: Skill Through Problem-Solving, Not Memorization"
        />
        <div class="prose prose-lg max-w-none">
          <p>
            True Jiu-Jitsu intelligence isn't built by accumulating techniques. It's built by learning
            how to solve problems in real time — against unpredictable partners who are solving problems
            right back at you.
          </p>
          <p>
            I provide a supportive, focused space where we explore your game together, understand the
            real challenges beneath your frustrations, and create a clear path forward. You're not just
            receiving information; we're working as a team to rewire your instincts.
          </p>
        </div>
      </div>
    </section>

    <div class="section-divider my-4" />

    <!-- IRM Cycle -->
    <section class="py-20 md:py-24">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading
          title="How We Learn Together: The Iterative Reorganization Method"
          subtitle="Think of our sessions as a collaborative cycle — moving from struggle to insight, and from insight to integrated skill. Each lesson follows the same four-step rhythm:"
        />

        <div class="mt-8">
          <IrmCycle :steps="irmSteps" discipline="bjj" />
        </div>
      </div>
    </section>

    <!-- Why This Method Works -->
    <section class="py-16 md:py-20 bg-surface-raised/30">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading title="Why This Method Works" centered />

        <div class="mt-8">
          <ComparisonList :items="comparisonItems" discipline="bjj" />
        </div>

        <p class="mt-8 text-text-on-dark text-center max-w-2xl mx-auto leading-relaxed">
          You don't have to figure it out alone. My role is to guide you through this cycle — to see
          what you can't yet see, and to help you discover solutions that fit your body and your game.
        </p>
      </div>
    </section>

    <!-- Practical Details -->
    <section class="py-14">
      <div class="max-w-3xl mx-auto px-4">
        <UiSectionHeading title="Practical Details" />
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="text-royal-green font-bold mt-0.5">Location</span>
            <p class="text-text-on-dark-muted">[Your gym/venue name] <span class="text-sm italic">(Additional charges apply if the venue charges a mat fee)</span></p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-green font-bold mt-0.5">Pricing</span>
            <p class="text-text-on-dark-muted">$45/hour via Venmo, CashApp, Zelle, or cash</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-green font-bold mt-0.5">Referral&nbsp;Discount</span>
            <p class="text-text-on-dark-muted">Refer a student, and you'll get $10 off your next session.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-green font-bold mt-0.5">Group&nbsp;Sessions</span>
            <p class="text-text-on-dark-muted">Bring up to 3 friends and split the session! <span class="text-sm italic">(Only one referral discount can be applied per session.)</span></p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-green font-bold mt-0.5">Availability</span>
            <p class="text-text-on-dark-muted">My calendar reflects the next 7 days. New slots open weekly.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 md:py-20 bg-surface-raised/30">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <UiCalendlyButton
          v-if="calendlyUrl"
          :calendly-url="calendlyUrl"
          label="Book Your Session"
        />
        <p class="mt-6 text-text-on-dark-muted">
          Not sure yet?
          <NuxtLink to="/blog" class="text-royal-gold hover:underline">
            Read my blog posts about PCT and BJJ &rarr;
          </NuxtLink>
        </p>
      </div>
    </section>

    <!-- Testimonials -->
    <DisciplineTestimonials :testimonials="testimonials || []" />
  </div>
</template>
