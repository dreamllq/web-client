<template>
  <div class='chart-view'>
    <div ref='contentRef' class='chart-view-content'>
      <chart-render
        :chart-type='chartType'
        :chart-data='chartData'
        :x-axis-title='xAxisTitle'
        :y-axis-title='yAxisTitle' />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';
import { ChartType } from '../../setting/constants/type';
import { useChartHook } from './chart-hook';
import { BiDataViewColumn } from '@/services/api';
import ChartRender from './chart-render/index.vue';

const props = defineProps({
  chartType: {
    type: String as PropType<ChartType>,
    default: ChartType.Pie
  },
  data: {
    type: Array,
    default: () => []
  },
  dimensions: {
    type: Array as PropType<BiDataViewColumn[]>,
    default: () => []
  },
  measures: {
    type: Array as PropType<BiDataViewColumn[]>,
    default: () => []
  }
});

const { chartData, xAxisTitle, yAxisTitle } = useChartHook(props);

</script>

<style scoped lang="scss">
.chart-view{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 8px;

  .chart-view-content{
    width: 100%;
    height: 100%;
  }
}
</style>