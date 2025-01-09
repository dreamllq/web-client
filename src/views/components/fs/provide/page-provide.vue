<template>
  <slot />
</template>

<script setup lang="ts">
import { LAYOUT } from '../type';
import { useStorage } from '@vueuse/core';
import { useProvidePathState } from '../store/path';
import { useProvideNavigationState } from '../store/navigation';
import { useProvideFsGlobalState } from '../store/fs-global';
import { useProvideFContextMenuState } from '../store/f-context-menu';
import { useProvideBlockContextMenuState } from '../store/block-context-menu';
import { useProvideFavoriteState } from '../store/favorite';

const layout = useStorage('page-layout', LAYOUT.COLUMN);
const columnRootFId = useStorage('column-root-f-id', 'null');

useProvidePathState();
useProvideNavigationState();
useProvideFsGlobalState({
  layout,
  columnRootFId 
});
useProvideFContextMenuState();
useProvideBlockContextMenuState();
useProvideFavoriteState();
</script>

<style scoped>
</style>