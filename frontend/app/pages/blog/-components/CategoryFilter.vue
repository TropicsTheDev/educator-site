<script setup lang="ts">
const props = defineProps<{
  categories: Array<{ _id: string; title: string; slug: string }>
}>()

const model = defineModel<string>()

function pillPt(isActive: boolean) {
  return {
    root: {
      class: [
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
        isActive
          ? 'bg-royal-purple text-white shadow-md'
          : 'bg-surface-raised text-text-muted hover:bg-surface-overlay hover:text-text-main',
      ],
    },
  }
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <Button :pt="pillPt(!model)" @click="model = ''">
      All
    </Button>
    <Button
      v-for="category in props.categories"
      :key="category._id"
      :pt="pillPt(model === category._id)"
      @click="model = category._id"
    >
      {{ category.title }}
    </Button>
  </div>
</template>
