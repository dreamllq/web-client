import { F, FsService } from '@/services/api';
import { createInjectionState } from '@vueuse/core';
import { computed, Ref, ref } from 'vue';
import { LAYOUT } from '../type';
import { useStorage } from '@vueuse/core';

const [useProvideFsGlobalState, useFsGlobalState] = createInjectionState(({ layout, columnRootFId }:{layout: Ref<LAYOUT>, columnRootFId: Ref<string>}) => {
  const previewVisible = ref(false);
  const previewF = ref<F | null>(null);

  return {
    layout,
    columnRootFId,
    previewVisible,
    previewF
  };
});

export { useProvideFsGlobalState, useFsGlobalState };