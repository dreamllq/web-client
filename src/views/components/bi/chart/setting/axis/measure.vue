<template>
  <div @mouseup='onMouseUp'>
    <el-input-tag v-model='measures'>
      <template #prefix>
        <span>度量</span>
      </template>
      <template #tag='{value:item}'>
        <div v-if='item.struct'>
          {{ item.struct.name }}
        </div>
        <div v-else>
          {{ item.field }}
        </div>
      </template>
    </el-input-tag>
  </div>
</template>

<script setup lang="ts">
import { useBiChartSettingStore } from '../store';

const { measures, structDragging, structDraggingInfo } = useBiChartSettingStore()!;
const onMouseUp = () => {
  if (structDragging.value === true) {
    structDragging.value = false;
    measures.value.push(structDraggingInfo.value.struct!);
  }
};
</script>

<style scoped>

</style>