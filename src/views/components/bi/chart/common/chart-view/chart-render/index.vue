<template>
  <component
    :is='components[props.chartType]'
    v-if='!refresh'
    v-bind='$attrs'
    :chart-type='chartType' 
    :chart-data='chartData' />
</template>

<script setup lang="ts">
import { nextTick, PropType, ref, watch } from 'vue';
import { ChartType } from '../../../setting/constants/type';
import Pie from './pie.vue';
import Line from './line.vue';
import Bar from './bar.vue';

const components = {
  [ChartType.Pie]: Pie,
  [ChartType.Line]: Line,
  [ChartType.Bar]: Bar 
};

const props = defineProps({
  chartType: {
    type: String as PropType<ChartType>,
    default: ChartType.Pie
  },
  chartData: {
    type: Array as PropType<any[]>,
    default: () => []
  }
});

const refresh = ref(false);

watch(() => [props.chartType, props.chartData], async () => {
  refresh.value = true;
  await nextTick();
  refresh.value = false;
}, { deep: true });

</script>

<style scoped>

</style>