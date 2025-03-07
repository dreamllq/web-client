<template>
  <div class='drag-struct-item' :style='style'>
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
import { computed, PropType } from 'vue';
import { useBiChartSettingStore } from '../store';

const { structDragging, structDraggingInfo } = useBiChartSettingStore()!;

const props = defineProps({
  item: {
    type: Object as PropType<BiDataViewColumn>,
    required: true
  }
});

const style = computed(() => ({
  top: structDragging.value === true && structDraggingInfo.value.struct?.field === props.item.field ? `${structDraggingInfo.value.y - 15}px` : '-9999px',
  left: structDragging.value === true && structDraggingInfo.value.struct?.field === props.item.field ? `${structDraggingInfo.value.x - 20}px` : '-9999px'
}));
</script>

<style scoped lang="scss">
  .drag-struct-item {
    position: fixed;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid var(--el-border-color);
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    background-color: #fff;
    pointer-events: none;
    z-index: 1;
    font-size: 14px;
    color: #333;
    user-select: none;
  }
</style>