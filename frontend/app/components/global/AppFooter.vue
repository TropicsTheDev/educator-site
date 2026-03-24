<script setup lang="ts">
defineProps<{
  settings: any
}>()

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-surface-base border-t border-white/5 text-text-on-dark py-16">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-12">
        <!-- Brand -->
        <div>
          <h3 class="text-lg font-bold text-royal-gold mb-4">
            {{ settings?.siteTitle || 'PCT Movement' }}
          </h3>
          <p class="text-text-on-dark-muted text-sm leading-relaxed">
            Teaching BJJ and Urban Kiz through Perceptual Control Theory and the Iterative Reorganization Method.
          </p>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-text-on-dark-faint mb-4">Navigate</h4>
          <div class="flex flex-col gap-2">
            <NuxtLink to="/teach/bjj" class="text-sm text-text-on-dark-muted hover:text-royal-gold transition-all duration-300">BJJ Coaching</NuxtLink>
            <NuxtLink to="/teach/kiz" class="text-sm text-text-on-dark-muted hover:text-royal-gold transition-all duration-300">Urban Kiz</NuxtLink>
            <NuxtLink to="/blog" class="text-sm text-text-on-dark-muted hover:text-royal-gold transition-all duration-300">Blog</NuxtLink>
            <NuxtLink to="/about" class="text-sm text-text-on-dark-muted hover:text-royal-gold transition-all duration-300">About</NuxtLink>
            <NuxtLink to="/contact" class="text-sm text-text-on-dark-muted hover:text-royal-gold transition-all duration-300">Contact</NuxtLink>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-text-on-dark-faint mb-4">Contact</h4>
          <div class="flex flex-col gap-2 text-sm text-text-on-dark-muted">
            <a v-if="settings?.email" :href="`mailto:${settings.email}`" class="hover:text-royal-gold transition-all duration-300">
              {{ settings.email }}
            </a>
            <p v-if="settings?.location">{{ settings.location }}</p>
          </div>
          <div v-if="settings?.socialLinks?.length" class="flex gap-4 mt-4">
            <a
              v-for="(social, i) in settings.socialLinks"
              :key="i"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-text-on-dark-faint hover:text-royal-gold transition-all duration-300 text-sm"
            >
              {{ social.platform }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-white/5 text-center text-sm text-text-on-dark-faint">
        &copy; {{ currentYear }} {{ settings?.coachName || 'PCT Movement' }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
