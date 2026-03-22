<script setup lang="ts">
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
    <section class="relative bg-royal-purple py-20 text-white">
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
              <h3 class="font-semibold text-text-primary mb-1">Email</h3>
              <a
                :href="`mailto:${settings.email}`"
                class="text-royal-purple hover:underline"
              >
                {{ settings.email }}
              </a>
            </div>

            <div v-if="settings?.phone">
              <h3 class="font-semibold text-text-primary mb-1">Phone</h3>
              <a
                :href="`tel:${settings.phone}`"
                class="text-royal-purple hover:underline"
              >
                {{ settings.phone }}
              </a>
            </div>

            <div v-if="settings?.location">
              <h3 class="font-semibold text-text-primary mb-1">Location</h3>
              <p class="text-text-secondary">{{ settings.location }}</p>
            </div>

            <div v-if="settings?.socialLinks?.length">
              <h3 class="font-semibold text-text-primary mb-3">Social</h3>
              <div class="flex gap-4">
                <a
                  v-for="link in settings.socialLinks"
                  :key="link.platform"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-royal-purple hover:text-royal-gold transition-colors font-medium"
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
