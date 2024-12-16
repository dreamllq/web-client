import { F, FsService } from '@/services/api';
import { createGlobalState } from '@vueuse/core';
import { ref } from 'vue';

export const usePathState = createGlobalState(
  () => {
    const childrenMap = ref<{[index:string]: F[]}>({});
    const map = ref<{[index:string]: F}>({});
    const tree = ref({});
    const currentFId = ref<string | null>(null);
    const currentFPathId = ref<string | null>(null);
    const fPathIdHistory = ref<(string|null)[]>([]);

    const getPathInfoById = async (id:string) => {
      // const res = await FsService.get({ id });
      // const data = res.data;
      // map.value[data.id] = data;
      const childRes = await FsService.getChildren({ id: id });
      childrenMap.value[id] = childRes.data;
      fPathIdHistory.value.push(id);
    };

    const selectF = (f:F) => {
      currentFId.value = f.id;
    };

    const clearSelectF = () => {
      currentFId.value = null;
    };

    const enterF = async (f:F) => {
      await getPathInfoById(f.id);
      currentFId.value = null;
      currentFPathId.value = f.id;
      map.value[f.id] = f;
    };

    return {
      currentFId,
      currentFPathId,
      getPathInfoById,
      childrenMap,
      map,
      selectF,
      clearSelectF,
      enterF
    };
  }
);