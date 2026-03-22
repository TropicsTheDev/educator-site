<script setup lang="ts">
defineProps<{
  settings: any
}>()

const sidebarVisible = ref(false)
const router = useRouter()

// Close sidebar on route change
router.afterEach(() => {
  sidebarVisible.value = false
})

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'BJJ', to: '/bjj' },
  { label: 'Dance', to: '/dance' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Portfolio', to: '/portfolio' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-royal-purple/10">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold text-royal-purple hover:text-royal-purple/80 transition-colors">
        {{ settings?.siteTitle || 'PCT Movement' }}
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-6" aria-label="Main navigation">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-sm font-medium text-text-secondary hover:text-royal-purple transition-colors"
          active-class="text-royal-purple"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 text-text-primary hover:text-royal-purple transition-colors"
        aria-label="Open menu"
        @click="sidebarVisible = true"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile sidebar -->
    <Teleport to="body">
      <Transition name="sidebar">
        <div v-if="sidebarVisible" class="fixed inset-0 z-[100]">
          <div class="absolute inset-0 bg-black/30" @click="sidebarVisible = false" />
          <nav class="absolute right-0 top-0 h-full w-72 bg-white shadow-xl p-6 flex flex-col" aria-label="Mobile navigation">
            <button
              class="self-end p-2 text-text-secondary hover:text-royal-purple mb-8"
              aria-label="Close menu"
              @click="sidebarVisible = false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="py-3 text-lg font-medium text-text-primary hover:text-royal-purple border-b border-surface-light transition-colors"
              active-class="text-royal-purple"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: opacity 0.2s ease;
}
.sidebar-enter-active nav,
.sidebar-leave-active nav {
  transition: transform 0.2s ease;
}
.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
}
.sidebar-enter-from nav,
.sidebar-leave-to nav {
  transform: translateX(100%);
}
</style>
