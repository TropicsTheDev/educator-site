<script setup lang="ts">
const props = defineProps<{
  value: any
}>()
</script>

<template>
  <div v-if="value?.rows?.length" class="overflow-x-auto my-8 border-2 border-royal-purple p-4 rounded-lg bg-surface-raised/50">
    <div class="text-xs text-royal-purple mb-2 font-bold uppercase tracking-wider">Table Data Detected</div>
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
  <div v-else class="p-4 border-2 border-dashed border-text-faint rounded-lg my-8 text-center text-text-faint">
    <p class="font-bold">Table Block</p>
    <p class="text-sm">Structure: {{ JSON.stringify(value).substring(0, 100) }}...</p>
    <p v-if="!value?.rows" class="text-xs mt-2 text-royal-orange">Warning: No 'rows' property found in table value.</p>
  </div>
</template>
