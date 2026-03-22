<script setup lang="ts">
defineProps<{
  methodology: unknown[]
}>()
</script>

<template>
  <section class="py-16">
    <div class="max-w-4xl mx-auto px-4">
      <SectionHeading title="Methodology" />
      <div class="prose prose-lg max-w-none text-text-primary">
        <SanityContent :value="methodology" />
      </div>
    </div>
  </section>
</template>
