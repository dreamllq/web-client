import { computed, ref, watch } from 'vue';
import { useBiChartSettingStore } from '../store';
import { groupBy, sum } from 'lodash';

export const useChartHook = () => {
  const { data, dimensions, measures } = useBiChartSettingStore()!;
  const chartData = ref<any[]>([]);

  const xAxisTitle = ref('');
  const yAxisTitle = ref('');

  // 多个维度，是将多个字段进行笛卡尔积合并成一个字段
  // 多个度量，是多个color
  // 每个度量有独立的算法计算，根据维度分组处理
  watch(() => [
    data.value,
    dimensions.value,
    measures.value
  ], () => {
    xAxisTitle.value = dimensions.value.map(item => item.struct?.name || item.headerName).join('-');
    yAxisTitle.value = measures.value.map(item => item.struct?.name || item.headerName).join('/');
    
    const tempData = data.value.map(item => ({
      ...item,
      x: dimensions.value.map(d => item[d.field]).join('-')
    }));
    const groupX = groupBy(tempData, item => item.x);
    const list:any[] = [];
    Object.keys(groupX).forEach(key => {
      measures.value.forEach(m => {
        const obj = {
          x: key,
          y: sum(groupX[key].map(n => Number(n[m.field]))),
          color: m.struct.name
        };
        list.push(obj);
      });
    });
    console.log('chartData', list);
    chartData.value = list;
  }, {
    deep: true,
    immediate: true
  });

  return {
    xAxisTitle,
    yAxisTitle,
    chartData 
  };
};