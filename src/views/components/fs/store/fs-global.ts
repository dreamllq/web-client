import { F, FsService } from '@/services/api';
import { createGlobalState } from '@vueuse/core';
import { computed, ref } from 'vue';
import { LAYOUT } from '../type';


export const useFsGlobalState = createGlobalState(() => {
  const layout = ref(LAYOUT.COLUMN);
  const previewVisible = ref(false);
  const previewF = ref<F | null>(null);

  return {
    layout,
    previewVisible,
    previewF
  };
});