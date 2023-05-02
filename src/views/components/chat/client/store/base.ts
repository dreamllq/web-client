import { ref } from 'vue';
import { createGlobalState } from '@vueuse/core';

export const useBaseState = createGlobalState(
  () => {
    const userId = ref('');

    const setUserId = (id) => {
      userId.value = id;
    };

    return {
      userId,
      setUserId 
    };
  }
);