<template>
  <ag-grid-vue
    ref='gridRef'
    :row-data='rowData'
    :column-defs='colDefs'
    :tooltip-show-delay='300'
    :style='`height: 100%`'
    class='ag-theme-quartz'
    :sortable='false'
    :suppress-cell-focus='true'
    :suppress-movable-columns='true'
  />
</template>

<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue';
import * as ExcelJS from 'exceljs';
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import { AgGridVue } from 'ag-grid-vue3'; // AG Grid Component


const sheet = inject<ComputedRef<ExcelJS.Worksheet>>('currentSheet');

const colDefs = computed(() => {
  const columnCount = sheet!.value.columnCount;
  const col = [];
  for (let i = 1; i <= columnCount; i++) {
    col.push({
      field: String(i),
      headerName: String(i),
      sortable: false
    });
  }
  return col;
});

const rowData = computed(() => {
  const list:any[] = [];
  console.log('columnCount', sheet!.value.columnCount);
  
  sheet!.value.eachColumnKey((col, index) => {
    console.log(col);
  });
  sheet!.value.eachRow(function(row, rowNumber) {
    const eRow:{[index: string]: ExcelJS.CellValue} = {};
    console.log('Row ' + rowNumber + ' = ' + JSON.stringify(row.values));
    row.eachCell(function(cell, colNumber) {
      console.log('Cell ' + colNumber + ' = ' + cell.value + ' ' + cell.name, cell);
      eRow[String(cell.fullAddress.col)] = cell.value;
    });
    list.push(eRow);
  });
  return list;
});
</script>

<style scoped>

</style>