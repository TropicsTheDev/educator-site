<script setup lang="ts">
defineProps<{
  article: {
    title: string
    slug: string
    excerpt?: string
    publishDate?: string
    featuredImage?: string
    category?: { title: string; slug: string }
  }
}>()

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
    class="group block rounded-lg overflow-hidden bg-white border border-royal-purple/10 shadow-sm hover:shadow-md transition-shadow"
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
      class="aspect-video bg-royal-purple/5 flex items-center justify-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-12 w-12 text-royal-purple/20"
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
          class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-royal-purple/10 text-royal-purple"
        >
          {{ article.category.title }}
        </span>
        <span v-if="article.publishDate" class="text-xs text-text-secondary">
          {{ formatDate(article.publishDate) }}
        </span>
      </div>

      <h3 class="text-lg font-bold text-text-primary group-hover:text-royal-purple transition-colors mb-2">
        {{ article.title }}
      </h3>

      <p v-if="article.excerpt" class="text-sm text-text-secondary line-clamp-3">
        {{ article.excerpt }}
      </p>
    </div>
  </NuxtLink>
</template>
