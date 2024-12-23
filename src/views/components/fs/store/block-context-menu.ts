import { createGlobalState } from '@vueuse/core';
import { nextTick, ref } from 'vue';
// import { usePathState } from './path';
// import { FsService, PathType } from '@/services/api';

export const useBlockContextMenuState = createGlobalState(() => {
  // const { currentFPathId, getPathInfoById } = usePathState();
  const isOpen = ref(false);
  const eventVal = ref({});
  const triggerFId = ref<string | null>();
  // const menus = ref([
  //   {
  //     label: '新建文件夹',
  //     click: async () => {
  //       await FsService.create({
  //         body: {
  //           name: '未命名文件夹',
  //           parentId: triggerFId.value ? triggerFId.value : currentFPathId.value!,
  //           pathType: PathType.DIR,
  //           fileDetail: undefined
  //         }
  //       });
  //       await getPathInfoById(triggerFId.value ? triggerFId.value : currentFPathId.value!);
  //     }
  //   }
  // ]);

  const show = async (e:any, fId:string | null) => {
    triggerFId.value = fId;
    isOpen.value = false;
    await nextTick();
    isOpen.value = true;
    eventVal.value = e;
  };
  
  const hide = () => {
    triggerFId.value = null;
    isOpen.value = false;
    eventVal.value = {};
  };
  const menusZIndex = ref(5000);
  return {
    isOpen,
    eventVal,
    menusZIndex,
    triggerFId,
    show,
    hide
  };
});