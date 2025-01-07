import { F, FsService } from '@/services/api';
import { createInjectionState } from '@vueuse/core';
import { computed, ref } from 'vue';
import { usePathState } from './path';


const [useProvideNavigationState, useNavigationState] = createInjectionState(
  () => {
    const prevHistory = ref<(string | null)[]>([]);    
    const nextHistory = ref<(string | null)[]>([]);
    
    const hasPrev = computed(() => prevHistory.value.length > 0);
    const hasNext = computed(() => nextHistory.value.length > 0);
    const push = (id) => {
      prevHistory.value.push(id);
      nextHistory.value = [];
    };

    // const back = async ({ currentFPathId, getPathInfoById, currentFId, selectedFList }) => {
    //   // const { currentFPathId, getPathInfoById, currentFId, selectedFList } = usePathState()!;
    //   const id = prevHistory.value.pop();
    //   nextHistory.value.push(currentFPathId.value!);
    //   await getPathInfoById(id!);
    //   currentFPathId.value = id!;
    //   currentFId.value = id!;
    //   selectedFList.value = [id!];
    // };

    // const forward = async ({ currentFPathId, getPathInfoById, currentFId, selectedFList }) => {
    //   // const { currentFPathId, getPathInfoById, currentFId, selectedFList } = usePathState()!;
    //   const id = nextHistory.value.pop();
    //   prevHistory.value.push(currentFPathId.value!);
    //   await getPathInfoById(id!);
    //   currentFPathId.value = id!;
    //   currentFId.value = id!;
    //   selectedFList.value = [id!];
    // };

    return {
      prevHistory,
      nextHistory,
      hasPrev,
      hasNext,
      push
      // back,
      // forward
    };
  }
);

export { useProvideNavigationState, useNavigationState };