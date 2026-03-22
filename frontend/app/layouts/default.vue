<script setup lang="ts">
import { siteSettingsQuery } from '~/queries/site.queries'

const { data: settings } = useSanityQuery(siteSettingsQuery)

useSchemaOrg([
  defineWebSite({
    name: settings.value?.siteTitle || 'PCT Movement',
    description: 'BJJ and Urban Kiz coaching through Perceptual Control Theory',
  }),
  defineWebPage(),
])
</script>

<template>
  <div class="min-h-screen flex flex-col bg-surface-light text-text-primary">
    <GlobalAppHeader :settings="settings" />
    <main class="flex-1">
      <slot />
    </main>
    <GlobalAppFooter :settings="settings" />
  </div>
</template>
