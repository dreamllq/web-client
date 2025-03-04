import { BiChartMetaService, BiDataMetaService, BiDataStruct, BiDataViewColumn, BiDataViewService } from '@/services/api';
import { createInjectionState } from '@vueuse/core';
import { ref } from 'vue';

const [useProvideBiChartSettingStore, useBiChartSettingStore] = createInjectionState((chartMateId:string) => {
  
  const ready = ref(false);
  const biDataMetaId = ref<string>();
  const biDataStructs = ref<BiDataStruct[]>([]);
  const columns = ref<BiDataViewColumn[]>([]);
  const data = ref<any[]>([]);
  const init = async () => {
    ready.value = false;
    const biChartMetaRes = await BiChartMetaService.get({ path: { id: chartMateId } });

    biDataMetaId.value = biChartMetaRes.data!.data.data.id;

    const biDataMetaRes = await BiDataMetaService.get({ path: { id: biDataMetaId.value } });
    biDataStructs.value = biDataMetaRes.data!.data.structs;

    const biDataViewRes = await BiDataViewService.get({ path: { metaId: biDataMetaId.value } });
    columns.value = biDataViewRes.data!.data.columns;
    data.value = biDataViewRes.data!.data.data;

    ready.value = true;
  };

  init();
  return {
    ready: ready,
    columns: columns
  };
});

export { useProvideBiChartSettingStore, useBiChartSettingStore };