<script setup lang="ts">
import { homePageQuery } from '~/queries/site.queries'

const { data } = useSanityQuery(homePageQuery)
const { data: settings } = useSiteSettings()

const testimonials = computed(() => data.value?.testimonials || [])
const recentPosts = computed(() => data.value?.recentPosts || [])
const coachName = computed(() => settings.value?.coachName || '')

useSeoMeta({
  title: 'Empowering Movement. Learning through Perception.',
  description:
    'I coach Brazilian Jiu-Jitsu and Urban Kiz using Perceptual Control Theory and the Iterative Reorganization Method.',
  ogTitle: 'Empowering Movement. Learning through Perception.',
  ogDescription:
    'I coach Brazilian Jiu-Jitsu and Urban Kiz using Perceptual Control Theory and the Iterative Reorganization Method.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-royal-purple text-white py-20 md:py-28">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <!-- Text -->
          <div class="flex-1 text-center md:text-left">
            <h1 class="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Empowering Movement.<br />Learning through Perception.
            </h1>
            <p class="text-lg text-white/85 leading-relaxed mb-8 max-w-xl">
              <template v-if="coachName">I'm {{ coachName }}. </template>I
              coach Brazilian Jiu-Jitsu and Urban Kiz using Perceptual Control
              Theory (PCT) and the Constraints-Led Approach. Together, we'll
              explore <em>why</em> you move, not just <em>how</em> — so you can
              adapt, create, and find your flow.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <NuxtLink
                to="/teach/bjj"
                class="inline-block px-8 py-3 rounded-lg bg-royal-gold text-text-primary font-semibold hover:bg-royal-gold/90 transition-colors"
              >
                Explore BJJ
              </NuxtLink>
              <NuxtLink
                to="/teach/dance"
                class="inline-block px-8 py-3 rounded-lg bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              >
                Explore Urban Kiz
              </NuxtLink>
            </div>
          </div>

          <!-- Coach photo placeholder -->
          <div class="shrink-0">
            <div
              class="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center"
            >
              <div class="text-center text-white/40">
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
    <section class="py-8 bg-surface-light">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <p class="text-text-secondary italic">
          It's a four-step cycle that helps you rewire your instincts — and
          we'll use it in every session.
          <NuxtLink
            to="/teach/bjj"
            class="text-royal-purple hover:underline ml-1"
          >
            Learn more &rarr;
          </NuxtLink>
        </p>
      </div>
    </section>

    <!-- Two Disciplines, One Framework -->
    <section class="py-20">
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
            class="bg-white rounded-lg p-8 shadow-sm border border-royal-purple/5 hover:shadow-md transition-shadow group"
          >
            <h3 class="text-xl font-bold text-royal-purple mb-3">
              Brazilian Jiu-Jitsu
            </h3>
            <p class="text-text-secondary leading-relaxed mb-4">
              I help practitioners break through plateaus by learning to
              perceive and manage forces — no more memorizing moves that vanish
              under pressure.
            </p>
            <span class="text-royal-purple font-medium group-hover:underline">
              Learn more &rarr;
            </span>
          </NuxtLink>

          <!-- Urban Kiz Card -->
          <NuxtLink
            to="/teach/dance"
            class="bg-white rounded-lg p-8 shadow-sm border border-royal-purple/5 hover:shadow-md transition-shadow group"
          >
            <h3 class="text-xl font-bold text-royal-purple mb-3">Urban Kiz</h3>
            <p class="text-text-secondary leading-relaxed mb-4">
              I guide dancers to build authentic connection by understanding how
              perception shapes lead, follow, and musicality.
            </p>
            <span class="text-royal-purple font-medium group-hover:underline">
              Learn more &rarr;
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why PCT? -->
    <section class="py-20 bg-surface-light">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading title="Why PCT?" centered />
        <div class="prose prose-lg max-w-none text-text-primary">
          <p>
            I started teaching BJJ and dance the way I was taught — with
            techniques and patterns. But I saw students hit walls. Their skills
            didn't transfer. Then I discovered Perceptual Control Theory. It
            changed everything.
          </p>
          <p>
            Now I coach by designing environments where you solve problems, not
            copy moves. It's the same framework for the mat and the dance
            floor — because at its heart, it's about human connection,
            perception, and creativity.
          </p>
        </div>
        <div class="text-center mt-8">
          <NuxtLink
            to="/blog"
            class="inline-block px-6 py-3 bg-royal-purple text-white font-medium rounded-md hover:bg-royal-purple/90 transition-colors"
          >
            Read the Blog
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section v-if="testimonials?.length" class="py-20">
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
    <section class="py-20 bg-surface-light">
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
              class="bg-white rounded-lg overflow-hidden shadow-sm border border-royal-purple/5 hover:shadow-md transition-shadow"
            >
              <div class="p-6">
                <span
                  v-if="post.category"
                  class="text-xs font-medium px-2 py-0.5 rounded-full bg-royal-purple/10 text-royal-purple"
                >
                  {{ post.category.title }}
                </span>
                <h3
                  class="text-lg font-semibold text-text-primary mt-3 mb-2"
                >
                  {{ post.title }}
                </h3>
                <p
                  v-if="post.excerpt"
                  class="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-3"
                >
                  {{ post.excerpt }}
                </p>
                <span class="text-royal-purple text-sm font-medium">
                  Read more &rarr;
                </span>
              </div>
            </NuxtLink>
          </div>
          <div class="text-center mt-10">
            <NuxtLink
              to="/blog"
              class="inline-block px-6 py-3 border border-royal-purple text-royal-purple font-medium rounded-md hover:bg-royal-purple/5 transition-colors"
            >
              View All Posts
            </NuxtLink>
          </div>
        </template>

        <template v-else>
          <p class="text-center text-text-secondary italic">
            No posts yet. Check back soon!
          </p>
        </template>
      </div>
    </section>
  </div>
</template>
