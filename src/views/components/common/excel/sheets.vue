<template>
  <div>
    <el-tabs
      v-model='activeSheet'
      type='card'
      tab-position='bottom'
    >
      <template v-for='item in sheets' :key='item.sheetId'>
        <el-tab-pane :label='item.worksheet.name' :name='item.sheetId' />
      </template>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, Ref } from 'vue';
import * as ExcelJS from 'exceljs';

const workbook = inject<Ref<ExcelJS.Workbook | null>>('workbook');
const activeSheet = inject<Ref<number>>('activeSheet');

const sheets = computed(() => {
  if (workbook?.value) {
    const list:any[] = [];
    workbook.value.eachSheet((worksheet, sheetId) => {
      list.push({
        worksheet,
        sheetId
      });
    });
    if (list.length > 0) {
      activeSheet!.value = list[0].sheetId;
    }
    return list;
  } else {
    return [];
  }
});
</script>

<style scoped>

</style>