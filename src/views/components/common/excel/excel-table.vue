<template>
  <ag-grid-vue
    ref='gridRef'
    :row-data='rowData'
    :column-defs='colDefs'
    :tooltip-show-delay='300'
    :style='`height: 100%`'
    :sortable='false'
    :suppress-cell-focus='true'
    :suppress-movable-columns='true'
    :cell-selection='true'
  />
</template>

<script setup lang="ts">
import { computed, ComputedRef, inject } from 'vue';
import * as ExcelJS from 'exceljs';
import { AgGridVue } from 'ag-grid-vue3'; // AG Grid Component

function numberToExcelColumn(num:number) {
  let column = '';
  while (num > 0) {
    num--; // 因为Excel列是从1开始计数的，而我们的计算从0开始
    let remainder = num % 26;
    column = String.fromCharCode(65 + remainder) + column;
    num = Math.floor(num / 26);
  }
  return column;
}

const sheet = inject<ComputedRef<ExcelJS.Worksheet>>('currentSheet');

const colDefs = computed(() => {
  const columnCount = sheet!.value.columnCount;
  const col = [
    {
      headerName: '',
      width: 40,
      valueGetter: params => params.node.rowIndex + 1,
      sortable: false,
      pinned: 'left'
    }
  ];
  for (let i = 1; i <= columnCount; i++) {
    col.push({
      field: numberToExcelColumn(i),
      headerName: numberToExcelColumn(i),
      sortable: false
    });
  }
  return col;
});

const rowData = computed(() => {
  const list:any[] = [];
  sheet!.value.eachRow(function(row) {
    const eRow:{[index: string]: ExcelJS.CellValue} = {};
    row.eachCell(function(cell) {
      eRow[numberToExcelColumn(cell.fullAddress.col)] = cell.value;
    });
    list.push(eRow);
  });
  return list;
});
</script>

<style scoped>

</style>