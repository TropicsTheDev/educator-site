<script setup lang="ts">
defineProps<{
  project: {
    _id: string
    title: string
    description?: string
    featuredImage?: any
    techStack?: string[]
    liveUrl?: string
    sourceUrl?: string
    featured?: boolean
  }
}>()
</script>

<template>
  <div class="rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
    <!-- Image -->
    <div v-if="project.featuredImage" class="aspect-video bg-gray-100">
      <SanityImage
        :asset-id="project.featuredImage.asset?._ref || project.featuredImage"
        auto="format"
        :width="600"
        :height="340"
        class="w-full h-full object-cover"
        :alt="project.title"
      />
    </div>
    <div v-else class="aspect-video bg-gray-100 flex items-center justify-center">
      <span class="text-gray-400 text-sm">No image</span>
    </div>

    <div class="p-5">
      <!-- Title -->
      <h3 class="text-lg font-bold text-text-primary mb-2">
        {{ project.title }}
      </h3>

      <!-- Description -->
      <p v-if="project.description" class="text-text-secondary text-sm mb-4 line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tech stack -->
      <div v-if="project.techStack?.length" class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.techStack"
          :key="tech"
          class="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-700"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Links -->
      <div class="flex gap-4">
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-royal-purple hover:underline"
        >
          Live Site &rarr;
        </a>
        <a
          v-if="project.sourceUrl"
          :href="project.sourceUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-gray-600 hover:underline"
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
</template>
