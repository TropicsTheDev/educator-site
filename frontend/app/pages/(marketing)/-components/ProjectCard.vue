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
  <div class="rounded-xl border border-white/5 overflow-hidden bg-surface-raised hover:border-white/10 transition-all duration-300">
    <!-- Image -->
    <div v-if="project.featuredImage" class="aspect-video bg-surface-overlay">
      <SanityImage
        :asset-id="project.featuredImage.asset?._ref || project.featuredImage"
        auto="format"
        :width="600"
        :height="340"
        class="w-full h-full object-cover"
        :alt="project.title"
      />
    </div>
    <div v-else class="aspect-video bg-surface-overlay flex items-center justify-center">
      <span class="text-text-on-dark-faint text-sm">No image</span>
    </div>

    <div class="p-5">
      <!-- Title -->
      <h3 class="text-lg font-bold text-text-on-dark mb-2">
        {{ project.title }}
      </h3>

      <!-- Description -->
      <p v-if="project.description" class="text-text-on-dark-muted text-sm mb-4 line-clamp-3">
        {{ project.description }}
      </p>

      <!-- Tech stack -->
      <div v-if="project.techStack?.length" class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.techStack"
          :key="tech"
          class="text-xs font-medium px-2.5 py-1 rounded-full bg-surface-overlay text-text-on-dark-muted"
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
          class="text-sm font-medium text-royal-purple hover:text-royal-gold transition-colors duration-300"
        >
          Live Site &rarr;
        </a>
        <a
          v-if="project.sourceUrl"
          :href="project.sourceUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm font-medium text-text-on-dark-muted hover:text-text-on-dark transition-colors duration-300"
        >
          Source Code
        </a>
      </div>
    </div>
  </div>
</template>
