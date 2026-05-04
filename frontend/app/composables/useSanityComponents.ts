import { resolveComponent } from 'vue'

export function useSanityComponents() {
  return {
    types: {
      table: resolveComponent('UiSanityTable'),
    },
  }
}
