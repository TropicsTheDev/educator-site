<script setup lang="ts">
import BlogCard from './-components/BlogCard.vue'
import CategoryFilter from './-components/CategoryFilter.vue'
import { articleListQuery, categoriesQuery } from '~/queries/article.queries'

const selectedCategory = ref('')

const { data: articles } = useSanityQuery(articleListQuery)
const { data: categories } = useSanityQuery(categoriesQuery)

const filteredArticles = computed(() => {
  if (!articles.value) return []
  if (!selectedCategory.value) return articles.value
  return articles.value.filter(
    (a: any) => a.category?.slug === selectedCategory.value,
  )
})

useSeoMeta({
  title: 'Blog',
  description: 'Articles on teaching, learning, BJJ, dance, and Perceptual Control Theory.',
})
</script>

<template>
  <div class="py-16">
    <div class="max-w-4xl mx-auto px-4">
      <UiSectionHeading title="Blog" centered />

      <CategoryFilter
        v-if="categories?.length"
        :categories="categories"
        v-model="selectedCategory"
        class="mb-10 justify-center"
      />

      <div
        v-if="filteredArticles.length"
        class="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <BlogCard
          v-for="article in filteredArticles"
          :key="article._id"
          :article="article"
        />
      </div>

      <div v-else class="text-center py-20">
        <p class="text-text-secondary text-lg">
          No articles found{{ selectedCategory ? ' in this category' : '' }}.
        </p>
        <button
          v-if="selectedCategory"
          class="mt-4 text-royal-purple font-medium hover:underline"
          @click="selectedCategory = ''"
        >
          View all articles
        </button>
      </div>
    </div>
  </div>
</template>
