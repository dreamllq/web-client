<template>
  <div v-if='ready' class='struct-list'>
    <template v-for='item in columns' :key='item.field'>
      <struct-item :item='item' />
      <drag-struct-item :item='item' />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useBiChartSettingStore } from '../store/index';
import StructItem from './struct-item.vue';
import DragStructItem from './drag-struct-item.vue';

const { ready, columns } = useBiChartSettingStore()!;
</script>

<style scoped lang="scss">
.struct-list {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px;
}
</style>