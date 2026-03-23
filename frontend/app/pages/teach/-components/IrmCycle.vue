<script setup lang="ts">
import IrmStepCard from './IrmStepCard.vue'

const props = defineProps<{
  steps: Array<{
    stepNumber: number
    title: string
    description: string
    aside?: string
  }>
  discipline: 'bjj' | 'kiz'
}>()

const accentColor = computed(() => props.discipline === 'bjj' ? 'green' as const : 'orange' as const)
</script>

<template>
  <div class="relative">
    <!-- Vertical timeline line (desktop only) -->
    <div
      class="hidden md:block absolute left-6 top-0 bottom-0 w-px"
      :class="discipline === 'bjj' ? 'bg-royal-green/20' : 'bg-royal-orange/20'"
    />

    <div class="space-y-6 md:space-y-10">
      <div v-for="step in steps" :key="step.stepNumber" class="md:pl-16 relative">
        <!-- Timeline dot (desktop only) -->
        <div
          class="hidden md:flex absolute left-3.5 top-8 w-5 h-5 rounded-full border-2 bg-surface-base items-center justify-center"
          :class="discipline === 'bjj' ? 'border-royal-green' : 'border-royal-orange'"
        >
          <div
            class="w-2 h-2 rounded-full"
            :class="discipline === 'bjj' ? 'bg-royal-green' : 'bg-royal-orange'"
          />
        </div>

        <IrmStepCard
          :step-number="step.stepNumber"
          :title="step.title"
          :description="step.description"
          :aside="step.aside"
          :accent-color="accentColor"
        />
      </div>
    </div>
  </div>
</template>
