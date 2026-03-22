<script setup lang="ts">
defineProps<{
  benefits: string[]
}>()
</script>

<template>
  <section class="py-16 bg-surface-light">
    <div class="max-w-4xl mx-auto px-4">
      <SectionHeading title="Benefits" />
      <ul class="grid gap-4 md:grid-cols-2 mt-8">
        <li
          v-for="(benefit, index) in benefits"
          :key="index"
          class="flex items-start gap-3 text-text-primary"
        >
          <svg
            class="w-6 h-6 text-royal-green flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>{{ benefit }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
