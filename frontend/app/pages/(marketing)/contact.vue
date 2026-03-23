<script setup lang="ts">
import { Envelope, Phone, MapIcon } from '@boxicons/vue'
import ContactForm from './-components/ContactForm.vue'

const { data: settings } = useSiteSettings()

useSeoMeta({
  title: 'Contact',
  ogTitle: 'Contact',
})
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-royal-purple/20 to-surface-base py-20 text-text-on-dark">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
      </div>
    </section>

    <section class="py-16">
      <div class="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <UiSectionHeading title="Send a Message" />
          <ContactForm />
        </div>

        <!-- Contact Info -->
        <div>
          <UiSectionHeading title="Contact Info" />
          <div class="space-y-6">
            <div v-if="settings?.email">
              <h3 class="font-semibold text-text-on-dark mb-1">Email</h3>
              <a
                :href="`mailto:${settings.email}`"
                class="text-royal-gold hover:underline flex items-start gap-2"
              >
                <Envelope class="w-4 h-4 shrink-0 mt-0.5" />
                {{ settings.email }}
              </a>
            </div>

            <div v-if="settings?.phone">
              <h3 class="font-semibold text-text-on-dark mb-1">Phone</h3>
              <a
                :href="`tel:${settings.phone}`"
                class="text-royal-gold hover:underline flex items-start gap-2"
              >
                <Phone class="w-4 h-4 shrink-0 mt-0.5" />
                {{ settings.phone }}
              </a>
            </div>

            <div v-if="settings?.location">
              <h3 class="font-semibold text-text-on-dark mb-1">Location</h3>
              <p class="text-text-on-dark-muted flex items-start gap-2">
                <MapIcon class="w-4 h-4 shrink-0 mt-0.5" />
                {{ settings.location }}
              </p>
            </div>

            <div v-if="settings?.socialLinks?.length">
              <h3 class="font-semibold text-text-on-dark mb-3">Social</h3>
              <div class="flex gap-4">
                <a
                  v-for="link in settings.socialLinks"
                  :key="link.platform"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-royal-purple hover:text-royal-gold transition-colors duration-300 font-medium"
                >
                  {{ link.platform }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
