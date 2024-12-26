<template>
  <excel ref='excelRef' />
</template>

<script setup lang="ts">
import * as ExcelJS from 'exceljs';
import { onMounted, ref } from 'vue';
import { useFsGlobalState } from '../store/fs-global';
import { FileStaticService } from '@/services/api';
import Excel from '@/views/components/common/excel/index.vue';

const { previewF } = useFsGlobalState();
const excelRef = ref<InstanceType<typeof Excel>>();

onMounted(async () => {
  const res = await FileStaticService.view({
    path: { id: previewF.value?.fileDetail?.file?.id },
    responseType: 'blob' 
  });
  const workbook = new ExcelJS.Workbook();
  const buffer = await (res.data as Blob).arrayBuffer();
  await workbook.xlsx.load(buffer);

  excelRef.value?.setWorkbook(workbook);
});
</script>

<style scoped>

</style>