<script setup lang="ts">
import DisciplineTestimonials from './-components/DisciplineTestimonials.vue'
import { teachingTestimonialsQuery } from '~/queries/teaching.queries'

const { data: testimonials } = useSanityQuery(teachingTestimonialsQuery, { discipline: 'bjj' })
const { data: settings } = useSiteSettings()

const calendlyUrl = computed(() => settings.value?.calendlyBjjUrl || '')

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
    <section class="bg-royal-purple text-white py-20 md:py-28">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Feeling Stuck on the Mats?<br />Let's Build Your Game Together.
        </h1>
        <p class="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto">
          You're hitting the same plateaus. Techniques that work in drilling fall apart against resistance.
          You know what to do, but not how to make it work when it matters.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-4 prose prose-lg max-w-none">
        <p>
          You're not alone — and more important, you're not broken. Traditional Jiu-Jitsu teaching
          often leaves you collecting moves instead of developing real, adaptable skill. My coaching
          takes a different path.
        </p>
      </div>
    </section>

    <!-- My Approach -->
    <section class="py-16 bg-surface-light">
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

    <!-- IRM Cycle -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading
          title="How We Learn Together: The Iterative Reorganization Method"
          subtitle="Think of our sessions as a collaborative cycle — moving from struggle to insight, and from insight to integrated skill. Each lesson follows the same four-step rhythm:"
        />

        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <!-- Step 1 -->
          <div class="bg-white rounded-lg p-6 shadow-sm border border-royal-purple/10">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-10 h-10 rounded-full bg-royal-purple text-white flex items-center justify-center font-bold text-lg">1</span>
              <h3 class="text-lg font-bold text-text-primary">We Start with a Task-Based Game</h3>
            </div>
            <p class="text-text-secondary leading-relaxed">
              No lecture. No demonstration. We begin with a specific, live scenario — a game that highlights
              exactly where you feel stuck. Maybe it's maintaining guard while your partner tries to pass
              with a specific constraint. Maybe it's escaping a bad position with limited grips.
            </p>
            <p class="text-text-secondary leading-relaxed mt-3 italic text-sm">
              This isn't about failure. It's about creating an honest starting point so we know precisely
              what we're solving together.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="bg-white rounded-lg p-6 shadow-sm border border-royal-purple/10">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-10 h-10 rounded-full bg-royal-purple text-white flex items-center justify-center font-bold text-lg">2</span>
              <h3 class="text-lg font-bold text-text-primary">We Explore Your Experience</h3>
            </div>
            <p class="text-text-secondary leading-relaxed">
              We pause and reflect. I'll ask: <em>What did you feel? What were you trying to do? What stopped you?</em>
            </p>
            <p class="text-text-secondary leading-relaxed mt-3">
              This step builds awareness. It helps us move from "I got passed" to understanding the deeper
              cues and sensations that led there. And awareness, as you'll discover, is the first step to
              gaining control.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="bg-white rounded-lg p-6 shadow-sm border border-royal-purple/10">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-10 h-10 rounded-full bg-royal-purple text-white flex items-center justify-center font-bold text-lg">3</span>
              <h3 class="text-lg font-bold text-text-primary">We Introduce a Clear, Useful Tool</h3>
            </div>
            <p class="text-text-secondary leading-relaxed">
              With the real problem identified, I offer a focused "anchor" — a principle, a detail, or a short
              sequence. This isn't a rigid rule to obey forever. It's a testable tool, a new option for your
              toolkit to try against the very problem you just faced.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="bg-white rounded-lg p-6 shadow-sm border border-royal-purple/10">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-10 h-10 rounded-full bg-royal-purple text-white flex items-center justify-center font-bold text-lg">4</span>
              <h3 class="text-lg font-bold text-text-primary">We Integrate and Rebuild Together</h3>
            </div>
            <p class="text-text-secondary leading-relaxed">
              You immediately return to the task-based game, now with the new tool. The goal isn't
              perfection — it's discovery. <em>Does this help you control the situation better? Does it
              create the feeling you were missing?</em>
            </p>
            <p class="text-text-secondary leading-relaxed mt-3">
              We repeat this cycle, refining your skill in the context where it must work: under pressure.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why This Method Works -->
    <section class="py-16 bg-surface-light">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading title="Why This Method Works" centered />
        <div class="grid grid-cols-2 gap-0 mt-8 rounded-lg overflow-hidden border border-royal-purple/10">
          <!-- Header -->
          <div class="bg-royal-purple text-white p-4 font-semibold text-sm">You'll walk away with...</div>
          <div class="bg-text-secondary text-white p-4 font-semibold text-sm">Instead of...</div>
          <!-- Row 1 -->
          <div class="bg-white p-4 border-b border-royal-purple/10 text-text-primary text-sm">
            Real, transferable skill that works on any partner
          </div>
          <div class="bg-white p-4 border-b border-royal-purple/10 text-text-secondary text-sm line-through opacity-60">
            Techniques that only work in drilling
          </div>
          <!-- Row 2 -->
          <div class="bg-surface-light p-4 border-b border-royal-purple/10 text-text-primary text-sm">
            The ability to coach yourself long after our sessions
          </div>
          <div class="bg-surface-light p-4 border-b border-royal-purple/10 text-text-secondary text-sm line-through opacity-60">
            Dependence on someone else's instruction
          </div>
          <!-- Row 3 -->
          <div class="bg-white p-4 border-b border-royal-purple/10 text-text-primary text-sm">
            Clearer understanding of Jiu-Jitsu's underlying "feel"
          </div>
          <div class="bg-white p-4 border-b border-royal-purple/10 text-text-secondary text-sm line-through opacity-60">
            A collection of memorized steps
          </div>
          <!-- Row 4 -->
          <div class="bg-surface-light p-4 text-text-primary text-sm">
            Engagement and curiosity in every roll
          </div>
          <div class="bg-surface-light p-4 text-text-secondary text-sm line-through opacity-60">
            Frustration and stagnation
          </div>
        </div>

        <p class="mt-8 text-text-primary text-center max-w-2xl mx-auto leading-relaxed">
          You don't have to figure it out alone. My role is to guide you through this cycle — to see
          what you can't yet see, and to help you discover solutions that fit your body and your game.
        </p>
      </div>
    </section>

    <!-- Practical Details -->
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-4">
        <UiSectionHeading title="Practical Details" />
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="text-royal-purple font-bold mt-0.5">Location</span>
            <p class="text-text-secondary">[Your gym/venue name] <span class="text-sm italic">(Additional charges apply if the venue charges a mat fee)</span></p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-purple font-bold mt-0.5">Pricing</span>
            <p class="text-text-secondary">$45/hour via Venmo, CashApp, Zelle, or cash</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-purple font-bold mt-0.5">Referral&nbsp;Discount</span>
            <p class="text-text-secondary">Refer a student, and you'll get $10 off your next session.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-purple font-bold mt-0.5">Group&nbsp;Sessions</span>
            <p class="text-text-secondary">Bring up to 3 friends and split the session! <span class="text-sm italic">(Only one referral discount can be applied per session.)</span></p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-purple font-bold mt-0.5">Availability</span>
            <p class="text-text-secondary">My calendar reflects the next 7 days. New slots open weekly.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-royal-purple/5">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <UiCalendlyButton
          v-if="calendlyUrl"
          :calendly-url="calendlyUrl"
          label="Book Your Session"
        />
        <p class="mt-6 text-text-secondary">
          Not sure yet?
          <NuxtLink to="/blog" class="text-royal-purple hover:underline">
            Read my blog posts about PCT and BJJ &rarr;
          </NuxtLink>
        </p>
      </div>
    </section>

    <!-- Testimonials -->
    <DisciplineTestimonials :testimonials="testimonials || []" />
  </div>
</template>
