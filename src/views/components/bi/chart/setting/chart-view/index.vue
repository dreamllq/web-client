<template>
  <div class='chart-view'>
    <div
      ref='contentRef'
      class='chart-view-content'>
      <!-- <div id='chart-view-container' style='width: 100%;height: 100%;overflow: hidden;' /> -->
      <chart-render 
        :chart-type='chartType'
        :chart-data='chartData'
        :x-axis-title='xAxisTitle'
        :y-axis-title='yAxisTitle' />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { Chart } from '@antv/g2';
import { useBiChartSettingStore } from '../store';
import { useChartHook } from './chart-hook';
import { ChartType } from '../constants/type';
import ChartRender from '../../common/chart-view/chart-render/index.vue';

const { chartType } = useBiChartSettingStore()!;

const { chartData, xAxisTitle, yAxisTitle } = useChartHook();

// const contentRef = ref();
// let chart: Chart | null;

// onMounted(() => {
//   render();
// });


// watch(chartData, () => {
//   render();
// }, { deep: true });

// watch(chartType, () => {
//   render();
// });

// const render = () => {
//   if (chart) {
//     chart.destroy();
//     chart = null;
//   }

//   chart = new Chart({
//     container: 'chart-view-container',
//     autoFit: true
//   });

//   chart.data(chartData.value);
//   chart.axis('x', { title: xAxisTitle.value });
//   chart.axis('y', { title: yAxisTitle.value });
//   if (chartType.value === ChartType.Pie) {
//     chart.interval()
//       .coordinate({
//         type: 'theta',
//         outerRadius: 0.8 
//       })
//       .transform({ type: 'stackY' })
//       .encode('y', 'y')
//       .encode('color', 'x')
//       .tooltip({
//         title: (d, index, data, column) => ({ value: d.x }),
//         items: [
//           (d, index, data, column) => ({
//             name: d.color, 
//             value: d.y 
//           })
//         ] 
//       });
//   } else if (chartType.value === ChartType.Line) {
//     chart.line()
//       .encode('x', 'x')
//       .encode('y', 'y')
//       .encode('color', 'color');
//   } else if (chartType.value === ChartType.Bar) {
//     chart.interval()
//       .transform({ type: 'dodgeX' })
//       .encode('x', 'x')
//       .encode('y', 'y')
//       .encode('color', 'color')
//       .tooltip({
//         title: (d, index, data, column) => ({ value: d.x }),
//         items: [
//           (d, index, data, column) => ({
//             name: d.color, 
//             value: d.y 
//           })
//         ] 
//       });
//   }

//   chart.render();
// };
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