<script setup lang="ts">
defineProps<{
  posts: Array<{
    _id: string
    title: string
    slug: string
    excerpt?: string
    featuredImage?: string
    publishDate?: string
  }>
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
  <section v-if="posts?.length" class="mt-16 pt-12 border-t border-border-theme">
    <h2 class="text-xl font-bold text-text-main mb-6">Related Posts</h2>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <NuxtLink
        v-for="post in posts.slice(0, 3)"
        :key="post._id"
        :to="`/blog/${post.slug}`"
        class="group block rounded-xl overflow-hidden bg-surface-raised border border-border-theme hover:border-border-theme transition-all duration-300"
      >
        <div v-if="post.featuredImage" class="aspect-video overflow-hidden">
          <img
            :src="post.featuredImage"
            :alt="post.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div v-else class="aspect-video bg-surface-overlay" />

        <div class="p-4">
          <h3 class="text-sm font-bold text-text-main group-hover:text-royal-gold transition-colors duration-300 mb-1 line-clamp-2">
            {{ post.title }}
          </h3>
          <span v-if="post.publishDate" class="text-xs text-text-faint">
            {{ formatDate(post.publishDate) }}
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
