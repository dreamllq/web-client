<template>
  <el-container direction='vertical' class='chart-type'>
    <el-header style='padding: 0; height: 30px; line-height: 30px;'>
      <h6 style='margin: 0;'>
        图表类型
      </h6>
    </el-header>
    <el-main style='padding: 0;'>
      <div class='chart-type-list'>
        <div
          class='chart-type-item'
          :class='{ "chart-type-item-selected": chartType === ChartType.Pie }' 
          @click='onSelectType(ChartType.Pie)'>
          <i class='iconfontbi icon-bi-tubiao-bingtu' />
        </div>
        <div
          class='chart-type-item' 
          :class='{ "chart-type-item-selected": chartType === ChartType.Line }'
          @click='onSelectType(ChartType.Line)'>
          <i class='iconfontbi icon-bi-tubiao-zhexiantu' />
        </div>
        <div 
          class='chart-type-item'
          :class='{ "chart-type-item-selected": chartType === ChartType.Bar }'
          @click='onSelectType(ChartType.Bar)'>
          <i class='iconfontbi icon-bi-tubiao-zhuzhuangtu' />
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { ChartType } from '../constants/type';
import { useBiChartSettingStore } from '../store';

const { chartType } = useBiChartSettingStore()!;

const onSelectType = (type: ChartType) => {
  chartType.value = type;
};
</script>

<style scoped lang="scss">
@import url(../iconfont/iconfont.css);

.chart-type{
  padding: 8px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .chart-type-list{
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .chart-type-item{
      width: 25%;
      text-align: center;
      line-height: 30px;
      cursor: pointer;
      border-radius: 4px;

      &.chart-type-item-selected{
        background-color: var(--el-fill-color);
      }

      .iconfontbi{
        font-size: 20px;
      }
    }
  }
}
</style>