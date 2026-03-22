<script setup lang="ts">
const props = defineProps<{
  studentName: string
  discipline?: string
  quote: string
  photo?: any
}>()

const disciplineLabel = computed(() => {
  if (props.discipline === 'bjj') return 'BJJ'
  if (props.discipline === 'kiz') return 'Urban Kiz'
  return props.discipline
})
</script>

<template>
  <div class="bg-white rounded-lg p-6 shadow-sm border border-royal-purple/5 hover:shadow-md transition-shadow">
    <blockquote class="text-text-primary italic leading-relaxed mb-4">
      "{{ quote }}"
    </blockquote>
    <div class="flex items-center gap-3">
      <div v-if="photo" class="shrink-0 w-10 h-10 rounded-full overflow-hidden bg-surface-light">
        <SanityImage :asset-id="photo?.asset?._ref" class="w-full h-full object-cover" />
      </div>
      <div>
        <span class="font-medium text-sm text-text-primary">{{ studentName }}</span>
        <span
          v-if="discipline"
          class="ml-2 text-xs px-2 py-0.5 rounded-full font-medium bg-royal-purple/10 text-royal-purple"
        >
          {{ disciplineLabel }}
        </span>
      </div>
    </div>
  </div>
</template>
