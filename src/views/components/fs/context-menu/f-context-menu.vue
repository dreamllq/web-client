<template>
  <div>
    <vue3-menus
      v-model:open='isOpen'
      :event='eventVal'
      :menus='menus'
      :z-index='menusZIndex'
      has-icon />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Vue3Menus } from 'vue3-menus';
import { FsService, PathType } from '@/services/api';
import { usePathState } from '../store/path';
import { useFContextMenuState } from '../store/f-context-menu';

const { isOpen, menusZIndex, eventVal, triggerF } = useFContextMenuState();
const { currentFPathId, getPathInfoById, selectedFList, columnMap } = usePathState();

const menus = ref([
  {
    label: '删除',
    click: async () => {
      if (selectedFList.value.some(item => item === triggerF.value?.id)) {
        await Promise.all(selectedFList.value.map(item => FsService.remove({ path: { id: item } })));        
      } else {
        await FsService.remove({ path: { id: triggerF.value!.id } });
      }
      delete columnMap.value[triggerF.value!.parent.id];
      await getPathInfoById(triggerF.value!.parent.id);
    }
  }
]);
</script>

<style scoped>

</style>