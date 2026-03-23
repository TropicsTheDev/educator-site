<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  centered?: boolean
}>()
</script>

<template>
  <div :class="['mb-12', centered && 'text-center']">
    <h2 class="text-2xl font-bold text-text-on-dark">
      {{ title }}
    </h2>
    <div v-if="centered" class="w-12 h-0.5 bg-royal-gold/60 rounded-full mx-auto mt-4"></div>
    <p v-if="subtitle" class="mt-3 text-lg text-text-on-dark-muted">
      {{ subtitle }}
    </p>
  </div>
</template>
