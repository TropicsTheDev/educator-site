<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value?: {
    asset?: {
      _ref?: string
    }
    alt?: string
  }
}>()

const assetId = computed(() => props.value?.asset?._ref)
</script>

<template>
  <SanityImage
    v-if="assetId"
    :asset-id="assetId"
    :alt="value?.alt || ''"
    auto="format"
    class="rounded-xl my-8 max-w-full h-auto mx-auto border border-border-theme shadow-sm"
  />
</template>
