<script setup lang="ts">
import { Calendar } from '@boxicons/vue'

const props = defineProps<{
  article: {
    title: string
    slug: string
    excerpt?: string
    publishDate?: string
    featuredImage?: string
    category?: { title: string; slug: string; discipline?: string }
  }
}>()

const { badge: badgeClass } = useDisciplineColor(computed(() => props.article.category?.discipline))

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <NuxtLink
    :to="`/blog/${article.slug}`"
    class="group block rounded-xl overflow-hidden bg-surface-raised border border-white/5 hover:border-white/10 transition-all duration-300"
  >
    <div v-if="article.featuredImage" class="aspect-video overflow-hidden">
      <img
        :src="article.featuredImage"
        :alt="article.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div
      v-else
      class="aspect-video bg-surface-overlay flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 text-text-on-dark-faint"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M16 2v4M8 2v4M3 10h18"
        />
      </svg>
    </div>

    <div class="p-5">
      <div class="flex items-center gap-3 mb-3">
        <span
          v-if="article.category"
          :class="['text-xs font-medium px-2.5 py-0.5 rounded-full', badgeClass]"
        >
          {{ article.category.title }}
        </span>
        <span v-if="article.publishDate" class="text-xs text-text-on-dark-faint flex items-center gap-1.5">
          <Calendar class="w-3.5 h-3.5 shrink-0" />
          {{ formatDate(article.publishDate) }}
        </span>
      </div>

      <h3 class="text-lg font-bold text-text-on-dark group-hover:text-royal-gold transition-colors duration-300 mb-2">
        {{ article.title }}
      </h3>

      <p v-if="article.excerpt" class="text-sm text-text-on-dark-muted line-clamp-3">
        {{ article.excerpt }}
      </p>
    </div>
  </NuxtLink>
</template>
