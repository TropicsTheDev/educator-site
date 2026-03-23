<script setup lang="ts">
defineProps<{
  positive: string
  negative: string
  accentColor: 'green' | 'orange'
}>()
</script>

<template>
  <div class="bg-surface-raised rounded-xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300">
    <div class="flex items-start gap-3 mb-3">
      <svg
        class="w-5 h-5 mt-0.5 shrink-0"
        :class="accentColor === 'green' ? 'text-royal-green' : 'text-royal-orange'"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
      <span class="text-text-on-dark font-medium">{{ positive }}</span>
    </div>
    <div class="flex items-start gap-3 pl-8 opacity-50">
      <svg class="w-4 h-4 mt-0.5 shrink-0 text-text-on-dark-faint" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span class="text-text-on-dark-faint text-sm line-through">{{ negative }}</span>
    </div>
  </div>
</template>
