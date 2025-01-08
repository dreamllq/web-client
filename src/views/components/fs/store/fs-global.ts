import { F, FsService } from '@/services/api';
import { createInjectionState } from '@vueuse/core';
import { computed, ref } from 'vue';
import { LAYOUT } from '../type';
import { useStorage } from '@vueuse/core';

const [useProvideFsGlobalState, useFsGlobalState] = createInjectionState(() => {
  const layout = useStorage('layout ', LAYOUT.COLUMN);
  const previewVisible = ref(false);
  const previewF = ref<F | null>(null);

  return {
    layout,
    previewVisible,
    previewF
  };
});

export { useProvideFsGlobalState, useFsGlobalState };