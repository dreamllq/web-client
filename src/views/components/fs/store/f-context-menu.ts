import { F } from '@/services/api';
import { createInjectionState } from '@vueuse/core';
import { nextTick, ref } from 'vue';

const [useProvideFContextMenuState, useFContextMenuState] = createInjectionState(() => {
  const isOpen = ref(false);
  const eventVal = ref({});
  const triggerFId = ref<string | null>();
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

export { useProvideFContextMenuState, useFContextMenuState };