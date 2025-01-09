<template>
  <div class='column-layout' :style='style'>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useColumnLayoutHook } from './hook';

const { column } = useColumnLayoutHook()!;
const style = computed(() => ({ minWidth: `${301 * (column.value.length + 1)}px` }));

</script>

<style scoped>

</style>