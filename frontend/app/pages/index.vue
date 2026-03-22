<script setup lang="ts">
import { homePageQuery } from '~/queries/site.queries'

const { data } = useSanityQuery(homePageQuery)

const testimonials = computed(() => data.value?.testimonials || [])
const recentPosts = computed(() => data.value?.recentPosts || [])

useSeoMeta({
  title: 'PCT-Based Coaching for BJJ & Urban Kiz',
  description:
    'Transform your movement practice with Perceptual Control Theory-based coaching in Brazilian Jiu-Jitsu and Urban Kiz.',
  ogTitle: 'PCT-Based Coaching for BJJ & Urban Kiz',
  ogDescription:
    'Transform your movement practice with Perceptual Control Theory-based coaching in Brazilian Jiu-Jitsu and Urban Kiz.',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="bg-royal-purple text-white py-24">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h1 class="text-3xl md:text-4xl font-bold mb-6 max-w-4xl mx-auto">
          Move with Purpose. Learn through Perception.
        </h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto mb-10">
          PCT-based coaching that helps you understand <em>why</em> you move,
          not just <em>how</em> — across Brazilian Jiu-Jitsu and Urban Kiz.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/bjj"
            class="inline-block px-8 py-3 rounded-lg bg-royal-gold text-text-primary font-semibold hover:bg-royal-gold/90 transition-colors"
          >
            Explore BJJ Coaching
          </NuxtLink>
          <NuxtLink
            to="/dance"
            class="inline-block px-8 py-3 rounded-lg bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors"
          >
            Explore Urban Kiz
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Discipline Features -->
    <section class="py-20 bg-surface-light">
      <div class="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Two Disciplines, One Framework"
          subtitle="Perceptual Control Theory brings clarity to every practice."
          centered
        />
        <div class="grid md:grid-cols-2 gap-8">
          <!-- BJJ Card -->
          <NuxtLink
            to="/bjj"
            class="bg-white rounded-lg p-8 shadow-sm border border-royal-purple/5 hover:shadow-md transition-shadow group"
          >
            <h3 class="text-xl font-bold text-royal-purple mb-3">
              Brazilian Jiu-Jitsu
            </h3>
            <p class="text-text-secondary leading-relaxed mb-4">
              Develop control on the mat by learning to perceive and manage
              forces, balance, and positioning through a PCT lens.
            </p>
            <span class="text-royal-purple font-medium group-hover:underline">
              Learn more &rarr;
            </span>
          </NuxtLink>

          <!-- Urban Kiz Card -->
          <NuxtLink
            to="/dance"
            class="bg-white rounded-lg p-8 shadow-sm border border-royal-purple/5 hover:shadow-md transition-shadow group"
          >
            <h3 class="text-xl font-bold text-royal-purple mb-3">
              Urban Kiz
            </h3>
            <p class="text-text-secondary leading-relaxed mb-4">
              Build connection and musicality by understanding how perception
              shapes lead, follow, and creative expression in dance.
            </p>
            <span class="text-royal-purple font-medium group-hover:underline">
              Learn more &rarr;
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section v-if="testimonials?.length" class="py-20">
      <div class="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="What Students Say"
          subtitle="Hear from practitioners who have transformed their approach."
          centered
        />
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
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

    <!-- Recent Blog Posts -->
    <section v-if="recentPosts?.length" class="py-20 bg-surface-light">
      <div class="max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Recent Articles"
          subtitle="Insights on coaching, movement, and Perceptual Control Theory."
          centered
        />
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
              <h3 class="text-lg font-semibold text-text-primary mt-3 mb-2">
                {{ post.title }}
              </h3>
              <p
                v-if="post.excerpt"
                class="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-3"
              >
                {{ post.excerpt }}
              </p>
              <time
                v-if="post.publishDate"
                :datetime="post.publishDate"
                class="text-xs text-text-secondary"
              >
                {{ new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }) }}
              </time>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
