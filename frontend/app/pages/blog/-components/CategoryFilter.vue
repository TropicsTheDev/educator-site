<script setup lang="ts">
defineProps<{
  categories: Array<{ _id: string; title: string; slug: string }>
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-colors',
        modelValue === ''
          ? 'bg-royal-purple text-white'
          : 'bg-royal-purple/5 text-text-secondary hover:bg-royal-purple/10',
      ]"
      @click="emit('update:modelValue', '')"
    >
      All
    </button>
    <button
      v-for="category in categories"
      :key="category._id"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-colors',
        modelValue === category.slug
          ? 'bg-royal-purple text-white'
          : 'bg-royal-purple/5 text-text-secondary hover:bg-royal-purple/10',
      ]"
      @click="emit('update:modelValue', category.slug)"
    >
      {{ category.title }}
    </button>
  </div>
</template>
