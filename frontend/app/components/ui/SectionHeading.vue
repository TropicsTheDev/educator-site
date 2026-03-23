<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  centered?: boolean
}>()
</script>

<template>
  <div :class="['mb-12', centered && 'text-center']">
    <h2 class="text-2xl font-bold text-text-on-dark flex items-center gap-2" :class="centered ? 'justify-center' : ''">
      <slot name="icon" />
      {{ title }}
    </h2>
    <div
      class="w-16 h-0.5 bg-royal-gold/50 rounded-full mt-4"
      :class="centered ? 'mx-auto' : ''"
    />
    <p v-if="subtitle" class="mt-4 text-lg text-text-on-dark-muted">
      {{ subtitle }}
    </p>
  </div>
</template>
