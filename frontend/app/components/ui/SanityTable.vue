<script setup lang="ts">
interface TableRow {
  _type: 'tableRow'
  _key: string
  cells: string[]
}

interface TableValue {
  _type: 'table'
  rows: TableRow[]
}

const props = defineProps<{
  value: TableValue
}>()
</script>

<template>
  <div v-if="value?.rows?.length" class="overflow-x-auto my-8">
    <table class="w-full border-collapse border border-surface-border">
      <tbody>
        <tr v-for="row in value.rows" :key="row._key">
          <td
            v-for="(cell, index) in row.cells"
            :key="index"
            class="border border-surface-border p-3 text-sm md:text-base"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
