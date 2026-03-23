<script setup lang="ts">
defineProps<{
  settings: any
}>()

const sidebarVisible = ref(false)
const linksVisible = ref(false)
const router = useRouter()
const colorMode = useColorMode()

router.afterEach(() => {
  sidebarVisible.value = false
})

watch(sidebarVisible, (val) => {
  if (val) {
    setTimeout(() => { linksVisible.value = true }, 100)
  } else {
    linksVisible.value = false
  }
})

function toggleColorMode() {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'BJJ', to: '/teach/bjj' },
  { label: 'Dance', to: '/teach/dance' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Portfolio', to: '/portfolio' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-surface-base/90 backdrop-blur-md border-b border-white/5 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold font-display text-royal-gold hover:text-royal-gold/80 transition-all duration-300">
        {{ settings?.siteTitle || 'PCT Movement' }}
      </NuxtLink>

      <div class="flex items-center gap-4">
        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium text-text-on-dark-muted hover:text-royal-gold transition-all duration-300"
            active-class="!text-royal-gold"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Color mode toggle -->
        <button
          class="p-2 text-text-on-dark-muted hover:text-royal-gold transition-all duration-300"
          aria-label="Toggle color mode"
          @click="toggleColorMode"
        >
          <!-- Sun icon (shown in dark mode → click to go light) -->
          <svg v-if="colorMode.value === 'dark'" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <!-- Moon icon (shown in light mode → click to go dark) -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden p-2 text-text-on-dark hover:text-royal-gold transition-all duration-300"
          aria-label="Open menu"
          @click="sidebarVisible = true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile sidebar -->
    <Teleport to="body">
      <Transition name="sidebar">
        <div v-if="sidebarVisible" class="fixed inset-0 z-[100]">
          <div class="absolute inset-0 bg-black/50" @click="sidebarVisible = false" />
          <nav class="absolute right-0 top-0 h-full w-72 bg-surface-raised p-6 flex flex-col" aria-label="Mobile navigation">
            <button
              class="self-end p-2 text-text-on-dark-muted hover:text-royal-gold mb-8 transition-all duration-300"
              aria-label="Close menu"
              @click="sidebarVisible = false"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <NuxtLink
              v-for="(link, index) in navLinks"
              :key="link.to"
              :to="link.to"
              :class="linksVisible ? 'nav-link-active' : 'nav-link-enter'"
              :style="{ transitionDelay: `${index * 50}ms` }"
              class="py-3 text-lg font-medium text-text-on-dark hover:text-royal-gold border-b border-white/5 transition-all duration-300"
              active-class="!text-royal-gold"
            >
              {{ link.label }}
            </NuxtLink>

            <!-- Social links & CTA -->
            <div class="mt-auto border-t border-white/5 pt-6">
              <div v-if="settings?.socialLinks" class="flex flex-wrap gap-4 mb-4">
                <a
                  v-for="social in settings.socialLinks"
                  :key="social.url"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-text-on-dark-faint hover:text-royal-gold transition-all duration-300 text-sm"
                >
                  {{ social.label || social.platform }}
                </a>
              </div>
              <NuxtLink
                to="/contact"
                class="block w-full text-center px-6 py-3 bg-royal-purple text-white font-medium rounded-xl hover:shadow-[0_0_20px_rgba(120,81,169,0.3)] transition-all duration-300"
              >
                Book a Session
              </NuxtLink>
            </div>
          </nav>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>

<style scoped>
.sidebar-enter-active,
.sidebar-leave-active {
  transition: opacity 0.3s ease;
}
.sidebar-enter-active nav,
.sidebar-leave-active nav {
  transition: transform 0.3s ease;
}
.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
}
.sidebar-enter-from nav,
.sidebar-leave-to nav {
  transform: translateX(100%);
}

.nav-link-enter {
  opacity: 0;
  transform: translateX(1rem);
}
.nav-link-active {
  opacity: 1;
  transform: translateX(0);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>
