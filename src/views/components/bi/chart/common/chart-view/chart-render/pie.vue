<template>
  <div :id='containerId' ref='containerRef' style='width: 100%;height: 100%;overflow: hidden;' />
</template>

<script setup lang="ts">
import { v4 as uuidv4 } from 'uuid';
import { onMounted, PropType, ref } from 'vue';
import { Chart } from '@antv/g2';
import { ChartType } from '../../../setting/constants/type';
import { useResizeObserver } from '@vueuse/core';

const props = defineProps({
  chartType: {
    type: String as PropType<ChartType>,
    default: ChartType.Pie
  },
  chartData: {
    type: Array,
    default: () => []
  },
  xAxisTitle: {
    type: String,
    default: ''
  },
  yAxisTitle: {
    type: String,
    default: ''
  }
});

const containerId = ref(`chart-view-container-${uuidv4()}`);
const containerRef = ref();

let chart: Chart | null;
useResizeObserver(containerRef, () => {
  chart!.forceFit();
});

onMounted(() => {
  let chart: Chart | null;

  chart = new Chart({
    container: containerId.value,
    autoFit: true
  });

  chart.data(props.chartData);
  chart.axis('x', { title: props.xAxisTitle });
  chart.axis('y', { title: props.yAxisTitle });
  chart.interval()
    .coordinate({
      type: 'theta',
      outerRadius: 0.8 
    })
    .transform({ type: 'stackY' })
    .encode('y', 'y')
    .encode('color', 'x')
    .tooltip({
      title: (d, index, data, column) => ({ value: d.x }),
      items: [
        (d, index, data, column) => ({
          name: d.color, 
          value: d.y 
        })
      ] 
    });
  chart.render();
});
</script>

<style lang="scss" scoped>

</style>