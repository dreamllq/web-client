import { computed, ref, watch } from 'vue';
import { groupBy, sum } from 'lodash';
import { BiDataViewColumn } from '@/services/api';

export const useChartHook = ({ data, dimensions, measures }:{
  data:any[], 
  dimensions:BiDataViewColumn[], 
  measures:BiDataViewColumn[]
}) => {
  const chartData = ref<any[]>([]);

  const xAxisTitle = ref('');
  const yAxisTitle = ref('');

  // 多个维度，是将多个字段进行笛卡尔积合并成一个字段
  // 多个度量，是多个color
  // 每个度量有独立的算法计算，根据维度分组处理
  watch(() => [
    data,
    dimensions,
    measures
  ], () => {
    xAxisTitle.value = dimensions.map(item => item.struct?.name || item.headerName).join('-');
    yAxisTitle.value = measures.map(item => item.struct?.name || item.headerName).join('/');
    
    const tempData = data.map(item => ({
      ...item,
      x: dimensions.map(d => item[d.field]).join('-')
    }));
    const groupX = groupBy(tempData, item => item.x);
    const list:any[] = [];
    Object.keys(groupX).forEach(key => {
      measures.forEach(m => {
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