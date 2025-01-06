import { F } from '@/services/api';
import { createGlobalState } from '@vueuse/core';
import { nextTick, ref } from 'vue';

export const useFContextMenuState = createGlobalState(() => {
  const isOpen = ref(false);
  const eventVal = ref({});
  const triggerF = ref<F | null>();
  const show = async (e:any, f: F) => {
    triggerF.value = f;
    isOpen.value = false;
    await nextTick();
    isOpen.value = true;
    eventVal.value = e;
  };
  
  const hide = () => {
    triggerF.value = null;
    isOpen.value = false;
    eventVal.value = {};
  };

  const menusZIndex = ref(5000);

  return {
    isOpen,
    eventVal,
    menusZIndex,
    triggerF,
    show,
    hide
  };
});