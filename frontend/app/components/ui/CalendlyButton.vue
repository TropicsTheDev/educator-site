<script setup lang="ts">
const props = defineProps<{
  calendlyUrl: string
  label?: string
}>()

const state = ref<'idle' | 'loading' | 'ready' | 'open'>('idle')

function loadCalendlyScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if ((window as any).Calendly) {
      resolve()
      return
    }
    // Check if script tag already exists
    const existing = document.querySelector('script[src*="calendly"]')
    if (existing) {
      existing.addEventListener('load', () => resolve())
      return
    }
    // Load CSS
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    // Load JS
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Calendly'))
    document.head.appendChild(script)
  })
}

function preloadCalendlyCSS() {
  if (document.querySelector('link[href*="calendly"]')) return
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'style'
  link.href = 'https://assets.calendly.com/assets/external/widget.css'
  document.head.appendChild(link)
}

async function handleClick(e: Event) {
  if (state.value === 'loading' || state.value === 'open') {
    e.preventDefault()
    return
  }

  e.preventDefault()
  state.value = 'loading'

  try {
    await loadCalendlyScript()
    state.value = 'ready'
    ;(window as any).Calendly.initPopupWidget({ url: props.calendlyUrl })
    state.value = 'open'
  } catch {
    // Fallback: open the URL directly
    state.value = 'idle'
    window.open(props.calendlyUrl, '_blank')
  }
}

onUnmounted(() => {
  // Close popup if open when navigating away
  if (state.value === 'open' && (window as any).Calendly) {
    try {
      (window as any).Calendly.closePopupWidget()
    } catch {}
  }
  state.value = 'idle'
})
</script>

<template>
  <a
    :href="calendlyUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center gap-2 px-6 py-3 bg-royal-purple text-white font-medium rounded-xl hover:bg-royal-purple/90 hover:shadow-[0_0_20px_rgba(120,81,169,0.3)] transition-all duration-300"
    :class="{ 'opacity-70 cursor-wait': state === 'loading' }"
    @click="handleClick"
    @mouseenter="preloadCalendlyCSS"
    @focusin="preloadCalendlyCSS"
  >
    <svg v-if="state === 'loading'" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
    {{ label || 'Book a Session' }}
  </a>
</template>
