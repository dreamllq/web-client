<template>
  <vue3-menus
    v-model:open='isOpen'
    :event='eventVal'
    :menus='menus'
    :z-index='menusZIndex'
    has-icon />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Vue3Menus } from 'vue3-menus';
import { useBlockContextMenuState } from '../store/block-context-menu';

const { isOpen, menus, menusZIndex, eventVal, file } = useBlockContextMenuState();
</script>

<style scoped>

</style>