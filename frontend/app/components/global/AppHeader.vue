<script setup lang="ts">
import { Sun, Moon, Menu, X } from '@boxicons/vue'

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
  { label: 'Dance', to: '/teach/kiz' },
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
        <Button
          :pt="{ root: { class: 'p-2 text-text-on-dark-muted hover:text-royal-gold transition-all duration-300' } }"
          aria-label="Toggle color mode"
          @click="toggleColorMode"
        >
          <Sun v-if="colorMode.value === 'dark'" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </Button>

        <!-- Mobile hamburger -->
        <Button
          :pt="{ root: { class: 'md:hidden p-2 text-text-on-dark hover:text-royal-gold transition-all duration-300' } }"
          aria-label="Open menu"
          @click="sidebarVisible = true"
        >
          <Menu class="w-6 h-6" />
        </Button>
      </div>
    </div>

    <!-- Mobile sidebar -->
    <Teleport to="body">
      <Transition name="sidebar">
        <div v-if="sidebarVisible" class="fixed inset-0 z-[100]">
          <div class="absolute inset-0 bg-black/50" @click="sidebarVisible = false" />
          <nav class="absolute right-0 top-0 h-full w-72 bg-surface-raised p-6 flex flex-col" aria-label="Mobile navigation">
            <Button
              :pt="{ root: { class: 'self-end p-2 text-text-on-dark-muted hover:text-royal-gold mb-8 transition-all duration-300' } }"
              aria-label="Close menu"
              @click="sidebarVisible = false"
            >
              <X class="w-6 h-6" />
            </Button>
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
