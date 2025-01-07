import { onMounted, onUnmounted } from 'vue';
import { useFsGlobalState } from '../store/fs-global';
import { onKeyUp } from '@vueuse/core';
import { usePathState } from '../store/path';
export const usePreview = () => {
  const { previewVisible, previewF } = useFsGlobalState()!;
  const { currentFId, map } = usePathState()!;

  onKeyUp(' ', () => {
    if (previewVisible.value) {
      previewVisible.value = false;
      return;
    }
    if (currentFId.value && currentFId.value !== 'null') {
      previewF.value = map.value[currentFId.value];
      show();
    }
  });
  const show = () => {
    
    previewVisible.value = true;
  };
};