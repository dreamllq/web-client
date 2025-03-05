<template>
  <div class='struct-item' @mousedown='onMouseDown'>
    <div v-if='item.struct'>
      {{ item.struct.name }}
    </div>
    <div v-else>
      {{ item.field }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { BiDataViewColumn } from '@/services/api';
import { PropType } from 'vue';
import { useBiChartSettingStore } from '../store';

const { structDragging, structDraggingInfo } = useBiChartSettingStore()!;

const props = defineProps({
  item: {
    type: Object as PropType<BiDataViewColumn>,
    required: true
  }
});

const onMouseDown = (e: MouseEvent) => {
  structDragging.value = true;
  structDraggingInfo.value = {
    x: e.clientX,
    y: e.clientY,
    struct: props.item
  };
};
</script>

<style scoped lang="scss">
  .struct-item {
    height: 30px;
    line-height: 30px;
    border-bottom: 1px solid var(--el-border-color);
    cursor: pointer;
    user-select: none;
  }
</style>