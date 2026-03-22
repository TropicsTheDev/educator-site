<script setup lang="ts">
const props = defineProps<{
  events: Array<Record<string, unknown>>
}>()

function formatDate(dateString: unknown): string {
  if (typeof dateString !== 'string') return ''
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <section v-if="props.events.length" class="py-16 bg-surface-light">
    <div class="max-w-4xl mx-auto px-4">
      <UiSectionHeading title="Upcoming Events" />
      <div class="grid gap-6 mt-8">
        <article
          v-for="event in props.events"
          :key="(event._id as string)"
          class="rounded-lg border border-royal-gold/20 bg-white p-6 shadow-sm"
        >
          <h3 class="text-xl font-semibold text-text-primary">
            {{ event.title }}
          </h3>
          <div class="mt-2 flex flex-wrap gap-4 text-sm text-text-secondary">
            <span v-if="event.date" class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ formatDate(event.date) }}
            </span>
            <span v-if="event.location" class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {{ event.location }}
            </span>
          </div>
          <a
            v-if="event.bookingUrl"
            :href="(event.bookingUrl as string)"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-block rounded-md bg-royal-purple px-4 py-2 text-sm font-medium text-white hover:bg-royal-purple/90 transition-colors"
          >
            Book Now
          </a>
        </article>
      </div>
    </div>
  </section>
</template>
