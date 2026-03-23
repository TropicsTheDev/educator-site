<script setup lang="ts">
const props = defineProps<{
  discipline?: string
}>()

const link = computed(() => props.discipline === 'kiz' ? '/teach/dance' : '/teach/bjj')
const disciplineName = computed(() => props.discipline === 'kiz' ? 'Urban Kiz' : 'BJJ')
</script>

<template>
  <div class="mt-12 p-8 bg-surface-raised rounded-xl border border-white/5 text-center">
    <h3 class="text-xl font-bold text-text-on-dark mb-2">
      Interested in {{ disciplineName }} coaching?
    </h3>
    <p class="text-text-on-dark-muted mb-6">
      Learn how Perceptual Control Theory can transform your {{ disciplineName }} practice.
    </p>
    <NuxtLink
      :to="link"
      class="inline-flex items-center gap-2 px-6 py-3 bg-royal-purple text-white font-medium rounded-xl hover:bg-royal-purple/90 hover:shadow-[0_0_20px_rgba(120,81,169,0.3)] transition-all duration-300"
    >
      Explore {{ disciplineName }} Coaching
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </NuxtLink>
  </div>
</template>
