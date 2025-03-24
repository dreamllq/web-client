<template>
  <chart-view
    v-if='ready'
    :chart-type='chartType'
    :data='data'
    :dimensions='dimensions'
    :measures='measures' />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ChartType } from '../../setting/constants/type';
import { BiChartMetaService, BiChartSettingService, BiDataViewColumn, BiDataViewService } from '@/services/api';
import ChartView from '../chart-view/index.vue';

const props = defineProps({
  chartMateId: {
    type: String,
    required: true
  }
});

const chartType = ref<ChartType>();
const data = ref<any[]>([]);
const dimensions = ref<BiDataViewColumn[]>([]);
const measures = ref<BiDataViewColumn[]>([]);
const ready = ref(false);

onMounted(async () => {
  const biChartMetaRes = await BiChartMetaService.get({ path: { id: props.chartMateId } });

  const biDataMetaId = biChartMetaRes.data!.data.data.id;
  const biDataViewRes = await BiDataViewService.get({ path: { metaId: biDataMetaId } });
  data.value = biDataViewRes.data!.data.data;

  const biChartSettingRes = await BiChartSettingService.get({ path: { metaId: props.chartMateId } });
  const { config } = biChartSettingRes.data?.data || {};
  if (config) {
    const configObj = JSON.parse(config);
    chartType.value = configObj.chartType;
    dimensions.value = configObj.dimensions;
    measures.value = configObj.measures;
  }
  ready.value = true;
});
</script>

<style scoped>

</style>