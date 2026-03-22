<script setup lang="ts">
import { aboutPageQuery } from '~/queries/site.queries'

const { data: aboutData } = useSanityQuery(aboutPageQuery)

useSeoMeta({
  title: 'About',
  ogTitle: 'About',
})

useSchemaOrg([
  definePerson({
    name: () => aboutData.value?.bio ? 'Coach' : '',
    description: () => aboutData.value?.methodologyDescription?.[0]?.children?.[0]?.text || '',
  }),
])
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-royal-purple py-20 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">About</h1>
      </div>
      <img
        v-if="aboutData?.heroImage"
        :src="aboutData.heroImage"
        alt="About"
        class="absolute inset-0 w-full h-full object-cover opacity-20"
      />
    </section>

    <!-- Bio -->
    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading title="Bio" />
        <div v-if="aboutData?.bio" class="prose prose-lg max-w-none text-text-secondary">
          <SanityContent :value="aboutData.bio" />
        </div>
      </div>
    </section>

    <!-- Methodology -->
    <section v-if="aboutData?.methodologyDescription" class="py-16 bg-surface-light">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading title="Methodology" />
        <div class="prose prose-lg max-w-none text-text-secondary">
          <SanityContent :value="aboutData.methodologyDescription" />
        </div>
      </div>
    </section>

    <!-- Credentials -->
    <section v-if="aboutData?.credentials?.length" class="py-16">
      <div class="max-w-4xl mx-auto px-4">
        <UiSectionHeading title="Credentials" />
        <ul class="space-y-4">
          <li
            v-for="(credential, index) in aboutData.credentials"
            :key="index"
            class="flex items-start gap-3"
          >
            <span class="mt-1 flex-shrink-0 h-2 w-2 rounded-full bg-royal-gold" />
            <span class="text-text-secondary text-lg">{{ credential }}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
