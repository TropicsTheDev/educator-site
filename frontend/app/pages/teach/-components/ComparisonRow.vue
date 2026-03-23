<script setup lang="ts">
import { CheckCircle, XCircle } from '@boxicons/vue'

defineProps<{
  positive: string
  negative: string
  accentColor: 'green' | 'orange'
}>()
</script>

<template>
  <div class="bg-surface-raised rounded-xl p-5 border border-white/5 hover:border-white/10 transition-all duration-300">
    <div class="flex items-start gap-3 mb-3">
      <CheckCircle class="w-5 h-5 mt-0.5 shrink-0" :class="accentColor === 'green' ? 'text-royal-green' : 'text-royal-orange'" />
      <span class="text-text-on-dark font-medium">{{ positive }}</span>
    </div>
    <div class="flex items-start gap-3 pl-8 opacity-50">
      <XCircle class="w-4 h-4 mt-0.5 shrink-0 text-text-on-dark-faint" />
      <span class="text-text-on-dark-faint text-sm line-through">{{ negative }}</span>
    </div>
  </div>
</template>
