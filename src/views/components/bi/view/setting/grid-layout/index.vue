<template>
  <div
    ref='gridLayoutRef'
    class='grid-layout'
    @mousedown='drag'
    @mouseup='drop'
    @mousemove='updateDraggingItem'>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core';
import { useBiViewSettingStore } from '../store';
import { onMounted, ref } from 'vue';

const { containerWidth, updateDraggingItem, drag, drop, cols, rowHeight } = useBiViewSettingStore()!;
const gridLayoutRef = ref<HTMLElement>();

const props = defineProps({
  cols: {
    type: Number,
    default: 12
  },
  rowHeight: {
    type: Number,
    default: 50
  }
});

onMounted(() => {
  cols.value = props.cols;
  rowHeight.value = props.rowHeight;
});

useResizeObserver(gridLayoutRef, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  containerWidth.value = width;
});
</script>

<style scoped lang="scss">
.grid-layout{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>