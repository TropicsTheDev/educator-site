<script setup lang="ts">
import { Send } from '@boxicons/vue'

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
    <Message
      v-if="formState === 'success'"
      severity="success"
      :closable="false"
      :pt="{
        root: { class: 'rounded-xl bg-royal-green/10 border border-royal-green/20 p-6 text-center' },
        icon: { class: 'hidden' },
      }"
    >
      <div>
        <p class="text-royal-green font-semibold text-lg mb-1">Message sent!</p>
        <p class="text-royal-green">Thank you for reaching out. I'll get back to you soon.</p>
      </div>
    </Message>

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
        <label for="contact-name" class="block text-sm font-medium text-text-on-dark mb-1">
          Name <span class="text-red-500">*</span>
        </label>
        <InputText
          id="contact-name"
          v-model="form.name"
          type="text"
          required
          :pt="{
            root: { class: 'w-full bg-surface-raised border border-white/10 text-text-on-dark placeholder:text-text-on-dark-faint focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 rounded-xl outline-none transition-all duration-300 px-4 py-2.5' }
          }"
          placeholder="Your name"
        />
      </div>

      <div>
        <label for="contact-email" class="block text-sm font-medium text-text-on-dark mb-1">
          Email <span class="text-red-500">*</span>
        </label>
        <InputText
          id="contact-email"
          v-model="form.email"
          type="email"
          required
          :pt="{
            root: { class: 'w-full bg-surface-raised border border-white/10 text-text-on-dark placeholder:text-text-on-dark-faint focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 rounded-xl outline-none transition-all duration-300 px-4 py-2.5' }
          }"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label for="contact-message" class="block text-sm font-medium text-text-on-dark mb-1">
          Message <span class="text-red-500">*</span>
          <span class="text-text-on-dark-muted font-normal">(min 10 characters)</span>
        </label>
        <Textarea
          id="contact-message"
          v-model="form.message"
          required
          :rows="5"
          :pt="{
            root: { class: 'w-full bg-surface-raised border border-white/10 text-text-on-dark placeholder:text-text-on-dark-faint focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/20 rounded-xl outline-none transition-all duration-300 px-4 py-2.5 resize-y' }
          }"
          placeholder="How can I help you?"
        />
      </div>

      <!-- Error message -->
      <Message
        v-if="formState === 'error'"
        severity="error"
        :closable="false"
        :pt="{
          root: { class: 'rounded-xl bg-royal-orange/10 border border-royal-orange/20 p-4' },
          icon: { class: 'hidden' },
        }"
      >
        <p class="text-royal-orange text-sm">{{ errorMessage }}</p>
      </Message>

      <Button
        type="submit"
        :disabled="formState === 'submitting'"
        :pt="{
          root: { class: 'w-full rounded-xl bg-royal-purple px-6 py-3 text-white font-semibold hover:bg-royal-purple/90 hover:shadow-[0_0_20px_rgba(120,81,169,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2' }
        }"
      >
        <svg v-if="formState === 'submitting'" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        {{ formState === 'submitting' ? 'Sending...' : 'Send Message' }}
        <Send v-if="formState !== 'submitting'" class="w-4 h-4" />
      </Button>
    </form>
  </div>
</template>
