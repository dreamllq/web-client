import { BiChartMetaService, BiDataMetaService, BiDataStruct, BiDataViewColumn, BiDataViewService } from '@/services/api';
import { createInjectionState } from '@vueuse/core';
import { ref, watch } from 'vue';
import { ChartType } from '../constants/type';
import { useMouse } from '@vueuse/core';

const [useProvideBiChartSettingStore, useBiChartSettingStore] = createInjectionState((chartMateId:string) => {
  const ready = ref(false);
  const biDataMetaId = ref<string>();
  const biDataStructs = ref<BiDataStruct[]>([]);
  const columns = ref<BiDataViewColumn[]>([]);
  const data = ref<any[]>([]);
  const chartType = ref<ChartType>(ChartType.Pie);
  const dimensions = ref<BiDataViewColumn[]>([]); //  维度
  const measures = ref<BiDataViewColumn[]>([]); // 度量
  const structDragging = ref(false);
  const structDraggingInfo = ref<{
    x: number;
    y: number;
    struct?: BiDataViewColumn;
  }>({
    x: -999,
    y: -999,
    struct: undefined
  });

  const { x, y } = useMouse();
  watch(() => [x.value, y.value], () => {
    if (structDragging.value === true) {
      structDraggingInfo.value.x = x.value;
      structDraggingInfo.value.y = y.value;
    }
  }, { deep: true });


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
    ready,
    columns,
    data,
    chartType,
    dimensions,
    measures,
    structDragging,
    structDraggingInfo
  };
});

export { useProvideBiChartSettingStore, useBiChartSettingStore };