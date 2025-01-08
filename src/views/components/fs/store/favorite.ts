import { F, FsService } from '@/services/api';
import { createInjectionState } from '@vueuse/core';
import { ref } from 'vue';

const [useProvideFavoriteState, useFavoriteState] = createInjectionState(() => {
  const favoriteList = ref<F[]>([]);

  const refreshList = async () => {
    const res = await FsService.getAll({ query: { favorite: true } });
    favoriteList.value = res.data!.data;
  };

  return {
    favoriteList,
    refreshList 
  };
});

export { useProvideFavoriteState, useFavoriteState };