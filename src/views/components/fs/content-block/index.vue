<template>
  <div
    class='content-block-inner'
    @contextmenu.prevent='show'
    @click.prevent='clearSelectF'>
    <icon-layout />
    <block-context-menu />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import IconLayout from './icon-layout.vue';
import { usePathState } from '../store/path';
import BlockContextMenu from '../context-menu/block-context-menu.vue';
import { useBlockContextMenuState } from '../store/block-context-menu';

const { getPathInfoById, clearSelectF } = usePathState();
const { show } = useBlockContextMenuState();
onMounted(() => {
  getPathInfoById(null);
});
</script>

<style scoped lang="scss">
.content-block-inner{
  height: 100%;
  overflow: auto;
}
</style>