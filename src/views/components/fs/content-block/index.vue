<template>
  <div
    class='content-block-inner'>
    <!-- <icon-layout /> -->
    <component :is='component' />
    <f-context-menu />
    <preview />
  </div>
  <block-context-menu />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import IconLayout from './icon-layout.vue';
import ListLayout from './list-layout.vue';
import ColumnLayout from './column-layout/index.vue';
import { usePathState } from '../store/path';
import BlockContextMenu from '../context-menu/block-context-menu.vue';
import { useBlockContextMenuState } from '../store/block-context-menu';
import { useFsGlobalState } from '../store/fs-global';
import { LAYOUT } from '../type';
import Preview from '../preview/index.vue';
import FContextMenu from '../context-menu/f-context-menu.vue';

const { getPathInfoById, clearSelectF } = usePathState();
const { show } = useBlockContextMenuState();
const { layout } = useFsGlobalState();

const components = {
  [LAYOUT.COLUMN]: ColumnLayout,
  [LAYOUT.LIST]: ListLayout,
  [LAYOUT.ICON]: IconLayout
};

const component = computed(() => components[layout.value]);

onMounted(() => {
  getPathInfoById('null');
});
</script>

<style scoped lang="scss">
.content-block-inner{
  height: 100%;
  overflow: auto;
}
</style>