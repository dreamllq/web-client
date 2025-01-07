import { onKeyUp } from '@vueuse/core';
import { usePathState } from '../store/path';
export const useRenameHook = () => {
  const { selectedFList, renameF } = usePathState()!;
    
  onKeyUp('Enter', () => {
    if (selectedFList.value.length === 1) {
      renameF.value = selectedFList.value[0];
    }
  });
};