import type { MaybeRef } from 'vue'

export function useSeoFromSanity(
  fields: MaybeRef<{
    title?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    ogImage?: any | null
  } | null>
) {
  const resolved = toRef(fields)

  useSeoMeta({
    title: () => resolved.value?.metaTitle || resolved.value?.title || '',
    ogTitle: () => resolved.value?.metaTitle || resolved.value?.title || '',
    description: () => resolved.value?.metaDescription || '',
    ogDescription: () => resolved.value?.metaDescription || '',
  })
}
