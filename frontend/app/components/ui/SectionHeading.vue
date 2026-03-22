<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  centered?: boolean
}>()
</script>

<template>
  <div :class="['mb-12', centered && 'text-center']">
    <h2 class="text-2xl font-bold text-text-primary">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-lg text-text-secondary">
      {{ subtitle }}
    </p>
  </div>
</template>
