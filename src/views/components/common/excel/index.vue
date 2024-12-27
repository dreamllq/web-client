<template>
  <div class='workbook'>
    <div class='workbook-cell-editor-wrapper' />
    <div class='workbook-cell-body-wrapper'>
      <template v-if='currentSheet'>
        <excel-table />
      </template>
    </div>
    <div class='workbook-cell-sheet-wrapper'>
      <sheets />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import * as ExcelJS from 'exceljs';
import Sheets from './sheets.vue';
import ExcelTable from './excel-table.vue';

const workbook = ref<ExcelJS.Workbook | null>();
const activeSheet = ref<number>();

provide('workbook', workbook);
provide('activeSheet', activeSheet);

const currentSheet = computed(() => {
  if (activeSheet.value) {
    return workbook.value?.getWorksheet(activeSheet.value);
  } else {
    return undefined;
  }
});

provide('currentSheet', currentSheet);

const setWorkbook = (wb: ExcelJS.Workbook) => {
  workbook.value = wb;
};

defineExpose({ setWorkbook });
</script>

<style scoped lang="scss">
.workbook{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .workbook-cell-editor-wrapper{
    min-height: 30px;
  }

  .workbook-cell-body-wrapper{
    flex: 1;
    overflow: hidden;
  }

  .workbook-cell-sheet-wrapper{
    min-height: 30px;
  }
}
</style>