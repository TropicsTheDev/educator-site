<script setup lang="ts">
import ComparisonRow from './ComparisonRow.vue'

const props = defineProps<{
  items: Array<{ positive: string; negative: string }>
  discipline: 'bjj' | 'kiz'
}>()

const accentColor = computed(() => props.discipline === 'bjj' ? 'green' as const : 'orange' as const)
</script>

<template>
  <div class="space-y-3">
    <ComparisonRow
      v-for="(item, i) in items"
      :key="i"
      :positive="item.positive"
      :negative="item.negative"
      :accent-color="accentColor"
    />
  </div>
</template>
