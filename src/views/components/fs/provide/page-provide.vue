<template>
  <slot />
</template>

<script setup lang="ts">
import { useProvidePathState } from '../store/path';
import { useProvideNavigationState } from '../store/navigation';
import { useProvideFsGlobalState } from '../store/fs-global';
import { useProvideFContextMenuState } from '../store/f-context-menu';
import { useProvideBlockContextMenuState } from '../store/block-context-menu';
import { useProvideFavoriteState } from '../store/favorite';

useProvidePathState();
useProvideNavigationState();
useProvideFsGlobalState();
useProvideFContextMenuState();
useProvideBlockContextMenuState();
useProvideFavoriteState();
</script>

<style scoped>
</style>