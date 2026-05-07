import UiSanityTable from '../components/ui/SanityTable.vue'
import UiSanityImage from '../components/ui/SanityImage.vue'

export function useSanityComponents() {
  return {
    types: {
      table: UiSanityTable,
      image: UiSanityImage,
    },
  }
}
