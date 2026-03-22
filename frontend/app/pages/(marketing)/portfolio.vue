<script setup lang="ts">
import ProjectCard from './-components/ProjectCard.vue'
import { projectsQuery } from '~/queries/site.queries'

const { data: projects } = useSanityQuery(projectsQuery)

useSeoMeta({
  title: 'Portfolio',
  ogTitle: 'Portfolio',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Portfolio</h1>
        <p class="text-xl text-gray-300">
          Web development projects and technical work
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4">
        <!-- Projects grid -->
        <div v-if="projects?.length" class="grid md:grid-cols-2 gap-8">
          <ProjectCard
            v-for="project in projects"
            :key="project._id"
            :project="project"
          />
        </div>

        <!-- Empty state -->
        <div v-else class="text-center py-20">
          <p class="text-text-secondary text-lg">
            No projects to display yet. Check back soon.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
