<template>
  <template v-for='(columnItem, index) in column' :key='index'>
    <column-item-component :column-item='columnItem' />
  </template>
</template>

<script setup lang="ts">
import ColumnItemComponent from './column-item.vue';
import { useColumnLayoutHook } from './hook';
const { column } = useColumnLayoutHook()!;
</script>

<style scoped>

</style>