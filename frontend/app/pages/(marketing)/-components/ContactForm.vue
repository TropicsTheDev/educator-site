<script setup lang="ts">
const formState = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const errorMessage = ref('')

const form = reactive({
  name: '',
  email: '',
  message: '',
  _honey: '', // honeypot
})

async function handleSubmit() {
  if (formState.value === 'submitting') return

  // Basic client validation
  if (!form.name || !form.email || form.message.length < 10) return

  formState.value = 'submitting'
  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { name: form.name, email: form.email, message: form.message, _honey: form._honey },
    })
    formState.value = 'success'
  } catch (e: any) {
    formState.value = 'error'
    errorMessage.value = e?.data?.message || 'Failed to send message. Please try again.'
  }
}
</script>

<template>
  <div>
    <!-- Success message -->
    <div
      v-if="formState === 'success'"
      class="rounded-lg bg-green-50 border border-green-200 p-6 text-center"
    >
      <p class="text-green-800 font-semibold text-lg mb-1">Message sent!</p>
      <p class="text-green-700">Thank you for reaching out. I'll get back to you soon.</p>
    </div>

    <!-- Form -->
    <form v-else @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Honeypot - hidden from humans -->
      <div class="absolute -left-[9999px]" aria-hidden="true">
        <label for="contact-honey">Leave this empty</label>
        <input
          id="contact-honey"
          v-model="form._honey"
          type="text"
          tabindex="-1"
          autocomplete="off"
        />
      </div>

      <div>
        <label for="contact-name" class="block text-sm font-medium text-text-primary mb-1">
          Name <span class="text-red-500">*</span>
        </label>
        <input
          id="contact-name"
          v-model="form.name"
          type="text"
          required
          class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-text-primary
                 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition"
          placeholder="Your name"
        />
      </div>

      <div>
        <label for="contact-email" class="block text-sm font-medium text-text-primary mb-1">
          Email <span class="text-red-500">*</span>
        </label>
        <input
          id="contact-email"
          v-model="form.email"
          type="email"
          required
          class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-text-primary
                 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label for="contact-message" class="block text-sm font-medium text-text-primary mb-1">
          Message <span class="text-red-500">*</span>
          <span class="text-text-secondary font-normal">(min 10 characters)</span>
        </label>
        <textarea
          id="contact-message"
          v-model="form.message"
          required
          rows="5"
          class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-text-primary
                 focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 outline-none transition resize-y"
          placeholder="How can I help you?"
        />
      </div>

      <!-- Error message -->
      <div
        v-if="formState === 'error'"
        class="rounded-lg bg-red-50 border border-red-200 p-4"
      >
        <p class="text-red-700 text-sm">{{ errorMessage }}</p>
      </div>

      <button
        type="submit"
        :disabled="formState === 'submitting'"
        class="w-full rounded-lg bg-royal-purple px-6 py-3 text-white font-semibold
               hover:bg-royal-purple/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ formState === 'submitting' ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </div>
</template>
