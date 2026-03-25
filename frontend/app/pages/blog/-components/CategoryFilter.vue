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
    <Button
      :pt="{
        root: {
          class: ['px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
            modelValue === ''
              ? 'bg-royal-purple text-white'
              : 'bg-surface-raised text-text-on-dark-muted hover:bg-surface-overlay hover:text-text-on-dark'
          ]
        }
      }"
      @click="emit('update:modelValue', '')"
    >
      All
    </Button>
    <Button
      v-for="category in categories"
      :key="category._id"
      :pt="{
        root: {
          class: ['px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
            modelValue === category.slug
              ? 'bg-royal-purple text-white'
              : 'bg-surface-raised text-text-on-dark-muted hover:bg-surface-overlay hover:text-text-on-dark'
          ]
        }
      }"
      @click="emit('update:modelValue', category.slug)"
    >
      {{ category.title }}
    </Button>
  </div>
</template>
