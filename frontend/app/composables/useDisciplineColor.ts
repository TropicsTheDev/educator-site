export function useDisciplineColor(discipline: MaybeRef<string | undefined | null>) {
  const resolved = toRef(discipline)

  const badge = computed(() => {
    switch (resolved.value) {
      case 'bjj': return 'bg-royal-green/15 text-royal-green'
      case 'kiz': return 'bg-royal-orange/15 text-royal-orange'
      default: return 'bg-royal-purple/15 text-royal-purple'
    }
  })

  const accent = computed(() => {
    switch (resolved.value) {
      case 'bjj': return 'text-royal-green'
      case 'kiz': return 'text-royal-orange'
      default: return 'text-royal-purple'
    }
  })

  const border = computed(() => {
    switch (resolved.value) {
      case 'bjj': return 'border-royal-green'
      case 'kiz': return 'border-royal-orange'
      default: return 'border-royal-purple'
    }
  })

  return { badge, accent, border }
}
