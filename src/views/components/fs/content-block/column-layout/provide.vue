<template>
  <slot />
</template>

<script setup lang="ts">
import { useFsGlobalState } from '../../store/fs-global';
import { usePathState } from '../../store/path';
import { useProvideColumnLayoutHook } from './hook';

const { currentFId, map, columnMap, currentFPathId, parentIdMap } = usePathState()!;
const { columnRootFId } = useFsGlobalState()!;
useProvideColumnLayoutHook({
  currentFId,
  map,
  columnMap,
  currentFPathId,
  parentIdMap,
  columnRootFId 
});
</script>

<style scoped>

</style>