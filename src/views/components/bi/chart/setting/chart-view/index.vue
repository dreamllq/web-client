<template>
  <div class='chart-view'>
    <div ref='contentRef' class='chart-view-content'>
      <div id='chart-view-container' style='width: 100%;height: 100%;' />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Chart } from '@antv/g2';

const contentRef = ref();
let chart;

const data = [
  {
    genre: 'Sports',
    sold: 275 
  },
  {
    genre: 'Strategy',
    sold: 115 
  },
  {
    genre: 'Action',
    sold: 120 
  },
  {
    genre: 'Shooter',
    sold: 350 
  },
  {
    genre: 'Other',
    sold: 150 
  }
];

onMounted(() => {
  console.log(contentRef.value.clientWidth);
  console.log(contentRef.value.clientHeight);

  chart = new Chart({
    container: 'chart-view-container',
    autoFit: true
  });

  chart
    .interval() // 创建一个 Interval 标记
    .data(data) // 绑定数据
    .encode('x', 'genre') // 编码 x 通道
    .encode('y', 'sold'); // 编码 y 通道

  // 渲染可视化
  chart.render();
});
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