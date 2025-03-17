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
import { PropType, ref } from 'vue';
import { useBiViewSettingStore } from '../store';
import { GridLayout } from '../type';

const { setColWidth, updateDraggingItem, drag, drop } = useBiViewSettingStore()!;
const gridLayoutRef = ref<HTMLElement>();

useResizeObserver(gridLayoutRef, (entries) => {
  const entry = entries[0];
  const { width } = entry.contentRect;
  setColWidth(width);
});
</script>

<style scoped lang="scss">
.grid-layout{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>