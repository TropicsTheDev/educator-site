<script setup lang="ts">
import DisciplineTestimonials from "./-components/DisciplineTestimonials.vue";
import IrmCycle from "./-components/IrmCycle.vue";
import ComparisonList from "./-components/ComparisonList.vue";
import {
  MapIcon,
  Gem,
  Gift,
  UserPlus,
  Calendar,
  Community,
} from "@boxicons/vue";
import { teachingTestimonialsQuery } from "~/queries/teaching.queries";

const { data: testimonials } = useSanityQuery(teachingTestimonialsQuery, {
  discipline: "kiz",
});
const { data: settings } = useSiteSettings();

const calendlyUrl = computed(() => settings.value?.calendlyKizUrl || "");

const irmSteps = [
  {
    stepNumber: 1,
    title: "We Start with a Task-Based Game",
    description:
      "No demonstration. No pattern to copy. We begin with a specific, simple task — a constraint that reveals exactly where your connection frays. Maybe it's leading a basic walk while your partner can only follow your chest direction, with no arm tension allowed. Maybe it's improvising a single weight shift until you both feel the same musical phrase.",
    aside:
      "This isn't about getting it \"right.\" It's about creating an honest starting point so we know precisely what we're solving together.",
  },
  {
    stepNumber: 2,
    title: "We Explore Your Experience",
    description:
      "We pause and reflect. I'll ask: What did you feel in your partner's body? What were you trying to communicate? Where did the signal get lost? This step builds awareness. It helps us move from \"they didn't follow\" to understanding the subtle timing, tension, or intention that broke the connection. And awareness, as you'll discover, is the first step to gaining control.",
  },
  {
    stepNumber: 3,
    title: "We Introduce a Clear, Useful Tool",
    description:
      "With the real problem identified, I offer a focused \"anchor\" — a shift in weight placement, a change in how you initiate, a new way of listening to the music. This isn't another pattern to memorize. It's a testable tool, a new option for your body to try against the very challenge you just faced.",
  },
  {
    stepNumber: 4,
    title: "We Integrate and Rebuild Together",
    description:
      "You immediately return to the task-based game, now with the new tool. The goal isn't perfection — it's discovery. Does this make the connection clearer? Does it let you both respond more freely to the music? We repeat this cycle, refining your dance in the context where it must work: with a live partner, in real time, to unpredictable music.",
  },
];

const comparisonItems = [
  {
    positive: "Real, adaptable skill that works with any partner, to any song",
    negative: "Patterns that only work in class",
  },
  {
    positive: "The ability to feel and fix connection issues yourself",
    negative: "Dependence on a teacher to tell you what's wrong",
  },
  {
    positive: "Deeper musicality and authentic expression",
    negative: "Choreographed moves that ignore the music",
  },
  {
    positive: "Confidence to improvise and play",
    negative: 'Anxiety about "what comes next"',
  },
];

useSeoMeta({
  title:
    "Urban Kiz Coaching — Feel the Music, Trust the Connection, Find Your Flow.",
  description:
    "I coach Urban Kiz using Perceptual Control Theory and the Iterative Reorganization Method. Build authentic connection by understanding how perception shapes lead, follow, and musicality.",
  ogTitle: "Urban Kiz Coaching — Find Your Flow",
  ogDescription: "Build authentic connection with PCT-based dance coaching.",
});
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="hero-glow bg-gradient-to-br from-royal-orange/15 via-surface-base to-surface-base text-text-on-dark py-24 md:py-32"
      style="--glow-color: rgba(249, 150, 108, 0.08)"
    >
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Feel the Music, Trust the Connection,<br />Find Your Flow.
        </h1>
        <p
          class="text-lg text-text-on-dark-muted leading-relaxed max-w-3xl mx-auto"
        >
          You know the steps. You've taken workshops. But something still feels
          off — robotic, rehearsed, like you're dancing <em>at</em> your partner
          instead of <em>with</em> them. When the music changes, your patterns
          crumble. The connection you crave slips away.
        </p>
      </div>
    </section>

    <!-- Bridge -->
    <div class="max-w-2xl mx-auto px-4 py-10 text-center">
      <!-- Open hands icon -->
      <Community class="w-10 h-10 mx-auto mb-5 text-royal-orange/40" />

      <p class="text-text-on-dark-muted leading-relaxed">
        <span class="text-text-on-dark font-medium">You're not alone</span>
        — and more important, there's nothing wrong with you. Traditional dance
        classes often teach patterns, not presence. They give you sequences to
        memorize, but not the perceptual skills to adapt in real time. My
        coaching takes a different path.
      </p>
    </div>

    <!-- My Approach -->
    <section class="py-14 md:py-16 bg-surface-raised/30">
      <div class="max-w-3xl mx-auto px-4">
        <UiSectionHeading
          title="My Approach: Dance as Living Conversation, Not Choreography"
        />
        <div class="prose prose-lg max-w-none">
          <p>
            True urban kiz isn't built from step collections. It emerges from a
            continuous dialogue — a loop of intention, perception, and
            adjustment between two people responding to music together.
          </p>
          <p>
            I provide a supportive, focused space where we explore your dance
            together, understand where connection breaks, and build the kind of
            embodied awareness that turns mechanical steps into authentic
            movement.
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
          subtitle="Think of our sessions as a collaborative cycle — moving from confusion to clarity, and from clarity to embodied skill. Each lesson follows the same four-step rhythm:"
        />

        <div class="mt-8">
          <IrmCycle :steps="irmSteps" discipline="kiz" />
        </div>
      </div>
    </section>

    <!-- Why This Method Works -->
    <section class="py-16 md:py-20 bg-surface-raised/30">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading title="Why This Method Works" centered />

        <div class="mt-8">
          <ComparisonList :items="comparisonItems" discipline="kiz" />
        </div>

        <p
          class="mt-8 text-text-on-dark text-center max-w-2xl mx-auto leading-relaxed"
        >
          You don't have to figure it out alone. My role is to guide you through
          this cycle — to perceive what you can't yet perceive, and to help you
          discover a dance that feels like <em>you</em>.
        </p>
      </div>
    </section>

    <!-- Practical Details -->
    <section class="py-14">
      <div class="max-w-3xl mx-auto px-4">
        <UiSectionHeading title="Practical Details" />
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <MapIcon class="w-5 h-5 text-royal-orange/60 shrink-0 mt-0.5" />
            <span class="text-royal-orange font-bold mt-0.5">Location</span>
            <p class="text-text-on-dark-muted">
              I do floor rentals or home visits
              <span class="text-sm italic"
                >(Additional charges may apply if the venue has a rental
                fee)</span
              >
            </p>
          </div>
          <div class="flex items-start gap-3">
            <Gem class="w-5 h-5 text-royal-orange/60 shrink-0 mt-0.5" />
            <span class="text-royal-orange font-bold mt-0.5">Pricing</span>
            <p class="text-text-on-dark-muted">
              $45/hour via Venmo, CashApp, Zelle, or cash
            </p>
          </div>
          <div class="flex items-start gap-3">
            <Gift class="w-5 h-5 text-royal-orange/60 shrink-0 mt-0.5" />
            <span class="text-royal-orange font-bold mt-0.5"
              >Referral&nbsp;Discount</span
            >
            <p class="text-text-on-dark-muted">
              Refer a student, and you'll get $10 off your next session.
            </p>
          </div>
          <div class="flex items-start gap-3">
            <UserPlus class="w-5 h-5 text-royal-orange/60 shrink-0 mt-0.5" />
            <span class="text-royal-orange font-bold mt-0.5"
              >Group&nbsp;Sessions</span
            >
            <p class="text-text-on-dark-muted">
              Bring up to 3 friends and split the session! Perfect for couples
              or practice groups.
              <span class="text-sm italic"
                >(Only one referral discount can be applied per session.)</span
              >
            </p>
          </div>
          <div class="flex items-start gap-3">
            <Calendar class="w-5 h-5 text-royal-orange/60 shrink-0 mt-0.5" />
            <span class="text-royal-orange font-bold mt-0.5">Availability</span>
            <p class="text-text-on-dark-muted">
              My calendar reflects the next 7 days. New slots open weekly.
            </p>
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
            Read my blog posts about PCT and dance &rarr;
          </NuxtLink>
        </p>
      </div>
    </section>

    <!-- Testimonials -->
    <DisciplineTestimonials :testimonials="testimonials || []" />
  </div>
</template>
