<script setup lang="ts">
import RelatedPosts from './-components/RelatedPosts.vue'
import { articleDetailQuery } from '~/queries/article.queries'

const route = useRoute()

const { data } = useSanityQuery(articleDetailQuery, { slug: route.params.slug })

const article = computed(() => data.value)

watch(article, (val) => {
  if (val === null) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found' })
  }
}, { immediate: true })

const discipline = computed(() => {
  const slug = article.value?.category?.slug
  if (slug === 'bjj' || slug === 'jiu-jitsu') return 'bjj'
  if (slug === 'dance' || slug === 'kiz') return 'kiz'
  return undefined
})

useSeoFromSanity(computed(() =>
  article.value
    ? { ...article.value.seo, title: article.value.title }
    : null,
))

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <article v-if="article" class="py-16">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Header -->
      <header class="mb-10">
        <div class="flex items-center gap-3 mb-4">
          <span
            v-if="article.category"
            class="text-xs font-medium px-2.5 py-0.5 rounded-full bg-royal-purple/15 text-royal-purple"
          >
            {{ article.category.title }}
          </span>
          <span v-if="article.publishDate" class="text-sm text-text-on-dark-muted">
            {{ formatDate(article.publishDate) }}
          </span>
        </div>

        <h1 class="text-3xl md:text-4xl font-bold text-text-on-dark mb-4">
          {{ article.title }}
        </h1>

        <p v-if="article.excerpt" class="text-lg text-text-on-dark-muted">
          {{ article.excerpt }}
        </p>
      </header>

      <!-- Featured Image -->
      <div v-if="article.featuredImage" class="mb-10 rounded-xl overflow-hidden">
        <img
          :src="article.featuredImage"
          :alt="article.title"
          class="w-full object-cover"
        />
      </div>

      <!-- Body -->
      <div class="prose prose-lg max-w-none">
        <SanityContent :value="article.body" />
      </div>

      <!-- Discipline CTA -->
      <UiDisciplineCTA v-if="discipline" :discipline="discipline" />

      <!-- Related Posts -->
      <RelatedPosts :posts="article.relatedPosts || []" />
    </div>
  </article>
</template>
