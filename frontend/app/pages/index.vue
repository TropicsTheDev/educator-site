<script setup lang="ts">
import { Shield, Music, BookOpen } from "@boxicons/vue";
import { homePageQuery } from "~/queries/site.queries";

const { data } = useSanityQuery(homePageQuery);
const { data: settings } = useSiteSettings();

const testimonials = computed(() => data.value?.testimonials || []);
const recentPosts = computed(() => data.value?.recentPosts || []);
const coachName = computed(() => settings.value?.coachName || "");

function getBadgeClass(discipline?: string) {
  switch (discipline) {
    case "bjj":
      return "bg-royal-green/15 text-royal-green";
    case "kiz":
      return "bg-royal-orange/15 text-royal-orange";
    default:
      return "bg-royal-purple/15 text-royal-purple";
  }
}

useSeoMeta({
  title: "Where movement meets curiosity",
  description:
    "I coach Brazilian Jiu-Jitsu and Urban Kiz using Perceptual Control Theory and the Iterative Reorganization Method.",
  ogTitle: "Empowering Movement. Learning through Perception.",
  ogDescription:
    "I coach Brazilian Jiu-Jitsu and Urban Kiz using Perceptual Control Theory and the Iterative Reorganization Method.",
});
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="hero-glow bg-gradient-to-br from-royal-purple/20 via-surface-base to-surface-base text-text-on-dark py-24 md:py-32"
    >
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Text -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Where movement meets curiosity
            </h1>
            <p
              class="text-lg text-text-on-dark-muted leading-relaxed mb-8 max-w-xl"
            >
              <template v-if="coachName">I'm {{ coachName }}!</template>
              I guide people through Brazilian Jiu Jitsu and Urban Kiz with a
              focus on awareness, perception, and self-discovery. Together,
              we’ll uncover the patterns you love in movement—so you can adapt,
              create, and find your flow.
            </p>
            <div
              class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <NuxtLink
                to="/teach/bjj"
                class="inline-block px-8 py-3 border border-royal-green/30 text-royal-green rounded-xl hover:bg-royal-green/10 transition-all duration-300"
              >
                Explore BJJ
              </NuxtLink>
              <NuxtLink
                to="/teach/kiz"
                class="inline-block px-8 py-3 border border-royal-orange/30 text-royal-orange rounded-xl hover:bg-royal-orange/10 transition-all duration-300"
              >
                Explore Urban Kiz
              </NuxtLink>
            </div>
          </div>

          <!-- Coach photo placeholder -->
          <div class="shrink-0">
            <div
              class="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-surface-raised border border-white/10 flex items-center justify-center"
            >
              <div class="text-center text-text-on-dark-faint">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-16 w-16 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span class="text-sm">Photo coming soon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- IRM Teaser -->
    <section class="py-6">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <p class="text-text-on-dark-muted italic">
          It's a four-step cycle that helps you rewire your instincts — and
          we'll use it in every session.
          <NuxtLink
            to="/teach/bjj"
            class="text-royal-gold hover:underline ml-1"
          >
            Learn more &rarr;
          </NuxtLink>
        </p>
      </div>
    </section>

    <div class="section-divider my-4" />

    <!-- Two Disciplines, One Framework -->
    <section class="py-20 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <UiSectionHeading
          title="Two Disciplines, One Framework"
          subtitle="Perceptual Control Theory brings clarity to every practice — whether on the mats or the dance floor."
          centered
        />
        <div class="grid md:grid-cols-2 gap-8">
          <!-- BJJ Card -->
          <NuxtLink
            to="/teach/bjj"
            class="bg-surface-raised rounded-xl p-8 border border-royal-green/15 hover:border-royal-green/30 transition-all duration-300 group"
          >
            <Shield class="w-8 h-8 text-royal-green/60 mb-3" />
            <h3 class="text-xl font-bold text-royal-green mb-3">
              Brazilian Jiu-Jitsu
            </h3>
            <p class="text-text-on-dark-muted leading-relaxed mb-4">
              I help practitioners break through plateaus by learning to
              perceive and manage forces — no more memorizing moves that vanish
              under pressure.
            </p>
            <span class="text-royal-green font-medium group-hover:underline">
              Learn more &rarr;
            </span>
          </NuxtLink>

          <!-- Urban Kiz Card -->
          <NuxtLink
            to="/teach/kiz"
            class="bg-surface-raised rounded-xl p-8 border border-royal-orange/15 hover:border-royal-orange/30 transition-all duration-300 group"
          >
            <Music class="w-8 h-8 text-royal-orange/60 mb-3" />
            <h3 class="text-xl font-bold text-royal-orange mb-3">Urban Kiz</h3>
            <p class="text-text-on-dark-muted leading-relaxed mb-4">
              I guide dancers to build authentic connection by understanding how
              perception shapes lead, follow, and musicality.
            </p>
            <span class="text-royal-orange font-medium group-hover:underline">
              Learn more &rarr;
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why PCT? -->
    <section class="py-20 md:py-24 bg-surface-raised/30">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading title="Why PCT?" centered />
        <div class="prose prose-lg max-w-none text-text-on-dark">
          <p>
            I started teaching BJJ and dance the way I was taught — with
            techniques and patterns. But I saw students hit walls. Their skills
            didn't transfer. Then I discovered Perceptual Control Theory. It
            changed everything.
          </p>
          <p>
            Now I coach by designing environments where you solve problems, not
            copy moves. It's the same framework for the mat and the dance floor
            — because at its heart, it's about human connection, perception, and
            creativity.
          </p>
        </div>
        <div class="text-center mt-8">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 px-6 py-3 bg-royal-purple text-white font-medium rounded-xl hover:bg-royal-purple/90 transition-all duration-300"
          >
            <BookOpen class="w-4 h-4" /> Read the Blog
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section v-if="testimonials?.length" class="py-20 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <UiSectionHeading
          title="What Students Say"
          subtitle="Hear from practitioners who have transformed their approach."
          centered
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UiTestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial._id"
            :student-name="testimonial.studentName"
            :discipline="testimonial.discipline"
            :quote="testimonial.quote"
            :photo="testimonial.photo"
          />
        </div>
      </div>
    </section>

    <!-- Recent Articles -->
    <section class="py-20 md:py-24 bg-surface-raised/30">
      <div class="max-w-6xl mx-auto px-4">
        <UiSectionHeading
          title="Recent Articles"
          subtitle="Insights on coaching, movement, and Perceptual Control Theory."
          centered
        />

        <template v-if="recentPosts?.length">
          <div class="grid md:grid-cols-3 gap-6">
            <NuxtLink
              v-for="post in recentPosts"
              :key="post._id"
              :to="`/blog/${post.slug}`"
              class="bg-surface-raised rounded-xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div class="p-6">
                <Tag
                  v-if="post.category"
                  :value="post.category.title"
                  :pt="{ root: { class: ['text-xs font-medium px-2 py-0.5 rounded-full', getBadgeClass(post.category?.discipline)] } }"
                />
                <h3 class="text-lg font-semibold text-text-on-dark mt-3 mb-2">
                  {{ post.title }}
                </h3>
                <p
                  v-if="post.excerpt"
                  class="text-sm text-text-on-dark-muted leading-relaxed mb-3 line-clamp-3"
                >
                  {{ post.excerpt }}
                </p>
                <span class="text-royal-gold text-sm font-medium">
                  Read more &rarr;
                </span>
              </div>
            </NuxtLink>
          </div>
          <div class="text-center mt-10">
            <NuxtLink
              to="/blog"
              class="inline-block px-6 py-3 border border-royal-gold text-royal-gold font-medium rounded-xl hover:bg-royal-gold/10 transition-all duration-300"
            >
              View All Posts
            </NuxtLink>
          </div>
        </template>

        <template v-else>
          <p class="text-center text-text-on-dark-muted italic">
            No posts yet. Check back soon!
          </p>
        </template>
      </div>
    </section>
  </div>
</template>
