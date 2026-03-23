<script setup lang="ts">
import DisciplineTestimonials from './-components/DisciplineTestimonials.vue'
import { teachingTestimonialsQuery } from '~/queries/teaching.queries'

const { data: testimonials } = useSanityQuery(teachingTestimonialsQuery, { discipline: 'kiz' })
const { data: settings } = useSiteSettings()

const calendlyUrl = computed(() => settings.value?.calendlyKizUrl || '')

useSeoMeta({
  title: 'Urban Kiz Coaching — Feel the Music, Trust the Connection, Find Your Flow.',
  description: 'I coach Urban Kiz using Perceptual Control Theory and the Iterative Reorganization Method. Build authentic connection by understanding how perception shapes lead, follow, and musicality.',
  ogTitle: 'Urban Kiz Coaching — Find Your Flow',
  ogDescription: 'Build authentic connection with PCT-based dance coaching.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-royal-orange/15 via-surface-base to-surface-base text-text-on-dark py-20 md:py-28">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Feel the Music, Trust the Connection,<br />Find Your Flow.
        </h1>
        <p class="text-lg text-text-on-dark-muted leading-relaxed max-w-3xl mx-auto">
          You know the steps. You've taken workshops. But something still feels off — robotic, rehearsed,
          like you're dancing <em>at</em> your partner instead of <em>with</em> them. When the music changes,
          your patterns crumble. The connection you crave slips away.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-4 prose prose-lg max-w-none">
        <p>
          You're not alone — and more important, there's nothing wrong with you. Traditional dance
          classes often teach patterns, not presence. They give you sequences to memorize, but not the
          perceptual skills to adapt in real time. My coaching takes a different path.
        </p>
      </div>
    </section>

    <!-- My Approach -->
    <section class="py-16 bg-surface-raised/30">
      <div class="max-w-3xl mx-auto px-4">
        <UiSectionHeading
          title="My Approach: Dance as Living Conversation, Not Choreography"
        />
        <div class="prose prose-lg max-w-none">
          <p>
            True urban kiz isn't built from step collections. It emerges from a continuous dialogue — a
            loop of intention, perception, and adjustment between two people responding to music together.
          </p>
          <p>
            I provide a supportive, focused space where we explore your dance together, understand where
            connection breaks, and build the kind of embodied awareness that turns mechanical steps into
            authentic movement.
          </p>
        </div>
      </div>
    </section>

    <!-- IRM Cycle -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading
          title="How We Learn Together: The Iterative Reorganization Method"
          subtitle="Think of our sessions as a collaborative cycle — moving from confusion to clarity, and from clarity to embodied skill. Each lesson follows the same four-step rhythm:"
        />

        <div class="grid md:grid-cols-2 gap-6 mt-8">
          <!-- Step 1 -->
          <div class="bg-surface-raised rounded-xl p-6 border border-white/5">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-10 h-10 rounded-full bg-royal-orange text-white flex items-center justify-center font-bold text-lg">1</span>
              <h3 class="text-lg font-bold text-text-on-dark">We Start with a Task-Based Game</h3>
            </div>
            <p class="text-text-on-dark-muted leading-relaxed">
              No demonstration. No pattern to copy. We begin with a specific, simple task — a constraint
              that reveals exactly where your connection frays. Maybe it's leading a basic walk while your
              partner can only follow your chest direction, with no arm tension allowed. Maybe it's
              improvising a single weight shift until you both feel the same musical phrase.
            </p>
            <p class="text-text-on-dark-faint leading-relaxed mt-3 italic text-sm">
              This isn't about getting it "right." It's about creating an honest starting point so we
              know precisely what we're solving together.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="bg-surface-raised rounded-xl p-6 border border-white/5">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-10 h-10 rounded-full bg-royal-orange text-white flex items-center justify-center font-bold text-lg">2</span>
              <h3 class="text-lg font-bold text-text-on-dark">We Explore Your Experience</h3>
            </div>
            <p class="text-text-on-dark-muted leading-relaxed">
              We pause and reflect. I'll ask: <em>What did you feel in your partner's body? What were you
              trying to communicate? Where did the signal get lost?</em>
            </p>
            <p class="text-text-on-dark-muted leading-relaxed mt-3">
              This step builds awareness. It helps us move from "they didn't follow" to understanding the
              subtle timing, tension, or intention that broke the connection. And awareness, as you'll
              discover, is the first step to gaining control.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="bg-surface-raised rounded-xl p-6 border border-white/5">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-10 h-10 rounded-full bg-royal-orange text-white flex items-center justify-center font-bold text-lg">3</span>
              <h3 class="text-lg font-bold text-text-on-dark">We Introduce a Clear, Useful Tool</h3>
            </div>
            <p class="text-text-on-dark-muted leading-relaxed">
              With the real problem identified, I offer a focused "anchor" — a shift in weight placement,
              a change in how you initiate, a new way of listening to the music. This isn't another pattern
              to memorize. It's a testable tool, a new option for your body to try against the very
              challenge you just faced.
            </p>
          </div>

          <!-- Step 4 -->
          <div class="bg-surface-raised rounded-xl p-6 border border-white/5">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-10 h-10 rounded-full bg-royal-orange text-white flex items-center justify-center font-bold text-lg">4</span>
              <h3 class="text-lg font-bold text-text-on-dark">We Integrate and Rebuild Together</h3>
            </div>
            <p class="text-text-on-dark-muted leading-relaxed">
              You immediately return to the task-based game, now with the new tool. The goal isn't
              perfection — it's discovery. <em>Does this make the connection clearer? Does it let you both
              respond more freely to the music?</em>
            </p>
            <p class="text-text-on-dark-muted leading-relaxed mt-3">
              We repeat this cycle, refining your dance in the context where it must work: with a live
              partner, in real time, to unpredictable music.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why This Method Works -->
    <section class="py-16 bg-surface-raised/30">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading title="Why This Method Works" centered />
        <div class="grid grid-cols-2 gap-0 mt-8 rounded-xl overflow-hidden border border-white/5">
          <!-- Header -->
          <div class="bg-royal-orange text-white p-4 font-semibold text-sm">You'll walk away with...</div>
          <div class="bg-surface-overlay text-text-on-dark-muted p-4 font-semibold text-sm">Instead of...</div>
          <!-- Row 1 -->
          <div class="bg-surface-raised p-4 border-b border-white/5 text-text-on-dark text-sm">
            Real, adaptable skill that works with any partner, to any song
          </div>
          <div class="bg-surface-raised p-4 border-b border-white/5 text-text-on-dark-faint text-sm line-through">
            Patterns that only work in class
          </div>
          <!-- Row 2 -->
          <div class="bg-surface-base p-4 border-b border-white/5 text-text-on-dark text-sm">
            The ability to feel and fix connection issues yourself
          </div>
          <div class="bg-surface-base p-4 border-b border-white/5 text-text-on-dark-faint text-sm line-through">
            Dependence on a teacher to tell you what's wrong
          </div>
          <!-- Row 3 -->
          <div class="bg-surface-raised p-4 border-b border-white/5 text-text-on-dark text-sm">
            Deeper musicality and authentic expression
          </div>
          <div class="bg-surface-raised p-4 border-b border-white/5 text-text-on-dark-faint text-sm line-through">
            Choreographed moves that ignore the music
          </div>
          <!-- Row 4 -->
          <div class="bg-surface-base p-4 text-text-on-dark text-sm">
            Confidence to improvise and play
          </div>
          <div class="bg-surface-base p-4 text-text-on-dark-faint text-sm line-through">
            Anxiety about "what comes next"
          </div>
        </div>

        <p class="mt-8 text-text-on-dark text-center max-w-2xl mx-auto leading-relaxed">
          You don't have to figure it out alone. My role is to guide you through this cycle — to perceive
          what you can't yet perceive, and to help you discover a dance that feels like <em>you</em>.
        </p>
      </div>
    </section>

    <!-- Practical Details -->
    <section class="py-16">
      <div class="max-w-3xl mx-auto px-4">
        <UiSectionHeading title="Practical Details" />
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="text-royal-orange font-bold mt-0.5">Location</span>
            <p class="text-text-on-dark-muted">[Studio name/venue] <span class="text-sm italic">(Additional charges may apply if the venue has a rental fee)</span></p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-orange font-bold mt-0.5">Pricing</span>
            <p class="text-text-on-dark-muted">$45/hour via Venmo, CashApp, Zelle, or cash</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-orange font-bold mt-0.5">Referral&nbsp;Discount</span>
            <p class="text-text-on-dark-muted">Refer a student, and you'll get $10 off your next session.</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-orange font-bold mt-0.5">Group&nbsp;Sessions</span>
            <p class="text-text-on-dark-muted">Bring up to 3 friends and split the session! Perfect for couples or practice groups. <span class="text-sm italic">(Only one referral discount can be applied per session.)</span></p>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-royal-orange font-bold mt-0.5">Availability</span>
            <p class="text-text-on-dark-muted">My calendar reflects the next 7 days. New slots open weekly.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-surface-raised/30">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <UiCalendlyButton
          v-if="calendlyUrl"
          :calendly-url="calendlyUrl"
          label="Book Your Session"
        />
        <p class="mt-6 text-text-on-dark-muted">
          Not sure yet?
          <NuxtLink to="/blog" class="text-royal-gold hover:underline">
            Read my blog posts about PCT and dance &rarr;
          </NuxtLink>
        </p>
      </div>
    </section>

    <!-- Testimonials -->
    <DisciplineTestimonials :testimonials="testimonials || []" />
  </div>
</template>
