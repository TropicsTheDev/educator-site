<script setup lang="ts">
defineProps<{
  testimonials: Array<Record<string, unknown>>
}>()
</script>

<template>
  <section v-if="testimonials.length" class="py-16">
    <div class="max-w-4xl mx-auto px-4">
      <UiSectionHeading title="What Students Say" />
      <div class="grid gap-8 md:grid-cols-2 mt-8">
        <UiTestimonialCard
          v-for="testimonial in testimonials"
          :key="(testimonial._id as string)"
          :testimonial="testimonial"
        />
      </div>
    </div>
  </section>
</template>
