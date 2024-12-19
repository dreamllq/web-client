import { F, FsService } from '@/services/api';
import { createGlobalState } from '@vueuse/core';
import { computed, ref } from 'vue';
import { LAYOUT } from '../type';


export const useFsGlobalState = createGlobalState(() => {
  const layout = ref(LAYOUT.COLUMN);

  return { layout };
});