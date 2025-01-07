import { F, FsService } from '@/services/api';
import { createInjectionState } from '@vueuse/core';
import { computed, ref } from 'vue';
import { LAYOUT } from '../type';


const [useProvideFsGlobalState, useFsGlobalState] = createInjectionState(() => {
  const layout = ref(LAYOUT.COLUMN);
  const previewVisible = ref(false);
  const previewF = ref<F | null>(null);

  return {
    layout,
    previewVisible,
    previewF
  };
});

export { useProvideFsGlobalState, useFsGlobalState };