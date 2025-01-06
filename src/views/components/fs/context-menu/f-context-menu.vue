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
const { currentFPathId, getPathInfoById } = usePathState();

const fileInputRef = ref();

const menus = ref([
  {
    label: '删除',
    click: async () => {
      await FsService.remove({ path: { id: triggerF.value!.id } });
      // await FsService.create({
      //   body: {
      //     name: '未命名文件夹',
      //     parentId: triggerFId.value ? triggerFId.value : currentFPathId.value!,
      //     pathType: PathType.DIR,
      //     fileDetail: undefined
      //   }
      // });
      await getPathInfoById(triggerF.value!.parent.id);
    }
  }
]);
</script>

<style scoped>

</style>