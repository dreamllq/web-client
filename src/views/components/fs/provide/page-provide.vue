<template>
  <slot />
</template>

<script setup lang="ts">
import { useProvidePathState } from '../store/path';
import { useProvideNavigationState } from '../store/navigation';
import { useProvideFsGlobalState } from '../store/fs-global';
import { useProvideFContextMenuState } from '../store/f-context-menu';
import { useProvideBlockContextMenuState } from '../store/block-context-menu';

useProvidePathState();
useProvideNavigationState();
useProvideFsGlobalState();
useProvideFContextMenuState();
useProvideBlockContextMenuState();
</script>

<style scoped>
</style>