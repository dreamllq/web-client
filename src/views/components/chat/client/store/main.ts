import { ref } from 'vue';
import { createGlobalState } from '@vueuse/core';

export enum MainStatusEnum{
  Unknown = 'unknown',
  NewFriend = 'new_friend',
  Friend = 'friend',
  Message = 'message'
}

export const useMainState = createGlobalState(
  () => {
    const status = ref<MainStatusEnum>(MainStatusEnum.Unknown);

    const setStatus = (s:MainStatusEnum) => {
      status.value = s;
    };

    return {
      status,
      setStatus 
    };
  }
);