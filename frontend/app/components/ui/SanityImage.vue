<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  asset?: {
    _ref?: string
  }
  alt?: string
}>()

const assetId = computed(() => props.asset?._ref)
</script>

<template>
  <SanityImage
    v-if="assetId"
    :asset-id="assetId"
    :alt="alt || ''"
    auto="format"
    class="rounded-xl my-8 max-w-full h-auto mx-auto border border-border-theme shadow-sm"
  />
</template>
