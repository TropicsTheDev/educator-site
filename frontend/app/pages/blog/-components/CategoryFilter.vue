<script setup lang="ts">
const props = defineProps<{
  categories: Array<{ _id: string; title: string; slug: string }>
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

function pillPt(isActive: boolean) {
  return {
    root: {
      class: [
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
        isActive
          ? 'bg-royal-purple text-white'
          : 'bg-surface-raised text-text-muted hover:bg-surface-overlay hover:text-text-main',
      ],
    },
  }
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button :pt="pillPt(props.modelValue === '')" @click="emit('update:modelValue', '')">
      All
    </Button>
    <Button
      v-for="category in categories"
      :key="category._id"
      :pt="pillPt(props.modelValue === category.slug)"
      @click="emit('update:modelValue', category.slug)"
    >
      {{ category.title }}
    </Button>
  </div>
</template>
