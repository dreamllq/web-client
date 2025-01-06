<template>
  <div>
    <vue3-menus
      v-model:open='isOpen'
      :event='eventVal'
      :menus='menus'
      :z-index='menusZIndex'
      has-icon />

    <add-file-upload ref='fileInputRef' />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Vue3Menus } from 'vue3-menus';
import { useBlockContextMenuState } from '../store/block-context-menu';
import { FsService, PathType } from '@/services/api';
import { usePathState } from '../store/path';
import AddFileUpload from '../toolbar/add-file-upload.vue';

const { isOpen, menusZIndex, eventVal, triggerFId } = useBlockContextMenuState();
const { currentFPathId, getPathInfoById } = usePathState();

const fileInputRef = ref();

const menus = ref([
  {
    label: '新建文件夹',
    click: async () => {
      await FsService.create({
        body: {
          name: '未命名文件夹',
          parentId: triggerFId.value ? triggerFId.value : currentFPathId.value!,
          pathType: PathType.DIR,
          fileDetail: undefined
        }
      });
      await getPathInfoById(triggerFId.value ? triggerFId.value : currentFPathId.value!);
    }
  },
  {
    label: '上传文件',
    click: async () => {
      fileInputRef.value.click();
      console.log(fileInputRef.value);
    }
  }
]);
</script>

<style scoped>

</style>