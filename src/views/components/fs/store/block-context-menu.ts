import { createGlobalState } from '@vueuse/core';
import { nextTick, ref } from 'vue';
import { usePathState } from './path';
import { FsService, PathType } from '@/services/api';

export const useBlockContextMenuState = createGlobalState(() => {
  const { currentFPathId, getPathInfoById } = usePathState();
  const isOpen = ref(false);
  const eventVal = ref({});
  const file = ref({});
  const menus = ref([
    {
      label: '新建文件夹',
      click: async () => {
        await FsService.create({
          requestBody: {
            name: '未命名文件夹',
            parentId: currentFPathId.value!,
            pathType: PathType.DIR,
            fileDetail: null
          }
        });
        await getPathInfoById(currentFPathId.value!);
      }
    }
  ]);

  const show = async (e) => {
    isOpen.value = false;
    await nextTick();
    isOpen.value = true;
    eventVal.value = e;
  };
  const menusZIndex = ref(5000);
  return {
    isOpen,
    eventVal,
    menus,
    menusZIndex,
    show,
    file
  };
});