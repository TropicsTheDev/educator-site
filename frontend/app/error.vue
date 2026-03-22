<script setup lang="ts">
const error = useError()
const is404 = computed(() => error.value?.statusCode === 404)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface-light text-text-primary">
    <div class="flex-1 flex items-center justify-center px-4">
      <div class="text-center max-w-lg">
        <p class="text-royal-purple text-6xl font-bold mb-4">
          {{ error?.statusCode || 500 }}
        </p>
        <h1 class="text-2xl font-bold mb-4">
          {{ is404 ? 'Page not found' : 'Something went wrong' }}
        </h1>
        <p class="text-text-secondary mb-8">
          {{ is404 ? "The page you're looking for doesn't exist or has been moved." : 'An unexpected error occurred. Please try again.' }}
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/" class="px-6 py-3 bg-royal-purple text-white rounded-md font-medium hover:bg-royal-purple/90 transition-colors">
            Go Home
          </NuxtLink>
          <NuxtLink to="/bjj" class="px-6 py-3 border border-royal-purple text-royal-purple rounded-md font-medium hover:bg-royal-purple/5 transition-colors">
            BJJ
          </NuxtLink>
          <NuxtLink to="/dance" class="px-6 py-3 border border-royal-purple text-royal-purple rounded-md font-medium hover:bg-royal-purple/5 transition-colors">
            Urban Kiz
          </NuxtLink>
          <NuxtLink to="/portfolio" class="px-6 py-3 border border-text-secondary text-text-secondary rounded-md font-medium hover:bg-surface-dark/5 transition-colors">
            Portfolio
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
