<script setup lang="ts">
const props = defineProps<{
  value: any
}>()
</script>

<template>
  <div v-if="value?.rows?.length" class="overflow-x-auto my-8">
    <table class="w-full border-collapse border border-border-theme">
      <tbody>
        <tr v-for="(row, rowIndex) in value.rows" :key="row._key || rowIndex">
          <td
            v-for="(cell, cellIndex) in row.cells"
            :key="cellIndex"
            class="border border-border-theme p-3 text-sm md:text-base text-text-main bg-surface-base"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
