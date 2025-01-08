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
import { computed, ref } from 'vue';
import { Vue3Menus } from 'vue3-menus';
import { FsService, PathType } from '@/services/api';
import { usePathState } from '../store/path';
import { useFContextMenuState } from '../store/f-context-menu';
import { useFavoriteState } from '../store/favorite';

const { isOpen, menusZIndex, eventVal, triggerFId } = useFContextMenuState()!;
const { getPathInfoById, selectedFList, columnMap, renameF, map } = usePathState()!;
const { refreshList } = useFavoriteState()!;

const menus = computed(() => [
  {
    label: '删除',
    click: async () => {
      if (selectedFList.value.some(item => item === triggerFId.value)) {
        await Promise.all(selectedFList.value.map(item => FsService.remove({ path: { id: item } })));        
      } else {
        await FsService.remove({ path: { id: triggerFId.value! } });
      }
      delete columnMap.value[map.value[triggerFId.value!].parent.id];
      await getPathInfoById(map.value[triggerFId.value!].parent.id);
    }
  },
  {
    label: '重新命名',
    click: () => {
      renameF.value = triggerFId.value;
    }
  },
  ...(map.value[triggerFId.value!]?.pathType === PathType.DIR ? [
    {
      label: '收藏',
      click: async () => {
        await FsService.update({
          path: { id: triggerFId.value! },
          body: { favorite: true } 
        });
        await refreshList();
      }
    }
  ] : [])
]);
</script>

<style scoped>

</style>