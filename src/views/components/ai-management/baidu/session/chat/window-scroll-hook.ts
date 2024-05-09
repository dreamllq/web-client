import { useElementSize, useScroll } from '@vueuse/core';
import { computed, ref, watch } from 'vue';

export const useWindowScrollHook = (el:any, pel: any) => {
  const { height } = useElementSize(el);
  const { height: pHeight } = useElementSize(pel);
  const { y, arrivedState } = useScroll(pel);
  const hasScroll = computed(() => height.value > pHeight.value);
  
  watch(() => height.value, () => {
    console.log(height.value, y.value);
    if (!hasScroll.value) {
      return;
    }

    if (arrivedState.bottom) {
      y.value = height.value;
    }
  });

  watch(hasScroll, (nv, ov) => {
    if (nv === true && ov !== true) {
      toBottom();
    }
  });

  const toBottom = () => {
    console.log('toBottom', height.value, y.value);
    
    y.value = height.value;
  };

  return { toBottom };
};