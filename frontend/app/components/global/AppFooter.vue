<script setup lang="ts">
defineProps<{
  settings: any
}>()

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-surface-dark text-white py-16">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-12">
        <!-- Brand -->
        <div>
          <h3 class="text-lg font-bold text-royal-gold mb-4">
            {{ settings?.siteTitle || 'PCT Movement' }}
          </h3>
          <p class="text-white/70 text-sm leading-relaxed">
            Teaching BJJ and Urban Kiz through Perceptual Control Theory and the Iterative Reorganization Method.
          </p>
        </div>

        <!-- Quick links -->
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">Navigate</h4>
          <div class="flex flex-col gap-2">
            <NuxtLink to="/bjj" class="text-sm text-white/70 hover:text-royal-gold transition-colors">BJJ Coaching</NuxtLink>
            <NuxtLink to="/dance" class="text-sm text-white/70 hover:text-royal-gold transition-colors">Urban Kiz</NuxtLink>
            <NuxtLink to="/blog" class="text-sm text-white/70 hover:text-royal-gold transition-colors">Blog</NuxtLink>
            <NuxtLink to="/about" class="text-sm text-white/70 hover:text-royal-gold transition-colors">About</NuxtLink>
            <NuxtLink to="/contact" class="text-sm text-white/70 hover:text-royal-gold transition-colors">Contact</NuxtLink>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-sm font-bold uppercase tracking-wider text-white/50 mb-4">Contact</h4>
          <div class="flex flex-col gap-2 text-sm text-white/70">
            <a v-if="settings?.email" :href="`mailto:${settings.email}`" class="hover:text-royal-gold transition-colors">
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
              class="text-white/50 hover:text-royal-gold transition-colors text-sm"
            >
              {{ social.platform }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
        &copy; {{ currentYear }} {{ settings?.coachName || 'PCT Movement' }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>
