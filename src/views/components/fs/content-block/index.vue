<template>
  <div
    ref='contentRef'
    class='content-block-inner'
    @keyup.stop
    @keydown.stop
    @key.stop>
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
import { useFsGlobalState } from '../store/fs-global';
import { LAYOUT } from '../type';
import Preview from '../preview/index.vue';
import FContextMenu from '../context-menu/f-context-menu.vue';
import { usePreview } from '../preview/hook';
import { useRenameHook } from '../rename/hook';

const { getPathInfoById, currentFId, currentFPathId } = usePathState()!;
const { layout, columnRootFId } = useFsGlobalState()!;
const contentRef = ref<HTMLElement>();
usePreview();
useRenameHook();

const components = {
  [LAYOUT.COLUMN]: ColumnLayout,
  [LAYOUT.LIST]: ListLayout,
  [LAYOUT.ICON]: IconLayout
};

const component = computed(() => components[layout.value]);

onMounted(() => {
  currentFId.value = columnRootFId.value;
  currentFPathId.value = columnRootFId.value;
  getPathInfoById(columnRootFId.value);
});
</script>

<style scoped lang="scss">
.content-block-inner{
  height: 100%;
  overflow: auto;
}
</style>