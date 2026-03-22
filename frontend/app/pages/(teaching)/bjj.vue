<script setup lang="ts">
import MethodologySection from './-components/MethodologySection.vue'
import BenefitsList from './-components/BenefitsList.vue'
import DisciplineTestimonials from './-components/DisciplineTestimonials.vue'
import UpcomingEvents from './-components/UpcomingEvents.vue'
import { teachingPageQuery } from '~/queries/teaching.queries'

const discipline = 'bjj'

const { data } = useSanityQuery(teachingPageQuery, { discipline })
const { data: settings } = useSiteSettings()

const page = computed(() => data.value?.page)
const testimonials = computed(() => data.value?.testimonials || [])
const events = computed(() => data.value?.events || [])

const calendlyUrl = computed(() => settings.value?.calendlyBjjUrl)

useSeoFromSanity(computed(() => page.value ? { ...page.value.seo, title: page.value.title } : null))
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-royal-purple py-20 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ page?.title || 'Brazilian Jiu-Jitsu' }}
        </h1>
        <p v-if="page?.subtitle" class="text-xl text-white/80">
          {{ page.subtitle }}
        </p>
      </div>
      <img
        v-if="page?.heroImage"
        :src="page.heroImage"
        :alt="page?.title || 'Brazilian Jiu-Jitsu'"
        class="absolute inset-0 w-full h-full object-cover opacity-20"
      />
    </section>

    <!-- Methodology -->
    <MethodologySection v-if="page?.methodology" :methodology="page.methodology" />

    <!-- Benefits -->
    <BenefitsList v-if="page?.benefits?.length" :benefits="page.benefits" />

    <!-- Testimonials -->
    <DisciplineTestimonials :testimonials="testimonials" />

    <!-- Upcoming Events -->
    <UpcomingEvents :events="events" />

    <!-- CTA -->
    <section v-if="calendlyUrl" class="py-16 bg-surface-light">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <SectionHeading title="Ready to Train?" />
        <p class="text-text-secondary mb-8">
          Book a session and start your jiu-jitsu journey.
        </p>
        <CalendlyButton :url="calendlyUrl" text="Book a BJJ Session" />
      </div>
    </section>
  </div>
</template>
