<script setup lang="ts">
const error = useError()
const is404 = computed(() => error.value?.statusCode === 404)
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface-base text-text-on-dark">
    <div class="flex-1 flex items-center justify-center px-4">
      <div class="text-center max-w-lg">
        <p class="text-royal-gold text-6xl font-bold mb-4">
          {{ error?.statusCode || 500 }}
        </p>
        <h1 class="text-2xl font-bold text-text-on-dark mb-4">
          {{ is404 ? 'Page not found' : 'Something went wrong' }}
        </h1>
        <p class="text-text-on-dark-muted mb-8">
          {{ is404 ? "The page you're looking for doesn't exist or has been moved." : 'An unexpected error occurred. Please try again.' }}
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink to="/" class="px-6 py-3 bg-royal-purple text-white rounded-xl font-medium hover:bg-royal-purple/90 transition-all duration-300">
            Go Home
          </NuxtLink>
          <NuxtLink to="/teach/bjj" class="px-6 py-3 border border-white/10 text-text-on-dark-muted rounded-xl font-medium hover:border-white/20 hover:text-text-on-dark transition-all duration-300">
            BJJ
          </NuxtLink>
          <NuxtLink to="/teach/dance" class="px-6 py-3 border border-white/10 text-text-on-dark-muted rounded-xl font-medium hover:border-white/20 hover:text-text-on-dark transition-all duration-300">
            Urban Kiz
          </NuxtLink>
          <NuxtLink to="/portfolio" class="px-6 py-3 border border-white/10 text-text-on-dark-muted rounded-xl font-medium hover:border-white/20 hover:text-text-on-dark transition-all duration-300">
            Portfolio
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
