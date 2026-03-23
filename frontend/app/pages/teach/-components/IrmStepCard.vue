<script setup lang="ts">
defineProps<{
  stepNumber: number
  title: string
  description: string
  aside?: string
  accentColor: 'green' | 'orange'
}>()
</script>

<template>
  <div
    class="relative bg-surface-raised rounded-xl p-8 border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10"
    :class="accentColor === 'green' ? 'border-t-2 border-t-royal-green' : 'border-t-2 border-t-royal-orange'"
  >
    <!-- Decorative numeral watermark -->
    <span
      class="absolute -top-4 -right-2 text-8xl font-display font-bold pointer-events-none select-none"
      :class="accentColor === 'green' ? 'text-royal-green/10' : 'text-royal-orange/10'"
    >
      {{ stepNumber }}
    </span>

    <h3 class="text-lg font-bold text-text-on-dark mb-3 relative z-10">
      {{ title }}
    </h3>
    <p class="text-text-on-dark-muted leading-relaxed relative z-10">
      {{ description }}
    </p>
    <p v-if="aside" class="text-text-on-dark-faint italic text-sm mt-3 relative z-10">
      {{ aside }}
    </p>
  </div>
</template>
