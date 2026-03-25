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

const leftBorderClass = computed(() => {
  if (props.discipline === 'bjj') return 'border-l-2 border-l-royal-green'
  if (props.discipline === 'kiz') return 'border-l-2 border-l-royal-orange'
  return ''
})

const badgeClass = computed(() => {
  if (props.discipline === 'bjj') return 'bg-royal-green/10 text-royal-green'
  if (props.discipline === 'kiz') return 'bg-royal-orange/10 text-royal-orange'
  return 'bg-royal-purple/10 text-royal-purple'
})
</script>

<template>
  <div :class="['bg-surface-raised rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300', leftBorderClass]">
    <blockquote class="text-text-on-dark italic leading-relaxed mb-4">
      "{{ quote }}"
    </blockquote>
    <div class="flex items-center gap-3">
      <div v-if="photo" class="shrink-0 w-10 h-10 rounded-full overflow-hidden bg-surface-overlay">
        <SanityImage :asset-id="photo?.asset?._ref" class="w-full h-full object-cover" />
      </div>
      <div>
        <span class="font-medium text-sm text-text-on-dark">{{ studentName }}</span>
        <Tag
          v-if="discipline"
          :value="disciplineLabel"
          :pt="{ root: { class: ['ml-2 text-xs px-2 py-0.5 rounded-full font-medium', badgeClass] } }"
        />
      </div>
    </div>
  </div>
</template>
