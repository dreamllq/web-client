<template>
  <div class='chart-axis'>
    <axis-dimension />
    <axis-measure style='margin-top: 8px;' />
  </div>
</template>

<script setup lang="ts">
import AxisDimension from './dimension.vue';
import AxisMeasure from './measure.vue';

</script>

<style scoped lang="scss">
.chart-axis {
  padding: 8px;
  border-bottom: 1px solid var(--el-border-color);
}
</style>