import { F, FsService } from '@/services/api';
import { createGlobalState } from '@vueuse/core';
import { computed, ref } from 'vue';
import { usePathState } from './path';


export const useNavigationState = createGlobalState(
  () => {
    const { currentFPathId, getPathInfoById, currentFId, selectedFList } = usePathState();
    const prevHistory = ref<(string | null)[]>([]);    
    const nextHistory = ref<(string | null)[]>([]);
    
    const hasPrev = computed(() => prevHistory.value.length > 0);
    const hasNext = computed(() => nextHistory.value.length > 0);
    const push = (id) => {
      prevHistory.value.push(id);
      nextHistory.value = [];
    };

    const back = async () => {
      const id = prevHistory.value.pop();
      nextHistory.value.push(currentFPathId.value!);
      await getPathInfoById(id!);
      currentFPathId.value = id!;
      currentFId.value = id!;
      selectedFList.value = [id!];
    };

    const forward = async () => {
      const id = nextHistory.value.pop();
      prevHistory.value.push(currentFPathId.value!);
      await getPathInfoById(id!);
      currentFPathId.value = id!;
      currentFId.value = id!;
      selectedFList.value = [id!];
    };

    return {
      hasPrev,
      hasNext,
      push,
      back,
      forward
    };
  }
);