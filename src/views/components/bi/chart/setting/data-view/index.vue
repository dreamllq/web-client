<template>
  <el-dialog
    v-model='dialogVisible'
    title='数据预览'
    fullscreen
    class='excel'
  >
    <div style='height: 100%;'>
      <excel-table 
        :columns='columns' 
        :data='data' />
    </div>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ExcelTable from '@/views/components/bi/data/view/excel-table.vue';
import { useBiChartSettingStore } from '../store';

const { columns, data } = useBiChartSettingStore()!;

const dialogVisible = ref(false);
const show = () => {
  dialogVisible.value = true;
};
defineExpose({ show });
</script>

<style lang="scss">
.el-dialog.is-fullscreen {
  &.excel, 
  &.pdf {
    display: flex;
    flex-direction: column;

    .el-dialog__body{
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>