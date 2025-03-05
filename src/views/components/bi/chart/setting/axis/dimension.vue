<template>
  <div @mouseup='onMouseUp'>
    <el-input-tag
      v-model='dimensions'>
      <template #prefix>
        <span>维度</span>
      </template>
      <template #tag='{value}'>
        <div v-if='value.struct'>
          {{ value.struct.name }}
        </div>
        <div v-else>
          {{ value.field }}
        </div>
      </template>
    </el-input-tag>
  </div>
</template>

<script setup lang="ts">
import { useBiChartSettingStore } from '../store';

const { dimensions, structDragging, structDraggingInfo } = useBiChartSettingStore()!;

const onMouseUp = () => {
  if (structDragging.value === true) {
    structDragging.value = false;
    dimensions.value.push(structDraggingInfo.value.struct!);
  }
};
</script>

<style scoped>

</style>